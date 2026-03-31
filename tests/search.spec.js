const { test } = require('@playwright/test');
const { GooglePage } = require('../pages/google.page');
const { randomScroll } = require('../utils/humanBehavior');
const config = require('../config/config');

test('Search and explore website like a human', async ({ page }) => {

  const google = new GooglePage(page);

  // Step 1: Navigate
  await google.navigate(config.baseURL);

  // Step 2: Search
  await google.search(config.searchQuery);

  await page.waitForTimeout(2000 + Math.random() * 2000);

  // Step 3: Click first result
  await google.clickFirstResult();

  // Step 4: Human-like scrolling
  await randomScroll(page);

});