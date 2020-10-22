const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch({
    headless: false
  });
  const context = await browser.newContext({
    videosPath: 'videos/'
  });

  // Open new page
  const page = await context.newPage();

  // Go to https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8
  await page.goto('https://ja.wikipedia.org/wiki/%E3%83%A1%E3%82%A4%E3%83%B3%E3%83%9A%E3%83%BC%E3%82%B8');

  // Click input[name="search"]
  await page.click('input[name="search"]');

  // Fill input[name="search"]
  await page.fill('input[name="search"]', 'ユニットテスト');

  // Go to https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%8B%E3%83%83%E3%83%88%E3%83%86%E3%82%B9%E3%83%88
  await page.goto('https://ja.wikipedia.org/wiki/%E3%83%A6%E3%83%8B%E3%83%83%E3%83%88%E3%83%86%E3%82%B9%E3%83%88');

  // Go to https://ja.wikipedia.org/wiki/%E5%8D%98%E4%BD%93%E3%83%86%E3%82%B9%E3%83%88
  await page.goto('https://ja.wikipedia.org/wiki/%E5%8D%98%E4%BD%93%E3%83%86%E3%82%B9%E3%83%88');

  // Click text="契約による設計"
  await page.click('text="契約による設計"');
  // assert.equal(page.url(), 'https://ja.wikipedia.org/wiki/%E5%A5%91%E7%B4%84%E3%83%97%E3%83%AD%E3%82%B0%E3%83%A9%E3%83%9F%E3%83%B3%E3%82%B0');

  // Click text="ソフトウェア開発工程"
  await Promise.all([
    page.waitForNavigation(/*{ url: 'https://ja.wikipedia.org/wiki/%E5%8D%98%E4%BD%93%E3%83%86%E3%82%B9%E3%83%88' }*/),
    page.click('text="ソフトウェア開発工程"')
  ]);

  // Close page
  await page.close();

  // ---------------------
  await context.close();
  await browser.close();
})();