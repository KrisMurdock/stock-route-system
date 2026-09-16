import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { chromium } = require(process.env.PLAYWRIGHT_PATH || 'playwright');

const baseUrl = process.env.BASE_URL || 'http://127.0.0.1:4173';
const browser = await chromium.launch({ headless: true });
const context = await browser.newContext();
const page = await context.newPage();
const failures = [];
const check = (condition, message) => { if (!condition) failures.push(message); };

await page.goto(baseUrl, { waitUntil: 'networkidle' });
await page.evaluate(() => localStorage.clear());
await page.reload({ waitUntil: 'networkidle' });

check(await page.locator('.flow-node').count() === 6, 'six route nodes render');
await page.locator('[data-node="2"]').click();
check((await page.locator('#detailBody h3').textContent()).includes('低位确认'), 'low-point node opens');
await page.locator('#riskMarket').selectOption('A');
for (const [id, value] of Object.entries({ riskEntry:'100', riskStop:'95', riskTarget:'110', riskCost:'0', riskMinimum:'2' })) {
  await page.locator('#'+id).fill(value);
  await page.locator('#'+id).press('Tab');
}
await page.locator('#marketChecked').check();
for (const index of [0,1,4]) {
  await page.locator('[data-node="'+index+'"]').click();
  for (const select of await page.locator('.state').all()) await select.selectOption('pass');
}
await page.locator('[data-node="2"]').click();
await page.locator('.state').first().selectOption('pass');
check((await page.locator('[data-node="2"] .node-state').textContent()).includes('部分通过'), 'node state reflects partial leaf edit');
await page.locator('.state').evaluateAll(selects => selects.forEach(select => { select.value = 'pass'; select.dispatchEvent(new Event('change', { bubbles: true })); }));
check((await page.locator('[data-node="2"] .node-state').textContent()).includes('已通过'), 'node state reflects all leaf edits');
check(await page.locator('#recordLowBtn').count() === 1, 'low-point record action exists');
await page.locator('#recordLowBtn').click();
check((await page.locator('#executionLog').textContent()).includes('低点'), 'low-point event is logged');

await page.locator('[data-node="3"]').click();
check(await page.locator('#recordBuyBtn').count() === 1, 'batch buy action exists');
await page.locator('.state').evaluateAll(selects => selects.forEach(select => { select.value = 'pass'; select.dispatchEvent(new Event('change', { bubbles: true })); }));
await page.locator('#batchAmount').fill('1000');
await page.locator('#recordBuyBtn').click();
check((await page.locator('#executionLog').textContent()).includes('成交'), 'batch buy event is logged');

await page.locator('[data-node="5"]').click();
await page.locator('#returnInput').fill('10');
await page.locator('#createSellBtn').click();
check((await page.locator('#executionLog').textContent()).includes('挂卖单'), 'sell order event is logged');
await page.locator('#fillSellBtn').click();
check((await page.locator('#executionLog').textContent()).includes('卖出成交'), 'sell fill event is logged');

await page.locator('#versionNote').fill('初始闭环验证');
await page.locator('#createVersionBtn').click();
check((await page.locator('#versionList').textContent()).includes('v0.2'), 'new route version is created');

await page.reload({ waitUntil: 'networkidle' });
check((await page.locator('#executionLog').textContent()).includes('卖出成交'), 'execution log persists after reload');
check((await page.locator('#versionList').textContent()).includes('v0.2'), 'version persists after reload');
await page.locator('[data-node="2"]').click();
check((await page.locator('[data-node="2"] .node-state').textContent()).includes('已通过'), 'node state persists after reload');

await browser.close();
if (failures.length) { console.error(failures.map(message => `FAIL ${message}`).join('\n')); process.exit(1); }
console.log('PASS stock-route end-to-end workflow');
