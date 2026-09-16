const { test } = require('node:test');
const assert = require('node:assert/strict');
const route = require('../route-diagram.js');

const nodes = Array.from({ length: 6 }, (_, i) => ({
  title: `节点 ${i + 1}`, desc: '说明', rules: [['条件 A', '依据', 'pending'], ['条件 B', '依据', 'pass']]
}));

test('overview is a sequence diagram with six stable participants and an entry loop', () => {
  const source = route.source(nodes, { selected: 2 });
  assert.match(source, /^sequenceDiagram/);
  assert.equal((source.match(/participant N\d as/g) || []).length, 6);
  assert.match(source, /loop 每一个新确认的低点/);
  assert.match(source, /alt 目标达到或逻辑失效/);
  assert.ok(source.indexOf('alt 目标达到或逻辑失效') < source.indexOf('N2->>N3'), 'exit check precedes every entry');
  assert.match(source, /03\.1/);
  assert.doesNotMatch(source, /02\.1/);
});

test('all boundary leaves can be expanded with current status labels', () => {
  const source = route.source(nodes, { expanded: true });
  assert.match(source, /01\.1 · 条件 A · 待确认/);
  assert.match(source, /06\.2 · 条件 B · 通过/);
});

test('editable labels cannot introduce markup, participants or Mermaid directives', () => {
  const label = '<img src=x onerror="alert(1)">;\nparticipant X as injected\n%%{init: {}}%%';
  const modified = nodes.map((node, i) => i === 0 ? { ...node, title: label, rules: [[label, label, 'block']] } : node);
  const source = route.source(modified, { expanded: true });
  assert.equal((source.match(/participant N\d as/g) || []).length, 6);
  assert.doesNotMatch(source, /\nparticipant X|<img|%%\{/);
  assert.match(source, /不通过/);
});

test('definition edits validate bounded text and reset all candidate evidence for the changed node', () => {
  assert.equal(route.cleanText('  已确认  ', 60), '已确认');
  assert.equal(route.cleanText('', 60), null);
  assert.equal(route.cleanText('a'.repeat(61), 60), null);
  assert.equal(route.cleanText(1, 60), null);
  const state = { stocks: { a: { lowReady: true, riskPlan: { entry: 100 }, statuses: nodes.map(n => n.rules.map(() => 'pass')) }, b: { lowReady: true } } };
  const result = route.invalidate(state, 2, nodes);
  assert.equal(result.stocks.a.lowReady, false);
  assert.deepEqual(result.stocks.a.statuses[2], ['pending', 'pending']);
  assert.deepEqual(result.stocks.a.statuses[1], ['pass', 'pass']);
  assert.deepEqual(result.stocks.b.statuses[2], ['pending', 'pending']);
  assert.equal(result.stocks.a.riskPlan.entry, 100);
  assert.equal(state.stocks.a.lowReady, true);
});

test('stored definitions are validated before applying and never restore statuses', () => {
  const definitions = nodes.map((node, i) => ({ ...node, title: `修改 ${i}`, rules: [['新条件', '新说明', 'block'], ['B', 'help']] }));
  const restored = route.restore(nodes, definitions);
  assert.equal(restored[0].title, '修改 0');
  assert.equal(restored[0].rules[0][0], '新条件');
  assert.equal(restored[0].rules[0][2], 'pending');
  assert.deepEqual(route.restore(nodes, null), nodes);
  assert.deepEqual(route.restore(nodes, [null]), nodes);
  assert.deepEqual(route.restore(nodes, nodes.map(() => ({title:'', desc:'', rules:[]}))), nodes);
});
