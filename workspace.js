/* UI composition for the existing local trading record. No broker actions. */
(() => {
  let leaf, expanded = false, returnFocus;
  const panel = document.querySelector('.detail');
  const backdrop = document.getElementById('detailBackdrop');
  const smallScreen = () => matchMedia('(max-width: 1179px)').matches;
  const definitions = () => nodes.map(node => ({ title: node.title, desc: node.desc, rules: node.rules.map(rule => rule.slice(0, 2)) }));

  function refresh() {
    document.querySelectorAll('.flow-node').forEach((element, index) => {
      element.classList.toggle('selected', index === selected);
      element.setAttribute('aria-pressed', String(index === selected));
      element.querySelector('.node-title').textContent = nodes[index].title;
      element.setAttribute('aria-label', `选择节点：${nodes[index].title}`);
    });
    document.getElementById('activeCandidateLabel').textContent = `当前候选 · ${currentStockName()}`;
    const result = planResult();
    document.getElementById('planSummary').textContent = result.ratio ? `计划盈亏比 ${result.ratio.toFixed(2)} : 1` : '盈亏比待设置';
    document.querySelectorAll('.stock').forEach(row => {
      const stock = appState.stocks[row.dataset.stock];
      if (!stock) return;
      row.querySelector('.stock-meta').textContent = `第 ${stock.batchCount} / ${stock.maxBatches} 笔 · ${stock.order === 'filled' ? '退出已记录' : stock.order === 'pending' ? '挂单待成交' : stock.lowReady ? '低点已确认' : '等待判断'}`;
      // Initial candidates are examples; no quote feed is connected.
      row.querySelector('.stock-price').textContent = ['star', 'far', 'energy'].includes(row.dataset.stock) ? '示例候选' : '手动记录';
      const progress = row.querySelector('.stock-progress i');
      if (progress) progress.style.width = `${stock.batchCount / stock.maxBatches * 100}%`;
    });
    document.dispatchEvent(new Event('route:change'));
  }

  function openPanel() {
    panel.classList.add('is-open');
    if (smallScreen()) {
      backdrop.hidden = false;
      backgroundElements().forEach(element => { element.inert = true; });
      panel.setAttribute('role', 'dialog');
      panel.setAttribute('aria-modal', 'true');
      document.body.classList.add('detail-open');
    }
  }

  function closePanel() {
    panel.classList.remove('is-open'); backdrop.hidden = true;
    panel.removeAttribute('role'); panel.removeAttribute('aria-modal');
    document.body.classList.remove('detail-open');
    backgroundElements().forEach(element => { element.inert = false; });
    (returnFocus?.isConnected ? returnFocus : document.querySelector(`[data-node="${selected}"]`))?.focus();
  }

  function select(index, rule, trigger) {
    if (!nodes[index]) return;
    selected = index; leaf = rule; returnFocus = trigger;
    renderDetail(); openPanel(); refresh();
    if (rule !== undefined) {
      const target = detailBody.querySelector(`[data-leaf="${rule}"]`);
      target?.scrollIntoView({ block: 'nearest', behavior: 'instant' });
      target?.querySelector('select')?.focus({ preventScroll: true });
    } else if (smallScreen()) document.getElementById('closeDetail').focus();
  }

  function field(id, label, value, multiline = false) {
    const wrapper = document.createElement('div'); wrapper.className = 'field';
    const caption = document.createElement('label'); caption.htmlFor = id; caption.textContent = label;
    const input = document.createElement(multiline ? 'textarea' : 'input');
    input.id = id; input.value = value; input.maxLength = multiline ? 400 : 60;
    input.required = true;
    wrapper.append(caption, input); return wrapper;
  }

  function backgroundElements() {
    return [...document.querySelectorAll('aside, main > :not(.layout), .layout > :not(.detail)')];
  }

  function commitDefinition(index, updated, focusSelector) {
    saveState();
    nodes = nodes.map((node, ni) => ni === index ? { ...updated, rules: updated.rules.map(rule => [rule[0], rule[1], 'pending']) } : node);
    appState = { ...RouteDiagram.invalidate(appState, index, nodes), definitions: definitions() };
    saveState(); renderDetail(); refreshFlowStates();
    detailBody.querySelector(focusSelector)?.focus({ preventScroll: true });
    toast('规则已保存；所有候选的本节点需重新判断，未执行低点已撤销。');
  }

  function editor(summary, className, inputs, onSave) {
    const container = document.createElement('details'); container.className = className;
    const heading = document.createElement('summary'); heading.textContent = summary;
    const button = document.createElement('button'); button.className = 'btn'; button.textContent = '保存修改';
    const message = document.createElement('p'); message.className = 'edit-hint';
    message.textContent = '适用于整条路线。修改后本节点需重新判断。';
    const error = document.createElement('p'); error.className = 'edit-error'; error.setAttribute('role', 'alert');
    button.addEventListener('click', () => {
      const values = inputs.map(input => input.querySelector('input, textarea'));
      if (values.some(input => !RouteDiagram.cleanText(input.value, input.maxLength))) {
        error.textContent = '请填写名称和说明，并保持在字数限制内。';
        values.find(input => !RouteDiagram.cleanText(input.value, input.maxLength))?.focus(); return;
      }
      onSave(values.map(input => input.value.trim()));
    });
    container.append(heading, ...inputs, message, error, button);
    return { container, button };
  }

  function mountEditor() {
    const index = selected, node = nodes[index];
    const nodeEditor = editor('编辑节点', 'node-editor', [field('nodeTitle', '节点名称', node.title), field('nodeDescription', '节点说明', node.desc, true)], ([title, desc]) => commitDefinition(index, { ...nodes[index], title, desc }, '.node-editor summary'));
    nodeEditor.button.id = 'saveNodeDefinition';
    detailBody.querySelector('.detail-title').after(nodeEditor.container);
    detailBody.querySelectorAll('.rule').forEach((element, ri) => {
      element.classList.toggle('selected-rule', ri === leaf);
      const edit = editor('编辑条件', 'rule-editor', [field(`ruleTitle-${ri}`, '条件名称', node.rules[ri][0]), field(`ruleHelp-${ri}`, '判断依据', node.rules[ri][1], true)], ([title, help]) => {
        const current = nodes[index];
        commitDefinition(index, { ...current, rules: current.rules.map((rule, position) => position === ri ? [title, help, 'pending'] : rule) }, `[data-leaf="${ri}"] summary`);
      });
      edit.button.dataset.saveRule = ri;
      element.append(edit.container);
    });
  }

  window.RouteWorkspace = { snapshot: () => ({ nodes, selected, leaf, expanded }), select, refresh, mountEditor };
  nodes = RouteDiagram.restore(nodes, appState.definitions);
  document.getElementById('expandBoundaries').addEventListener('click', event => {
    expanded = !expanded;
    event.currentTarget.textContent = expanded ? '仅展开当前节点' : '展开全部边界';
    event.currentTarget.setAttribute('aria-pressed', String(expanded)); refresh();
  });
  document.getElementById('closeDetail').addEventListener('click', closePanel);
  backdrop.addEventListener('click', closePanel);
  document.addEventListener('keydown', event => {
    if (!smallScreen() || !panel.classList.contains('is-open')) return;
    if (event.key === 'Escape') closePanel();
    if (event.key !== 'Tab') return;
    const focusable = [...panel.querySelectorAll('button, input, select, textarea, summary')].filter(el => el.getClientRects().length && !el.disabled);
    const first = focusable[0], last = focusable[focusable.length - 1];
    if (!panel.contains(document.activeElement)) { event.preventDefault(); first.focus(); return; }
    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
    if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
  });
  matchMedia('(max-width: 1179px)').addEventListener('change', () => {
    if (smallScreen()) closePanel();
    else { backdrop.hidden = true; panel.removeAttribute('role'); panel.removeAttribute('aria-modal'); document.body.classList.remove('detail-open'); backgroundElements().forEach(element => { element.inert = false; }); }
  });
  const destinations = ['.route-panel', '.watch', '#workflowRecords', '#workflowRecords', '#versionList', '.route-panel'];
  document.querySelectorAll('.nav-item').forEach((button, index) => {
    button.setAttribute('aria-label', button.textContent.trim());
    button.addEventListener('click', () => {
      document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('active', item === button));
      document.querySelector(destinations[index]).scrollIntoView({ behavior: matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth', block: 'start' });
      if (index === 5) select(selected, undefined, button);
    });
  });
  renderDetail(); refreshFlowStates();
})();
