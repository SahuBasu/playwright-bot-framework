class GooglePage {
  constructor(page) {
    this.page = page;
    this.searchBox = 'textarea[name="q"]';
    this.results = 'a h3';
  }

  async navigate(url) {
    await this.page.goto(url);
  }

  async search(text) {
  await this.page.waitForSelector(this.searchBox, { timeout: 15000 });

  await this.page.fill(this.searchBox, text);
  await this.page.keyboard.press('Enter');

  // wait for navigation properly
  await this.page.waitForLoadState('domcontentloaded');
}

  async clickFirstResult() {
  await this.page.waitForSelector(this.results, { timeout: 15000 });

  const firstResult = this.page.locator(this.results).first();
  await firstResult.click();
}
}

module.exports = { GooglePage };