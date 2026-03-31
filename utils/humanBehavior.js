async function typeLikeHuman(page, text) {
  for (let char of text) {
    await page.keyboard.type(char);
    await page.waitForTimeout(Math.random() * 100);
  }
}

async function randomScroll(page) {
  for (let i = 0; i < 8; i++) {
    await page.mouse.wheel(0, Math.random() * 600);
    await page.waitForTimeout(500 + Math.random() * 1000);
  }
}

module.exports = { typeLikeHuman, randomScroll };