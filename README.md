# Luyao Niu · Academic Homepage

A bilingual academic website connecting learning, decision-making, and coordination in intelligent systems, with a growing focus on multi-agent and autonomous systems. Built with Jekyll 3.10, semantic HTML, locally hosted fonts, CSS, and a small vanilla JavaScript enhancement. No frontend framework or JavaScript build is required to publish the site.

## Quick preview on this Mac

在 Finder 中双击根目录的 `预览网站.command`，即可打开已构建的网站预览。它会复用现有预览服务器，或使用 Python 标准库启动本机服务；无需安装其他 Python 包。保留 `_site/` 目录，关闭终端会停止由它启动的服务。这个快捷方式预览现有构建；编辑源码后，请按下面的方式重新构建。

## Local preview

Use Ruby 3.1–3.3 with Bundler (macOS's preinstalled Ruby 2.6 is not recommended):

```sh
bundle install
./run_server.sh
```

Open **http://127.0.0.1:4000/LuyaoNiu.github.io/**.

```sh
bundle exec jekyll build --strict_front_matter
```

The production output is `_site/`. Do not edit generated files there.

## Edit content

| File | Purpose |
| --- | --- |
| `_data/current_research.yml` | One current USC topic, bilingual summary and methodology |
| `_data/profile.yml` | Bilingual role and bio, research interests, news, education |
| `_data/experience.yml` | Bilingual Xiaohongshu internship role and responsibilities |
| `_data/publications.yml` | Publications, authors, venues, status, links, citations, featured selection |
| `_data/navigation.yml` | Bilingual top navigation |
| `_config.yml` | Contact details, social profiles, metadata, URL/base path |
| `_pages/about.md` | Homepage layout and opening research statement |
| `_pages/projects.md` | Detailed bilingual project descriptions |
| `_pages/cv.md` | Bilingual education, experience, honors, skills |
| `files/CV.pdf` | Downloadable CV with confirmed education and submission updates |
| `assets/images/luyao-niu.webp` | Optimized personal photo |
| `assets/css/academic.css` | Design tokens, typography, layout, responsive rules, print styles |
| `assets/js/academic.js` | Language/theme, navigation, publication search/filter, citation copying |

The data files use JSON syntax, which is valid YAML. Both Jekyll and common editors can read them directly. Keep `id` values stable: homepage links and publication/project anchors use them.

Publication statuses: `published`, `review`, `submitted`, `preprint`, `preparation`, `manuscript`. Categories: `journal`, `conference`, `preprint` (the latter is labeled **Manuscripts** to include ongoing work). Only set `featured: true` when a real corresponding project and local illustration exist. `citation` is plain text, not fabricated BibTeX metadata.

New external links open in a separate tab with `noopener noreferrer`; local links stay in the same tab. PDF links open a separate tab. Use Jekyll's `relative_url` filter for local links so deployment under a subpath works.

## GitHub Pages

For the current repository, `LiviaNiu620/LuyaoNiu.github.io`, the default project-site settings are:

```yaml
url: "https://livianiu620.github.io"
baseurl: "/LuyaoNiu.github.io"
```

Production uses **Settings → Pages → Deploy from a branch → `urbanai` → `/ (root)`**. GitHub Pages builds Jekyll automatically when changes are pushed to `urbanai`. The public site is https://livianiu620.github.io/LuyaoNiu.github.io/. The `main` branch remains separate; merging into it is not required to publish this version.

If the repository is renamed to `LiviaNiu620.github.io`, set `baseurl: ""`. For a custom domain, set `url` to that domain and `baseurl` to the appropriate path. Do not change it merely to make local preview links shorter; use `bundle exec jekyll serve --baseurl ''` for a root-path preview.

The old Scholar crawler workflow is retained. The redesigned site links directly to Google Scholar and does not depend on the crawler, its secrets, or a citation-count API.

## Browser verification

Optional testing tools only; not required to build or publish the website:

```sh
npm ci
npx playwright install chromium
# With the Jekyll server running in another terminal:
npm test
```

For an installed Chrome browser:

```sh
CHROME_PATH="/Applications/Google Chrome.app/Contents/MacOS/Google Chrome" npm test
```

`BASE_URL` overrides the preview address; `OUTPUT_DIR` overrides `test-results/`.

The checks cover 320 / 390 / 768 / 1440 px layouts, both languages, local links and anchors, images, search/filtering, empty results, clipboard contents, deep links, preference persistence, mobile navigation, reduced motion, and JavaScript-disabled navigation. Screenshots and a JSON report are generated locally. See `docs/REDESIGN.md` for the design and content audit.

## Attribution

The original repository is based on [AcadHomepage by Yi Ren](https://github.com/RayeRen/acad-homepage.github.io). Its MIT license is retained in `LICENSE`. DM Sans is distributed under the SIL Open Font License, included at `assets/fonts/DM-Sans-LICENSE.txt`. The three SVG research thumbnails are original conceptual illustrations, not paper figures or experimental results. The photograph and CV were already present in the supplied repository.
