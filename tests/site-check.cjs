/* Run a built site first: bundle exec jekyll serve --port 4000
 * BASE_URL=http://127.0.0.1:4000/LuyaoNiu.github.io/ npm test
 * Optional: CHROME_PATH=/path/to/chrome; OUTPUT_DIR=/path/to/screenshots
 */
const { chromium } = require("playwright");
const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const base = (
  process.env.BASE_URL || "http://127.0.0.1:4000/LuyaoNiu.github.io/"
).replace(/\/?$/, "/");
const output = process.env.OUTPUT_DIR || "test-results";
fs.mkdirSync(output, { recursive: true });
(async () => {
  const browser = await chromium.launch({
    headless: true,
    ...(process.env.CHROME_PATH
      ? { executablePath: process.env.CHROME_PATH }
      : {}),
  });
  const context = await browser.newContext({
    viewport: { width: 1440, height: 1000 },
    colorScheme: "light",
  });
  const page = await context.newPage();
  const errors = [],
    networkErrors = [],
    report = [];
  page.on("pageerror", (error) => errors.push(error.message));
  page.on("response", (response) => {
    if (response.status() >= 400 && response.url().startsWith(base))
      networkErrors.push(`${response.status()}: ${response.url()}`);
  });
  const routes = [
    "",
    "publications/",
    "projects/",
    "talks/",
    "cv/",
    "404.html",
  ];
  const destinations = new Set();
  for (const route of routes) {
    for (const width of [1440, 768, 390, 320]) {
      await page.setViewportSize({ width, height: 1000 });
      await page.goto(base + route);
      await page.evaluate(() => document.fonts.ready);
      await page.evaluate(async () => {
        await Promise.all(
          [...document.images].map((img) => {
            img.loading = "eager";
            return img.decode().catch(() => {});
          }),
        );
      });
      for (const lang of ["en", "zh"]) {
        if ((await page.getAttribute("html", "data-lang")) !== lang)
          await page.locator("#lang-toggle").click();
        const state = await page.evaluate(() => {
          const ids = [...document.querySelectorAll("[id]")].map((el) => el.id);
          return {
            overflow: document.documentElement.scrollWidth > innerWidth + 1,
            duplicateIds: ids.filter((id, i) => ids.indexOf(id) !== i),
            brokenImages: [...document.images]
              .filter((img) => !img.complete || img.naturalWidth === 0)
              .map((img) => img.src),
            emptyLinks: [...document.querySelectorAll("a")].filter(
              (a) => !a.getAttribute("href") || a.getAttribute("href") === "#",
            ).length,
            htmlLang: document.documentElement.lang,
            font: getComputedStyle(document.body).fontFamily,
          };
        });
        assert.equal(
          state.overflow,
          false,
          `${route} ${width} ${lang}: horizontal overflow`,
        );
        assert.deepEqual(state.duplicateIds, [], `${route}: duplicate IDs`);
        // Load all lazy images before checking for missing assets.
        await page.evaluate(async () => {
          await Promise.all(
            [...document.images].map((img) => {
              img.loading = "eager";
              return img.decode().catch(() => {});
            }),
          );
        });
        assert.equal(
          await page
            .locator("img")
            .evaluateAll(
              (imgs) => imgs.filter((img) => img.naturalWidth === 0).length,
            ),
          0,
          `${route}: broken image`,
        );
        assert.equal(state.emptyLinks, 0, `${route}: empty link`);
        assert.equal(state.htmlLang, lang === "zh" ? "zh-CN" : "en");
        report.push({ route, width, lang, ...state });
      }
      if (width === 1440 || width === 390) {
        await page.locator("#lang-toggle").click(); // back to English
        await page.screenshot({
          path: path.join(
            output,
            `${route.replaceAll("/", "") || "home"}-${width}.png`,
          ),
          fullPage: true,
        });
        if (route === "" && width === 1440)
          await page.screenshot({
            path: path.join(output, "home-preview.png"),
          });
      }
    }
    (
      await page
        .locator("a[href]")
        .evaluateAll((links) => links.map((a) => a.href))
    )
      .filter((url) => url.startsWith(base))
      .forEach((url) => destinations.add(url));
  }
  // Validate every internal page, resource and cross-page anchor (including project-site base paths).
  for (const destination of destinations) {
    const url = new URL(destination),
      hash = decodeURIComponent(url.hash.slice(1));
    url.hash = "";
    const response = await context.request.get(url.href);
    assert(
      response.ok(),
      `Broken internal destination: ${destination} (${response.status()})`,
    );
    if (hash && response.headers()["content-type"]?.includes("text/html")) {
      const html = await response.text();
      assert(html.includes(`id="${hash}"`), `Missing anchor: ${destination}`);
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base + "publications/");
  if ((await page.getAttribute("html", "data-lang")) !== "en")
    await page.locator("#lang-toggle").click();
  assert.equal(
    await page.locator(".publication-list .paper:visible").count(),
    14,
  );
  const publicationYears = await page
    .locator(".publication-list .paper .paper-meta > span:first-child")
    .allTextContents();
  assert.deepEqual(
    publicationYears.map(Number),
    [...publicationYears].map(Number).sort((a, b) => b - a),
  );
  await page.locator('[data-filter="journal"]').click();
  assert.equal(
    await page.locator(".publication-list .paper:visible").count(),
    3,
  );
  await page.locator('[data-filter="conference"]').click();
  assert.equal(
    await page.locator(".publication-list .paper:visible").count(),
    6,
  );
  await page.locator('[data-filter="preprint"]').click();
  assert.equal(
    await page.locator(".publication-list .paper:visible").count(),
    5,
  );
  await page.locator('[data-filter="all"]').click();
  await page.locator("#publication-search").fill("AskNearby");
  assert.equal(
    await page.locator(".publication-list .paper:visible").count(),
    1,
  );
  await page.locator("#publication-search").fill("MF-AttnBiLSTM");
  assert.equal(
    await page.locator(".publication-list .paper:visible").count(),
    1,
  );
  assert((await page.locator("#mf-attnbilstm").innerText()).includes("2952–2957"));
  await page.locator("#publication-search").fill("no-such-publication");
  assert(await page.locator("#no-results").isVisible());
  await page.evaluate(() => {
    location.hash = "st-proc";
  });
  await page.waitForFunction(() => !document.getElementById("st-proc").hidden);
  assert.equal(
    await page.locator(".publication-list .paper:visible").count(),
    14,
  );
  // Clipboard behavior and its actual copied content.
  await context.grantPermissions(["clipboard-read", "clipboard-write"]);
  await page.locator("#st-proc .copy-citation").click();
  await page.waitForFunction(() =>
    document.getElementById("toast").classList.contains("visible"),
  );
  assert(
    (await page.evaluate(() => navigator.clipboard.readText())).includes(
      "ST-ProC",
    ),
  );
  await page.locator("#lang-toggle").click();
  await page.locator("#theme-toggle").click();
  await page.goto(base);
  assert.equal(await page.getAttribute("html", "data-lang"), "zh");
  assert.equal(await page.getAttribute("html", "data-theme"), "dark");
  await page.goto(base + "cv/");
  assert.equal(await page.locator(".cv-experience-entry").count(), 4);
  assert((await page.locator(".cv-service").innerText()).includes("WSDM"));
  assert.equal(await page.locator("#skills").count(), 0);
  await page.screenshot({
    path: path.join(output, "home-dark-zh.png"),
    fullPage: true,
  });
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({
    path: path.join(output, "home-mobile-dark-zh.png"),
    fullPage: true,
  });
  await page.locator("#menu-toggle").click();
  assert.equal(
    await page.getAttribute("#menu-toggle", "aria-expanded"),
    "true",
  );
  assert(await page.locator("#main-nav").isVisible());
  await page.keyboard.press("Escape");
  assert.equal(
    await page.getAttribute("#menu-toggle", "aria-expanded"),
    "false",
  );
  await page.locator("#menu-toggle").click();
  await page.locator('#main-nav a[href$="projects/"]').click();
  assert.equal(
    await page.getAttribute("#main-nav a[aria-current]", "href"),
    new URL(base).pathname + "projects/",
  );
  assert.equal(
    await page.getAttribute("#menu-toggle", "aria-expanded"),
    "false",
  );
  // Web links open safely, while mailto links remain native.
  assert.equal(
    await page.locator('a[href^="mailto:"]').first().getAttribute("target"),
    null,
  );
  assert.equal(
    await page.locator(".footer-socials a").first().getAttribute("rel"),
    "noopener noreferrer",
  );
  await page.emulateMedia({ reducedMotion: "reduce" });
  assert.equal(
    await page.evaluate(
      () => getComputedStyle(document.documentElement).scrollBehavior,
    ),
    "auto",
  );
  const noJs = await browser.newContext({
    javaScriptEnabled: false,
    viewport: { width: 390, height: 844 },
  });
  const staticPage = await noJs.newPage();
  await staticPage.goto(base + "publications/");
  assert(await staticPage.locator("#main-nav").isVisible());
  assert.equal(
    await staticPage.locator(".publication-list .paper:visible").count(),
    14,
  );
  assert.equal(
    await staticPage.locator(".publication-tools").isVisible(),
    false,
  );
  await noJs.close();
  assert.deepEqual(errors, [], "Browser JavaScript errors");
  assert.deepEqual(networkErrors, [], "Local asset HTTP errors");
  const result = {
    passed: true,
    layouts: report.length,
    internalDestinations: destinations.size,
    errors,
    networkErrors,
    checks: [
      "responsive layouts",
      "bilingual content",
      "images",
      "anchors and routes",
      "filters",
      "search",
      "empty state",
      "deep links",
      "clipboard",
      "persistent theme and language",
      "mobile menu and Escape",
      "navigation highlight",
      "safe external links",
      "reduced motion",
      "no-JavaScript fallback",
    ],
    report,
  };
  fs.writeFileSync(
    path.join(output, "report.json"),
    JSON.stringify(result, null, 2),
  );
  console.log(JSON.stringify({ ...result, report: undefined }, null, 2));
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exit(1);
});
