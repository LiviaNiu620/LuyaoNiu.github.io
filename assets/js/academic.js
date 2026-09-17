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
  const languageButton = $("#lang-toggle");
  const themeButton = $("#theme-toggle");
  const menuButton = $("#menu-toggle");
  const nav = $("#main-nav");
  const isChinese = () => root.dataset.lang === "zh";
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
    languageButton.textContent = zh ? "EN" : "中文";
    languageButton.setAttribute(
      "aria-label",
      zh ? "Switch to English" : "切换至中文",
    );
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
    $('meta[name="theme-color"]').content = dark ? "#1c201e" : "#f8f7f4";
    const search = $("#publication-search");
    if (search)
      search.placeholder = zh
        ? "搜索标题、作者、会议…"
        : "Search title, author, venue…";
  }
  languageButton.addEventListener("click", () => {
    root.dataset.lang = isChinese() ? "en" : "zh";
    save("lang", root.dataset.lang);
    syncControls();
    filterPapers();
  });
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
  matchMedia("(min-width: 641px)").addEventListener("change", () =>
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
  syncControls();
})();
