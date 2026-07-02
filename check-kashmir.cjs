const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ args: ["--no-sandbox"] });
  const page = await browser.newPage({ viewport: { width: 1280, height: 900 } });
  const errors = [];
  page.on("console", (msg) => {
    if (msg.type() === "error") errors.push(msg.text());
  });
  page.on("pageerror", (err) => errors.push(String(err)));

  await page.goto("http://localhost:8081/chapters/kashmir", { waitUntil: "networkidle" });
  await page.waitForSelector("text=Founder: Arav Kaul", { timeout: 15000 });

  const section = page.locator("section").filter({ hasText: "Founder: Arav Kaul" }).first();
  await section.screenshot({ path: "kashmir-about-section.png" });
  await page.screenshot({ path: "kashmir-full-page.png", fullPage: true });

  console.log("ERRORS:", JSON.stringify(errors));
  await browser.close();
})();
