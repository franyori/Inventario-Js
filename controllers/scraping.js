const puppeteer = require("puppeteer")
async function navigateWebPage() {
    const browser = await puppeteer.launch({
      slowMo: 200,
      headless: false,
    });
    const page = await browser.newPage();
    await page.goto("https://quotes.toscrape.com");
    await page.click('a[href="/login"]');
    await new Promise((resolve) => setTimeout(resolve, 3000));
    await browser.close();
  }
  
  navigateWebPage();