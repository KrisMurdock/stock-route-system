import mermaid from 'mermaid';

mermaid.initialize({
  startOnLoad: false, securityLevel: 'strict', theme: 'base', suppressErrorRendering: true,
  fontFamily: '-apple-system, BlinkMacSystemFont, Segoe UI, sans-serif',
  themeVariables: {
    primaryColor: '#edf4ef', primaryTextColor: '#263d34', primaryBorderColor: '#c4d4ca',
    lineColor: '#8a9c91', secondaryColor: '#f5f6f1', tertiaryColor: '#ffffff',
    actorBkg: '#edf4ef', actorBorder: '#c4d4ca', actorTextColor: '#263d34', actorLineColor: '#d4ded5',
    signalColor: '#6d8b7b', signalTextColor: '#465a4e', labelBoxBkgColor: '#eef3ec', labelBoxBorderColor: '#c4d4ca',
    labelTextColor: '#466251', loopTextColor: '#466251', noteBkgColor: '#f7f5e9', noteBorderColor: '#dfdac0',
    noteTextColor: '#615a3d', activationBkgColor: '#e6efe8', fontSize: '14px'
  },
  sequence: {
    useMaxWidth: false, mirrorActors: false, showSequenceNumbers: false,
    diagramMarginX: 28, diagramMarginY: 24, actorMargin: 22, width: 138, height: 58,
    boxMargin: 12, boxTextMargin: 8, noteMargin: 16, messageMargin: 30,
    wrap: true, wrapPadding: 12, actorFontSize: 15, noteFontSize: 15, messageFontSize: 14
  }
});

const host = document.getElementById('sequenceDiagram');
const viewport = document.querySelector('.sequence-viewport');
let revision = 0, renderCount = 0, lastSource = '', scale = null, fit = false;
let running = false;

function resize() {
  const svg = host.querySelector('svg');
  if (!svg) return;
  const width = svg.viewBox.baseVal.width, height = svg.viewBox.baseVal.height;
  const fitScale = Math.min(1, (viewport.clientWidth - 48) / width);
  const actualScale = scale ?? (fit || viewport.clientWidth >= 600 ? fitScale : 0.85);
  svg.style.width = `${width * actualScale}px`;
  svg.style.height = `${height * actualScale}px`;
  document.getElementById('zoomLabel').textContent = `${Math.round(actualScale * 100)}%`;
}

function linkElement(element, node, leaf) {
  element.setAttribute('tabindex', '0');
  element.setAttribute('role', 'button');
  element.setAttribute('aria-label', `编辑 ${element.textContent.trim()}`);
  element.classList.add('sequence-link');
  element.dataset[leaf === undefined ? 'sequenceNode' : 'sequenceLeaf'] = leaf === undefined ? node : `${node}:${leaf}`;
  const choose = () => window.RouteWorkspace.select(node, leaf, element);
  element.addEventListener('click', choose);
  element.addEventListener('keydown', event => {
    if (event.key === 'Enter' || event.key === ' ') { event.preventDefault(); choose(); }
  });
}

function bindDiagram(svg) {
  svg.querySelectorAll('rect.actor').forEach(rect => { rect.setAttribute('rx', '8'); rect.setAttribute('ry', '8'); });
  svg.querySelectorAll('.labelText').forEach(text => {
    const translated = { loop: '循环', alt: '分支', break: '退出' }[text.textContent.trim()];
    if (translated) text.textContent = translated;
  });
  // Mermaid actors and notes have stable numeric prefixes, independent of editable names.
  svg.querySelectorAll('text.actor').forEach(text => {
    const match = text.textContent.match(/^0([1-6])\s*·/);
    if (match) linkElement(text.parentElement, Number(match[1]) - 1);
  });
  svg.querySelectorAll('text.noteText').forEach(text => {
    const match = text.textContent.match(/^0([1-6])\.(\d+)\s*·/);
    if (match) linkElement(text.parentElement, Number(match[1]) - 1, Number(match[2]) - 1);
  });
  svg.removeAttribute('role');
  svg.setAttribute('aria-label', '交易路线：点击大节点或边界条件编辑');
  highlight();
}

function highlight() {
  const view = window.RouteWorkspace.snapshot();
  host.querySelectorAll('[data-sequence-node]').forEach(el => {
    const active = Number(el.dataset.sequenceNode) === view.selected;
    el.classList.toggle('is-selected', active);
    el.setAttribute('aria-pressed', String(active));
  });
  host.querySelectorAll('[data-sequence-leaf]').forEach(el => {
    const [node, leaf] = el.dataset.sequenceLeaf.split(':').map(Number);
    el.dataset.status = view.nodes[node].rules[leaf][2];
    el.classList.toggle('is-selected', node === view.selected && leaf === view.leaf);
  });
}

async function render() {
  revision += 1;
  if (running) return;
  running = true;
  try {
    while (true) {
      const ownRevision = revision, view = window.RouteWorkspace.snapshot();
      const source = window.RouteDiagram.source(view.nodes, view);
      if (source === lastSource) { highlight(); break; }
      host.setAttribute('aria-busy', 'true');
      const { svg } = await mermaid.render(`routeSequence${++renderCount}`, source);
      if (ownRevision !== revision) continue;
      const scroll = { top: viewport.scrollTop, left: viewport.scrollLeft };
      const focused = document.activeElement;
      const restoreFocus = host.contains(focused) ? { node: focused.dataset.sequenceNode, leaf: focused.dataset.sequenceLeaf } : null;
      host.innerHTML = svg;
      lastSource = source;
      bindDiagram(host.querySelector('svg'));
      resize();
      viewport.scrollTop = scroll.top; viewport.scrollLeft = scroll.left;
      if (restoreFocus?.node !== undefined) host.querySelector(`[data-sequence-node="${restoreFocus.node}"]`)?.focus({ preventScroll: true });
      else if (restoreFocus?.leaf !== undefined) host.querySelector(`[data-sequence-leaf="${restoreFocus.leaf}"]`)?.focus({ preventScroll: true });
      host.setAttribute('aria-busy', 'false');
      break;
    }
  } catch (error) {
    console.error('Sequence diagram failed', error);
    host.textContent = '路线图暂时无法显示，请刷新页面重试。上方节点仍可编辑。';
    host.setAttribute('aria-busy', 'false');
  } finally { running = false; }
}

document.addEventListener('route:change', render);
for (const [id, step] of [['zoomIn', 0.15], ['zoomOut', -0.15]]) {
  document.getElementById(id).addEventListener('click', () => {
    const current = Number.parseInt(document.getElementById('zoomLabel').textContent, 10) / 100;
    scale = Math.min(1.6, Math.max(0.5, current + step)); resize();
  });
}
document.getElementById('zoomFit').addEventListener('click', () => { scale = null; fit = true; resize(); viewport.scrollTo(0, 0); });
new ResizeObserver(resize).observe(viewport);
render();
