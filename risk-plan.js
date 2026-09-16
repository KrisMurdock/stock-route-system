(function (root) {
  const empty = value => value === undefined || value === null || String(value).trim() === '';
  const outcome = (status, reason) => ({ status, reason, ratio: null, targetPct: null });
  function evaluatePlan(plan = {}) {
    if (empty(plan.market)) return outcome('pending', '请为当前候选选择 A 股或港股通。');
    if (!['A', 'HK_CONNECT'].includes(plan.market)) return outcome('block', '市场仅支持 A 股或港股通。');
    const keys = ['entry', 'stop', 'target', 'cost', 'minRatio'];
    if (keys.some(key => empty(plan[key]))) return outcome('pending', '请填写入场价、失效价、目标价、费用和最低盈亏比。');
    const [entry, stop, target, cost, minimum] = keys.map(key => Number(plan[key]));
    if (![entry, stop, target, cost, minimum].every(Number.isFinite) || entry <= 0 || stop <= 0 || target <= 0 || minimum <= 0 || cost < 0) {
      return outcome('block', '价格与最低盈亏比必须为正数，预计费用不能为负。');
    }
    if (stop >= entry || target <= entry) return outcome('block', '做多计划须满足：失效价 < 入场价 < 目标价。');
    const reward = target - entry - cost;
    const risk = entry - stop + cost;
    if (reward <= 0) return outcome('block', '预计费用已覆盖盈利空间，请重新评估。');
    const ratio = reward / risk;
    const figures = { ratio, reward, risk, targetPct: (target - entry) / entry * 100 };
    if (plan.marketChecked !== true) return { ...outcome('pending', '请先核验当前市场的交易边界。'), ...figures };
    const passes = ratio + 1e-10 >= minimum;
    return { ...outcome(passes ? 'pass' : 'block', passes ? '计划盈亏比达标；仍须完成全部节点检查。' : '计划盈亏比低于门槛，等待价格或计划改善。'), ...figures };
  }
  const api = { evaluatePlan };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.RiskPlan = api;
})(globalThis);
