(() => {
  "use strict";
  const root = document.documentElement;
  const $ = (selector) => document.querySelector(selector);
  const $$ = (selector) => [...document.querySelectorAll(selector)];
  root.classList.add("js-ready");
  const save = (key, value) => {
    try {
      localStorage.setItem(key, value);
    } catch (_) {
      /* Private browsing: preferences remain in this tab. */
    }
  };
  const themeButton = $("#theme-toggle");
  const menuButton = $("#menu-toggle");
  const nav = $("#main-nav");
  // The site is English-only; Chinese strings in the templates stay hidden.
  const isChinese = () => false;
  let toastTimer;
  function toast(message) {
    const el = $("#toast");
    el.textContent = message;
    el.classList.add("visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => el.classList.remove("visible"), 3000);
  }
  function syncControls() {
    const zh = isChinese(),
      dark = root.dataset.theme === "dark";
    root.lang = zh ? "zh-CN" : "en";
    themeButton.setAttribute(
      "aria-label",
      zh
        ? dark
          ? "切换浅色主题"
          : "切换深色主题"
        : dark
          ? "Switch to light theme"
          : "Switch to dark theme",
    );
    themeButton.setAttribute("aria-pressed", String(dark));
    menuButton.setAttribute(
      "aria-label",
      zh ? "切换导航菜单" : "Toggle navigation menu",
    );
    $('meta[name="theme-color"]').content = dark ? "#0f141b" : "#ffffff";
    const search = $("#publication-search");
    if (search)
      search.placeholder = zh
        ? "搜索标题、作者、会议…"
        : "Search title, author, venue…";
  }
  themeButton.addEventListener("click", () => {
    root.dataset.theme = root.dataset.theme === "dark" ? "light" : "dark";
    save("theme", root.dataset.theme);
    syncControls();
  });
  function closeMenu(returnFocus = false) {
    nav.classList.remove("is-open");
    menuButton.setAttribute("aria-expanded", "false");
    if (returnFocus) menuButton.focus();
  }
  menuButton.addEventListener("click", () => {
    const open = nav.classList.toggle("is-open");
    menuButton.setAttribute("aria-expanded", String(open));
  });
  nav.addEventListener("click", (event) => {
    if (event.target.closest("a")) closeMenu();
  });
  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && nav.classList.contains("is-open"))
      closeMenu(true);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest(".site-header")) closeMenu();
  });
  matchMedia("(min-width: 901px)").addEventListener("change", () =>
    closeMenu(),
  );
  // Only web destinations receive new-tab behavior; mail and local navigation remain native.
  $$("a[href]").forEach((a) => {
    const url = new URL(a.href, location.href);
    if (/^https?:$/.test(url.protocol) && url.origin !== location.origin) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
    if (/\.pdf(?:$|[?#])/i.test(a.href)) {
      a.target = "_blank";
      a.rel = "noopener noreferrer";
    }
  });
  const papers = $$(".publication-list .paper");
  let activeFilter = "all";
  function filterPapers() {
    if (!papers.length) return;
    const query = ($("#publication-search")?.value || "")
      .trim()
      .toLocaleLowerCase();
    let count = 0;
    papers.forEach((paper) => {
      paper.hidden = !(
        (activeFilter === "all" || paper.dataset.kind === activeFilter) &&
        paper.dataset.search.includes(query)
      );
      if (!paper.hidden) count++;
    });
    $("#no-results").hidden = count !== 0;
    $("#results-count").textContent = isChinese()
      ? `显示 ${count} / ${papers.length} 项研究`
      : `${count} of ${papers.length} works`;
  }
  if (papers.length) {
    $(".publication-tools").hidden = false;
    $$(".filter-group button").forEach((button) =>
      button.addEventListener("click", () => {
        activeFilter = button.dataset.filter;
        $$(".filter-group button").forEach((b) =>
          b.setAttribute("aria-pressed", String(b === button)),
        );
        filterPapers();
      }),
    );
    $("#publication-search").addEventListener("input", filterPapers);
    // A deep link always reveals the requested record, including after filtering.
    const revealHash = () => {
      let id;
      try {
        id = decodeURIComponent(location.hash.slice(1));
      } catch (_) {
        return;
      }
      const target = document.getElementById(id);
      if (target?.classList.contains("paper")) {
        activeFilter = "all";
        $("#publication-search").value = "";
        $$(".filter-group button").forEach((b) =>
          b.setAttribute("aria-pressed", String(b.dataset.filter === "all")),
        );
        filterPapers();
        target.scrollIntoView({ block: "start" });
      }
    };
    window.addEventListener("hashchange", revealHash);
    filterPapers();
    if (location.hash) requestAnimationFrame(revealHash);
  }
  async function copyText(value) {
    try {
      await navigator.clipboard.writeText(value);
      return true;
    } catch (_) {
      const area = document.createElement("textarea");
      area.value = value;
      area.style.cssText = "position:fixed;top:0;left:-9999px;";
      document.body.appendChild(area);
      area.select();
      let copied = false;
      try {
        copied = document.execCommand("copy");
      } catch (_) {
        /* Feedback below. */
      }
      area.remove();
      return copied;
    }
  }
  $$(".copy-citation").forEach((button) =>
    button.addEventListener("click", async () => {
      const result = await copyText(button.dataset.citation);
      toast(
        isChinese()
          ? result
            ? "引文已复制"
            : "复制失败，请手动选择论文信息。"
          : result
            ? "Citation copied to clipboard"
            : "Could not copy. Please select the publication text.",
      );
      button.focus({ preventScroll: true });
    }),
  );
  // Analytics: when Umami is loaded (see umami_website_id in _config.yml),
  // report CV downloads, email clicks, citation copies and outbound links.
  // Page views are counted by Umami itself.
  document.addEventListener("click", (event) => {
    const umami = window.umami;
    if (!umami || typeof umami.track !== "function") return;
    const target = event.target.closest("a[href], .copy-citation");
    if (!target) return;
    const page = location.pathname;
    try {
      if (target.classList.contains("copy-citation")) {
        const item = target.closest(".paper, .pub");
        const title = item && item.querySelector("h3");
        umami.track("cite", { page, paper: title ? title.textContent.trim().slice(0, 120) : "" });
        return;
      }
      const href = target.getAttribute("href") || "";
      if (/(^|\/)cv[^/]*\.pdf$/i.test(href)) {
        umami.track("cv-download", { page });
      } else if (href.startsWith("mailto:")) {
        umami.track("email", { page });
      } else if (target.hostname && target.hostname !== location.hostname) {
        umami.track("outbound", { page, url: target.href });
      }
    } catch (_) {
      /* Analytics must never break navigation. */
    }
  });
  // Comments (giscus): load lazily in the site's current theme.
  const giscusTheme = () => (root.dataset.theme === "dark" ? "dark" : "light");
  $$(".giscus-mount").forEach((mount) => {
    const script = document.createElement("script");
    script.src = "https://giscus.app/client.js";
    script.async = true;
    script.crossOrigin = "anonymous";
    const attrs = {
      repo: mount.dataset.repo,
      "repo-id": mount.dataset.repoId,
      category: mount.dataset.category,
      "category-id": mount.dataset.categoryId,
      mapping: mount.dataset.mapping,
      strict: "1",
      "reactions-enabled": "1",
      "emit-metadata": "0",
      "input-position": "top",
      theme: giscusTheme(),
      lang: "en",
      loading: "lazy",
    };
    if (mount.dataset.term) attrs.term = mount.dataset.term;
    Object.entries(attrs).forEach(([key, value]) => script.setAttribute("data-" + key, value));
    mount.appendChild(script);
  });
  themeButton.addEventListener("click", () => {
    $$("iframe.giscus-frame").forEach((frame) =>
      frame.contentWindow.postMessage({ giscus: { setConfig: { theme: giscusTheme() } } }, "https://giscus.app"),
    );
  });
  syncControls();
})();
