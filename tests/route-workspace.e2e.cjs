const assert = require('node:assert/strict');
const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  try {
    const page = await browser.newPage({ viewport: { width: 1600, height: 1000 } });
    const errors = [];
    page.on('pageerror', error => errors.push(error.message));
    await page.goto(process.env.BASE_URL || 'http://127.0.0.1:4173');
    await page.locator('#sequenceDiagram svg').waitFor({ timeout: 15000 });
    assert.equal(await page.locator('#sequenceDiagram [data-sequence-node]').count(), 6);
    await page.locator('#sequenceDiagram [data-sequence-node="2"]').click();
    assert.match(await page.locator('#detailBody h3').innerText(), /低位/);
    await page.locator('#sequenceDiagram [data-sequence-leaf="2:1"]').click();
    assert.equal(await page.locator('.rule.selected-rule').count(), 1);
    await page.locator('.state').nth(1).selectOption('pass');
    await page.waitForFunction(() => document.querySelector('[data-sequence-leaf="2:1"]')?.textContent.includes('通过'));
    await page.locator('.rule.selected-rule summary').click();
    await page.locator('#ruleTitle-1').fill('回踩后重新站稳');
    await page.locator('#ruleHelp-1').fill('记录当天价格与确认依据');
    await page.locator('[data-save-rule="1"]').click();
    assert.equal(await page.locator('.state').nth(1).inputValue(), 'pending');
    await page.waitForFunction(() => document.querySelector('[data-sequence-leaf="2:1"]')?.textContent.includes('回踩后重新站稳'));
    await page.locator('#expandBoundaries').click();
    await page.locator('#sequenceDiagram [data-sequence-leaf="5:2"]').waitFor();
    assert.equal(await page.locator('#sequenceDiagram [data-sequence-leaf]').count(), 17);
    await page.locator('#zoomIn').click();
    assert.notEqual(await page.locator('#zoomLabel').innerText(), '100%');
    await page.locator('#zoomFit').click();
    await page.reload();
    await page.locator('[data-node="2"]').click();
    assert.match(await page.locator('.rule').nth(1).innerText(), /回踩后重新站稳/);
    await page.locator('.node-editor summary').click();
    await page.locator('#nodeTitle').fill('我的低位判断');
    await page.locator('#saveNodeDefinition').click();
    await page.waitForFunction(() => document.querySelector('[data-sequence-node="2"]')?.textContent.includes('我的低位判断'));
    // Untrusted rule text stays inert in both HTML editors and the Mermaid SVG.
    await page.locator('.rule').first().locator('summary').click();
    await page.locator('#ruleTitle-0').fill('<img src=x onerror="window.__routeXss=true">');
    await page.locator('[data-save-rule="0"]').click();
    await page.waitForFunction(() => document.querySelector('[data-sequence-leaf="2:0"]')?.textContent.includes('<img'));
    assert.equal(await page.locator('#detailBody img, #sequenceDiagram image').count(), 0);
    assert.equal(await page.evaluate(() => window.__routeXss), undefined);
    await page.locator('#versionNote').fill('调整低位判断依据');
    await page.locator('#createVersionBtn').click();
    const savedVersion = await page.evaluate(() => JSON.parse(localStorage.getItem('stock-route-v01')).versions[0]);
    assert.equal(savedVersion.definitions[2].title, '我的低位判断');
    await page.locator('[data-stock="far"]').click();
    assert.equal(await page.locator('.state').first().inputValue(), 'pending');
    assert.match(await page.locator('.rule').nth(1).innerText(), /回踩后重新站稳/);
    for (const width of [390, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.locator('[data-node="1"]').click();
      assert.ok(await page.locator('#detailBody').isVisible());
      if (width < 1180) {
        await page.locator('.node-editor summary').click();
        await page.locator('#nodeTitle').fill('选好股 / 找龙头');
        await page.locator('#saveNodeDefinition').click();
        assert.ok(await page.evaluate(() => document.querySelector('.detail').contains(document.activeElement)), 'saving retains focus inside editor');
        await page.keyboard.press('Escape');
        assert.equal(await page.locator('#detailBackdrop').isVisible(), false);
        await page.locator('#zoomFit').click();
        assert.ok(await page.locator('#sequenceDiagram svg').evaluate(el => el.getBoundingClientRect().width <= document.querySelector('.sequence-viewport').clientWidth));
      }
      assert.ok(await page.evaluate(() => document.body.scrollWidth <= innerWidth), `page fits ${width}`);
    }
    await page.locator('#sequenceDiagram [data-sequence-node="1"]').focus();
    await page.keyboard.press('Enter');
    assert.match(await page.locator('#detailBody h3').innerText(), /龙头/);
    assert.deepEqual(errors, []);
    console.log('PASS sequence diagram / interactive leaves / editable definitions / persistence / keyboard / responsive');
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
