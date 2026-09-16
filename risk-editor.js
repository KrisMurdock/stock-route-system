(function (root) {
  const boundary = {
    A: 'A 股股票通常当日买入、下一交易日方可卖出；核验所属板块涨跌幅限制、停牌状态、下单单位与可卖数量。不能假定当日新增仓位可以止损。',
    HK_CONNECT: '港股通须核验当前标的可买资格、开通权限、通道交易日、每手数量和订单限制。港股通常无每日涨跌幅限制；港币报价与人民币结算分开核算，汇率和费用会影响实际盈亏。'
  };
  const fields = [
    ['entry', 'riskEntry', '本笔计划入场价'],
    ['stop', 'riskStop', '逻辑失效 / 止损价'],
    ['target', 'riskTarget', '计划目标价'],
    ['cost', 'riskCost', '每股往返费用与滑点'],
    ['minRatio', 'riskMinimum', '最低计划盈亏比（:1）']
  ];

  function mountRiskEditor(host, { read, write, targetPercent, onChange, name }) {
    const section = document.createElement('section');
    section.className = 'risk-editor';
    section.innerHTML = '<h4>本笔盈亏比计划</h4><p id="riskCandidate"></p>' +
      '<div class="field"><label for="riskMarket">本只股票所属市场</label><select id="riskMarket"><option value="">待选择</option><option value="A">A 股</option><option value="HK_CONNECT">港股通</option></select></div>' +
      '<p id="marketBoundary"></p><div class="risk-grid">' + fields.map(([, id, label]) =>
        '<div class="field"><label for="' + id + '">' + label + '</label><input id="' + id + '" type="number" step="any" min="0" placeholder="待设置"></div>').join('') +
      '</div><button type="button" class="btn" id="useTargetTemplate">用初始止盈模板填入目标价</button>' +
      '<p>价格与费用统一使用报价币种；费用填 0 表示暂不计。港股通这里按港币估算，不代表人民币结算收益。最低盈亏比由你设置。补仓还需复核整仓最大损失；此处计算本笔计划。</p>' +
      '<label class="risk-check"><input type="checkbox" id="marketChecked">已核验本标的当前交易边界</label>' +
      '<output id="riskResult" aria-live="polite"></output><p>计划盈亏比 =（目标价 − 入场价 − 往返费用）÷（入场价 − 失效价 + 往返费用）。失效价是计划退出依据；跳空、停牌及成交限制可能导致超额亏损。</p>';
    host.append(section);
    section.querySelector('#riskCandidate').textContent = '当前候选：' + name;
    const market = section.querySelector('#riskMarket');
    const checked = section.querySelector('#marketChecked');

    function refresh() {
      const plan = read();
      const result = root.RiskPlan.evaluatePlan(plan);
      section.querySelector('#marketBoundary').textContent = boundary[plan.market] || '请选择本标的市场；切换市场会清空原价格、费用及核验状态，避免混用币种。';
      const ratio = result.ratio === null ? '—' : result.ratio.toFixed(2) + ' : 1';
      const label = { pending: '待设置 / 待核验', pass: '达标', block: '未达标' }[result.status];
      section.querySelector('#riskResult').textContent = ratio + ' · ' + label + '。' + result.reason;
      section.querySelector('#useTargetTemplate').textContent = '按 +' + targetPercent() + '% 模板填入目标价';
      onChange();
    }
    function fill() {
      const plan = read();
      market.value = plan.market || '';
      checked.checked = plan.marketChecked === true;
      for (const [key, id] of fields) section.querySelector('#' + id).value = plan[key] ?? '';
      refresh();
    }
    function update(delta) {
      write({ ...read(), ...delta });
      refresh();
    }
    for (const [key, id] of fields) {
      section.querySelector('#' + id).addEventListener('change', event => update({ [key]: event.target.value }));
    }
    market.addEventListener('change', () => {
      write({ market: market.value, marketChecked: false, entry: '', stop: '', target: '', cost: '', minRatio: read().minRatio ?? '' });
      fill();
    });
    checked.addEventListener('change', () => update({ marketChecked: checked.checked }));
    section.querySelector('#useTargetTemplate').addEventListener('click', () => {
      const entry = Number(read().entry);
      if (!Number.isFinite(entry) || entry <= 0) {
        section.querySelector('#riskResult').textContent = '请先填写有效的计划入场价。';
        return;
      }
      update({ target: String(Number((entry * (1 + targetPercent() / 100)).toFixed(6))) });
      fill();
    });
    fill();
  }
  root.mountRiskEditor = mountRiskEditor;
})(globalThis);
