/* Run with Node and Playwright/Chromium. All network traffic is intercepted. */
const { chromium } = require('playwright');
const fs = require('node:fs');
const path = require('node:path');
const assert = require('node:assert/strict');
const root = path.resolve(__dirname, '../..');
const origin = 'https://agilehealthinformatics.com';
const key = 'ahi-analytics-consent';
const ID = 'G-EF8ZF37K5H';
const screenshots = process.env.AHI_SCREENSHOT_DIR;
let count = 0;
const pass = label => { count++; console.log('PASS ' + label); };
(async () => {
  const browser = await chromium.launch({ headless: true, ...(process.env.AHI_CHROMIUM_PATH ? { executablePath: process.env.AHI_CHROMIUM_PATH, args: ["--no-sandbox", "--disable-dev-shm-usage"] } : {}) });
  try {
    async function setup(options = {}) {
      const context = await browser.newContext(options);
      const google = [];
      await context.route('**/*', async route => {
        const url = new URL(route.request().url());
        if (url.hostname === 'www.googletagmanager.com' || url.hostname.endsWith('google-analytics.com')) {
          google.push(url.href);
          return route.fulfill({ contentType: 'text/javascript', body: '// Google mocked: never transmitted.' });
        }
        if (['agilehealthinformatics.com', 'www.agilehealthinformatics.com', 'localhost'].includes(url.hostname)) {
          let pathname = decodeURIComponent(url.pathname);
          if (pathname.endsWith('/')) pathname += 'index.html';
          const filename = path.join(root, pathname);
          if (fs.existsSync(filename) && fs.statSync(filename).isFile()) {
            const type = filename.endsWith('.js') ? 'text/javascript' : filename.endsWith('.css') ? 'text/css' : 'text/html';
            return route.fulfill({ contentType: type, body: fs.readFileSync(filename) });
          }
          return route.fulfill({ status: 404, body: 'Not found' });
        }
        return route.abort();
      });
      return { context, page: await context.newPage(), google };
    }
    const t = await setup();
    const errors = [];
    t.page.on('pageerror', e => errors.push(e.message));
    await t.page.goto(origin);
    assert.equal(t.google.length, 0);
    assert.equal(await t.page.locator('#ahi-analytics-consent').isVisible(), true);
    assert.equal((await t.context.cookies()).filter(c => c.name.startsWith('_ga')).length, 0);
    pass('new visitor: no Google requests or analytics cookies');
    await t.page.getByRole('button', { name: 'Reject analytics', exact: true }).click();
    await t.page.goto(origin + '/resources/explainers/empi-national-ehr/');
    assert.equal(t.google.length, 0);
    assert.equal(await t.page.locator('#ahi-analytics-consent').isVisible(), false);
    pass('rejection persists across nested pages');
    await t.page.locator('.ahi-privacy-links [data-ahi-privacy-settings]').click();
    assert.equal(await t.page.locator('#ahi-consent-title').evaluate(e => e === document.activeElement), true);
    await t.page.getByRole('button', { name: 'Accept analytics', exact: true }).click();
    await t.page.waitForFunction(() => window.dataLayer?.length === 4);
    await t.page.waitForTimeout(50);
    assert.equal(t.google.length, 1);
    const commands = await t.page.evaluate(() => window.dataLayer.map(x => Array.from(x)));
    assert.equal(commands[0][2].analytics_storage, 'denied');
    assert.equal(commands[0][2].ad_storage, 'denied');
    assert.equal(commands[1][2].analytics_storage, 'granted');
    assert.equal(commands[3][1], ID);
    assert.equal(commands[3][2].allow_google_signals, false);
    assert.equal(commands[3][2].content_group, 'explainers');
    pass('acceptance loads tag once, with consent before configuration and ads disabled');
    await t.page.locator('.ahi-privacy-links [data-ahi-privacy-settings]').click();
    await t.page.getByRole('button', { name: 'Accept analytics', exact: true }).click();
    assert.equal(t.google.length, 1);
    pass('repeated acceptance does not double-load tag');
    const second = await t.context.newPage();
    await second.goto(origin + '/resources.html');
    await t.context.addCookies([
      { name: '_ga', value: 'test', domain: '.agilehealthinformatics.com', path: '/' },
      { name: '_ga_EF8ZF37K5H', value: 'test', domain: 'agilehealthinformatics.com', path: '/' }
    ]);
    const before = t.google.length;
    await t.page.locator('.ahi-privacy-links [data-ahi-privacy-settings]').click();
    await t.page.getByRole('button', { name: 'Reject analytics', exact: true }).click();
    await t.page.waitForLoadState('load');
    await second.waitForFunction(() => window['ga-disable-G-EF8ZF37K5H'] === true);
    await t.page.waitForTimeout(100);
    assert.equal(t.google.length, before);
    assert.equal((await t.context.cookies()).filter(c => c.name.startsWith('_ga')).length, 0);
    assert.equal(await t.page.evaluate(() => window['ga-disable-G-EF8ZF37K5H']), true);
    pass('withdrawal removes cookies, reloads safely and propagates to other tabs');
    assert.deepEqual(errors, []);
    pass('homepage and comparable resource: no JavaScript errors');
    await t.context.close();

    const local = await setup();
    await local.page.goto('http://localhost/');
    await local.page.getByRole('button', { name: 'Accept analytics', exact: true }).click();
    assert.equal(local.google.length, 0);
    pass('local preview never loads Google even after acceptance');
    await local.context.close();

    const expired = await setup();
    await expired.context.addInitScript(({ key }) => localStorage.setItem(key, JSON.stringify({ version: 1, value: 'accepted', expires: Date.now() - 1 })), { key });
    await expired.page.goto(origin);
    assert.equal(expired.google.length, 0);
    assert.equal(await expired.page.locator('#ahi-analytics-consent').isVisible(), true);
    pass('expired acceptance fails closed');
    await expired.context.close();

    const unavailable = await setup();
    await unavailable.context.addInitScript(() => {
      Storage.prototype.getItem = function () { throw new Error('Storage blocked'); };
      Storage.prototype.setItem = function () { throw new Error('Storage blocked'); };
    });
    await unavailable.page.goto(origin);
    assert.equal(unavailable.google.length, 0);
    await unavailable.page.getByRole('button', { name: 'Reject analytics', exact: true }).click();
    assert.equal(await unavailable.page.locator('#ahi-analytics-consent').isVisible(), false);
    pass('unavailable storage keeps consent controls usable and analytics off');
    await unavailable.context.close();

    const ui = await setup();
    for (const viewport of [{ width: 1280, height: 900 }, { width: 390, height: 844 }]) {
      await ui.page.setViewportSize(viewport);
      await ui.page.goto(origin + '/privacy.html');
      for (const theme of ['light', 'dark']) {
        await ui.page.evaluate(theme => document.documentElement.dataset.theme = theme, theme);
        const box = await ui.page.locator('#ahi-analytics-consent').boundingBox();
        assert.ok(box.x >= 0 && box.y >= 0 && box.x + box.width <= viewport.width);
        assert.ok(box.y + box.height <= viewport.height + 1);
        assert.equal(await ui.page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), true);
        if (screenshots) { fs.mkdirSync(screenshots, { recursive: true }); await ui.page.screenshot({ path: path.join(screenshots, `privacy-${viewport.width}-${theme}.png`) }); }
      }
    }
    await ui.page.locator('[data-ahi-choice="rejected"]').focus();
    await ui.page.keyboard.press('Enter');
    await ui.page.locator('.ahi-privacy-links [data-ahi-privacy-settings]').focus();
    await ui.page.keyboard.press('Enter');
    await ui.page.keyboard.press('Escape');
    assert.equal(await ui.page.locator('.ahi-privacy-links [data-ahi-privacy-settings]').evaluate(e => e === document.activeElement), true);
    await ui.page.emulateMedia({ media: 'print' });
    assert.equal(await ui.page.locator('#ahi-analytics-consent').isVisible(), false);
    pass('desktop/mobile, dark/light, keyboard settings and print');
    await ui.context.close();
    const noJS = await setup({ javaScriptEnabled: false });
    await noJS.page.goto(origin + '/privacy.html');
    assert.equal(await noJS.page.locator('h1').textContent(), 'Privacy and website analytics');
    assert.equal(noJS.google.length, 0);
    pass('privacy content remains available without JavaScript');
    await noJS.context.close();
    console.log(`${count} checks passed. No requests reached Google.`);
  } finally { await browser.close(); }
})().catch(error => { console.error(error); process.exitCode = 1; });
