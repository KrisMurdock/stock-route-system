const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({ headless: true });
  try {
    const page = await browser.newPage();
    page.setDefaultTimeout(5000);
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(process.env.BASE_URL || 'http://127.0.0.1:4173');
    await page.locator('[data-node="2"]').click();
    assert.equal(await page.locator('#riskMarket').count(), 1, 'low-point node must expose editable market and risk plan');
    assert.match(await page.locator('#riskResult').innerText(), /待设置/);
    await page.locator('#riskMarket').selectOption('HK_CONNECT');
    assert.match(await page.locator('#marketBoundary').innerText(), /港股通.*标的/);
    for (const [id, value] of Object.entries({ riskEntry: '100', riskStop: '95', riskTarget: '110', riskCost: '0', riskMinimum: '2' })) {
      await page.locator('#' + id).fill(value);
      await page.locator('#' + id).press('Tab');
    }
    await page.locator('#marketChecked').check();
    assert.match(await page.locator('#riskResult').innerText(), /2.00 : 1.*达标/s);
    await page.locator('#riskCost').fill('0.5');
    await page.locator('#riskCost').press('Tab');
    assert.match(await page.locator('#riskResult').innerText(), /1.73 : 1.*未达标/s);
    assert.match(await page.locator('[data-node="3"] .node-state').innerText(), /盈亏比未达标/);
    await page.locator('[data-node="3"]').click();
    for (const select of await page.locator('.state').all()) await select.selectOption('pass');
    await page.locator('#batchAmount').fill('100');
    await page.locator('#recordBuyBtn').click();
    assert.match(await page.locator('#toast').innerText(), /盈亏比/);
    assert.doesNotMatch(await page.locator('#executionLog').innerText(), /分批成交/);
    await page.locator('#riskMinimum').fill('1.5');
    await page.locator('#riskMinimum').press('Tab');
    for (const index of [0,1,4]) {
      await page.locator('[data-node="'+index+'"]').click();
      for (const select of await page.locator('.state').all()) await select.selectOption('pass');
    }
    await page.locator('[data-node="2"]').click();
    for (const select of await page.locator('.state').all()) await select.selectOption('pass');
    await page.locator('#recordLowBtn').click();
    await page.locator('.state').last().selectOption('block');
    await page.locator('[data-node="3"]').click();
    await page.locator('#batchAmount').fill('100');
    await page.locator('#recordBuyBtn').click();
    assert.doesNotMatch(await page.locator('#executionLog').innerText(), /分批成交/, 'withdrawn evidence must block buying');
    await page.locator('[data-node="2"]').click();
    await page.locator('.state').last().selectOption('pass');
    await page.locator('#recordLowBtn').click();
    await page.locator('[data-node="3"]').click();
    await page.locator('#batchAmount').fill('100');
    await page.locator('#recordBuyBtn').click();
    assert.match(await page.locator('#executionLog').innerText(), /分批成交/);
    await page.locator('#batchAmount').fill('100');
    await page.locator('#recordBuyBtn').click();
    assert.match(await page.locator('#toast').innerText(), /重新确认一个低点/);
    await page.locator('[data-stock="far"]').click();
    assert.equal(await page.locator('#riskEntry').inputValue(), '', 'plans belong to individual candidates');
    for (const select of await page.locator('.state').all()) assert.equal(await select.inputValue(), 'pending');
    await page.locator('[data-stock="star"]').click();
    assert.equal(await page.locator('#riskEntry').inputValue(), '100');
    await page.reload();
    await page.locator('[data-node="2"]').click();
    assert.equal(await page.locator('#riskMarket').inputValue(), 'HK_CONNECT');
    assert.equal(await page.locator('#riskMinimum').inputValue(), '1.5');
    await page.locator('#riskTarget').fill('108');
    await page.locator('#riskTarget').press('Tab');
    await page.locator('[data-node="5"]').click();
    await page.locator('#returnInput').fill('8');
    await page.locator('#createSellBtn').click();
    assert.match(await page.locator('#executionLog').innerText(), /挂卖单/, 'sell gate follows saved target, not the global 10% template');
    const literal = '<img src=x onerror="window.injected=true">';
    await page.locator('#versionNote').fill(literal);
    await page.locator('#createVersionBtn').click();
    assert.match(await page.locator('#versionList').innerText(), /<img/);
    assert.equal(await page.locator('#versionList img').count(), 0);
    await page.reload();
    assert.equal(await page.locator('#versionList img').count(), 0);
    for (const width of [390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      assert.ok(await page.evaluate(() => document.body.scrollWidth <= innerWidth), `no page overflow at ${width}`);
    }
    assert.deepEqual(errors, []);
    console.log('PASS market / risk ratio / per-candidate persistence / buy gate / sell target / XSS / responsive');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
