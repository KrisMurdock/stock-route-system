const { test } = require('node:test');
const assert = require('node:assert/strict');
const { evaluatePlan } = require('../risk-plan.js');

const plan = { market: 'A', marketChecked: true, entry: 100, stop: 95, target: 110, cost: 0, minRatio: 2 };

test('10% profit / 5% loss is 2:1 and exact threshold passes', () => {
  const result = evaluatePlan(plan);
  assert.equal(result.ratio, 2);
  assert.equal(result.status, 'pass');
  assert.equal(result.targetPct, 10);
});
test('costs reduce reward and increase risk; 0.5 costs fail a 2:1 threshold', () => {
  const result = evaluatePlan({ ...plan, cost: 0.5 });
  assert.equal(result.ratio, 9.5 / 5.5);
  assert.equal(result.status, 'block');
});
test('missing market, confirmation, prices, costs or threshold remain pending', () => {
  for (const key of ['market', 'entry', 'stop', 'target', 'cost', 'minRatio']) {
    for (const empty of ['', null, undefined]) {
      assert.equal(evaluatePlan({ ...plan, [key]: empty }).status, 'pending', key);
    }
  }
  assert.equal(evaluatePlan({ ...plan, marketChecked: false }).status, 'pending');
  assert.equal(evaluatePlan({}).status, 'pending');
});
test('invalid prices and fee assumptions cannot pass', () => {
  for (const values of [{ entry: 0 }, { stop: 100 }, { stop: 101 }, { stop: -1 }, { target: 100 }, { target: 90 }, { cost: -1 }, { cost: 10 }, { minRatio: 0 }, { market: 'US' }, { entry: Infinity }, { entry: 'not-a-number' }]) {
    assert.equal(evaluatePlan({ ...plan, ...values }).status, 'block', JSON.stringify(values));
  }
});
test('港股通 uses same-currency prices and does not assume a fixed holding period', () => {
  assert.equal(evaluatePlan({ ...plan, market: 'HK_CONNECT' }).status, 'pass');
  assert.equal(evaluatePlan({ ...plan, target: 108, minRatio: 1.5 }).ratio, 1.6);
  assert.equal(evaluatePlan({ ...plan, target: 108, minRatio: 1.5 }).status, 'pass');
});
test('never mutates a saved plan and numeric strings are accepted', () => {
  const frozen = Object.freeze({ ...plan, entry: '100' });
  assert.equal(evaluatePlan(frozen).ratio, 2);
  assert.equal(frozen.entry, '100');
});
