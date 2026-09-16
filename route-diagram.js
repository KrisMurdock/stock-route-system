(function (root, factory) {
  const api = factory();
  if (typeof module === 'object' && module.exports) module.exports = api;
  else root.RouteDiagram = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function () {
  const labels = { pending: '待确认', pass: '通过', block: '不通过' };
  const cleanText = (value, limit) => typeof value === 'string' && value.trim().length > 0 && value.trim().length <= limit ? value.trim() : null;
  // Mermaid has its own entity syntax. Only labels, never grammar, contain user text.
  const label = value => String(value).replace(/[\r\n\t]/g, ' ').replace(/[^\p{L}\p{N} ，。·/：、！？（）\-]/gu, char => `#${char.codePointAt(0)};`);

  function boundaries(nodes, index, options) {
    if (!options.expanded && options.selected !== index) return [];
    return nodes[index].rules.map((rule, ri) => `Note over N${index}: 0${index + 1}.${ri + 1} · ${label(rule[0])} · ${labels[rule[2]] || labels.pending}`);
  }

  function source(nodes, options = {}) {
    return [
      'sequenceDiagram',
      'accTitle: 持盈路线，可交互时序图',
      'accDescr: 六个大节点依次完成交易前提、龙头筛选、低位评估、分批买入、持仓管理与退出。点击节点或编号边界条件编辑。退出优先于补仓。',
      ...nodes.map((node, index) => `participant N${index} as 0${index + 1} · ${label(node.title)}`),
      ...boundaries(nodes, 0, options),
      'N0->>N1: 预算与市场范围已确认',
      ...boundaries(nodes, 1, options),
      'N1->>N2: 龙头逻辑成立，进入观察',
      'loop 每一个新确认的低点',
      ...boundaries(nodes, 4, options),
      'alt 目标达到或逻辑失效',
      'break 退出优先，结束本轮买入',
      'N4->>N5: 暂停补仓，按计划退出',
      ...boundaries(nodes, 5, options),
      'N5->>N5: 跟踪挂单与成交；受阻则继续管理',
      'end',
      'else 未触发退出，继续评估',
      ...boundaries(nodes, 2, options),
      'alt 证据、盈亏比与预算均通过',
      'N2->>N3: 确认低点，投入一笔',
      ...boundaries(nodes, 3, options),
      'N3->>N4: 记录成交，更新持仓',
      'else 待确认或条件不通过',
      'N2-->>N2: 继续观察，暂不买入',
      'end',
      'N4-->>N2: 等待下一个低点，重新评估',
      'end',
      'end',
      'N5-->>N0: 完成退出后复盘，迭代下一版路线'
    ].join('\n');
  }

  function invalidate(state, index, nodes) {
    const stocks = Object.fromEntries(Object.entries(state.stocks).map(([id, stock]) => [id, {
      ...stock, lowReady: false,
      statuses: nodes.map((node, ni) => node.rules.map((_, ri) => ni === index ? 'pending' : stock.statuses?.[ni]?.[ri] || 'pending'))
    }]));
    return { ...state, stocks };
  }

  function restore(nodes, definitions) {
    if (!Array.isArray(definitions) || definitions.length !== nodes.length) return nodes;
    return nodes.map((node, i) => {
      const saved = definitions[i];
      if (!saved || !cleanText(saved.title, 60) || !cleanText(saved.desc, 400) || !Array.isArray(saved.rules) || saved.rules.length !== node.rules.length) return node;
      if (!saved.rules.every(rule => Array.isArray(rule) && cleanText(rule[0], 60) && cleanText(rule[1], 400))) return node;
      return { ...node, title: saved.title.trim(), desc: saved.desc.trim(), rules: node.rules.map((rule, ri) => [saved.rules[ri][0].trim(), saved.rules[ri][1].trim(), rule[2]]) };
    });
  }
  return { source, invalidate, restore, cleanText };
});
