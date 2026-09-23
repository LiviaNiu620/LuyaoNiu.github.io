# Redesign notes and content audit

## Design

An editorial academic identity: warm paper background, ink typography, burgundy links, Georgia display headings, and locally hosted DM Sans body text. The actual personal photo is preserved and presented as a small editorial portrait. Original schematic SVGs distinguish three selected research projects without presenting invented results.

Navigation: About → Publications → Projects → Talks → CV. The homepage brings together the introduction, three linked research themes, three selected works, recent news, education, and contact. Inner pages share the same header, footer, language preference, theme, and visual hierarchy.

Motion is limited to subtle link/arrow/button feedback and native smooth anchor scrolling. Reduced-motion preferences disable transitions and smooth scrolling. No scroll hijacking, 3D renderer, tracking integration, external font requests, or framework runtime is introduced.

## Owner-confirmed content corrections

- USC: PhD student, enrolled in August 2026. The homepage, education record, bilingual CV, site metadata, and PDF now use this status; the unconfirmed expected graduation date was removed.
- Event-CausNet: submitted to KDD 2027. The publication record, featured status, citation text, project page, research experience, and PDF use this destination. Earlier conflicting submission descriptions are superseded. No numerical performance improvement is asserted in the updated Event-CausNet summary or PDF.
- ST-ProC: the prior submission destination was removed; the work remains listed as a preprint with its existing arXiv link.
- EV-adoption study: the prior journal-review claim was removed; the research remains listed as a manuscript without a named venue or review status.
- The downloadable PDF was updated to carry the same corrections. Other original PDF research, experience, and publication entries are preserved.

Other role end dates, the master's thesis ongoing label, and the Transactions in GIS review status were not changed by this correction. Their existing wording remains until the owner provides a further update. The old `2025.xx` placeholder was removed during the redesign.

## Requirements and acceptance evidence

| Requirement | Implementation | Check |
| --- | --- | --- |
| Clear, memorable academic homepage | Editorial hero, actual photo, research themes, selected works | Desktop + mobile screenshots |
| Attractive, usable links | Underlined prose links, resource buttons, arrow affordances, focus states | Browser interaction checks |
| Intuitive navigation | Active-page state, responsive menu, native anchors | Mobile menu, Escape, deep links |
| Academic content clarity | Explicit manuscript status, bold author name, shared publication records | Source audit + rendered publication list |
| Bilingual experience | English/Chinese controls, persistent preference, correct root language | Both languages at four widths |
| Dark/light appearance | Shared tokens, persistent switch | Light desktop/mobile and dark Chinese screenshots |
| GitHub Pages compatibility | Jekyll 3.10, `relative_url` for assets and internal URLs | Build + subpath route/anchor crawler |
| Performance | 75 KB WebP portrait (original 577 KB), local fonts, SVG illustrations | Local asset loading checks |
| Accessibility | Skip link, visible focus, semantic controls, reduced motion, no-JS fallback | Keyboard/menu/reduced-motion/no-JS checks |

## Implementation boundaries

This is a Jekyll site with reusable templates and data files, not a standalone self-editing HTML artifact. Content is edited in the repository. Original unused template files remain for reference but are not loaded by the new default layout. Build dependencies were simplified to Jekyll and the plugins already used by this site.

The owner requested publication of the latest `urbanai` version on 2026-09-17. GitHub Pages publishes from the root of `urbanai`; future pushes to that branch trigger deployment. The `main` branch remains separate.

## Verification results (2026-09-16)

- `bundle exec jekyll build --strict_front_matter --safe`: passed with Jekyll 3.10 and Ruby 3.3.6. The macOS system Ruby 2.6 could not compile its old native dependencies, so verification used an isolated temporary Ruby runtime; no system Ruby installation was modified.
- `npm ci`: passed; the locked test dependencies reported no known npm audit vulnerabilities at install time.
- Browser checks: **48 layouts passed**, across 6 pages, 4 widths, and 2 languages; **30 internal destinations passed** including PDF and section anchors. No page JavaScript errors or local HTTP asset failures were detected.
- All interaction checks passed: filters, search, empty states, deep-link visibility, actual clipboard content, language/theme persistence, mobile menu/Escape, active navigation, external-link attributes, reduced motion, and no-JavaScript navigation.
- axe-core: **0 detected violations** across the five main pages in both light and dark themes, using WCAG 2 A/AA, WCAG 2.1 AA and best-practice rules. This is an automated check, not a claim of comprehensive accessibility certification.
- All 11 unique external HTTP(S) destinations returned HTTP 200, including arXiv, the DOI, Google Scholar, ORCID, GitHub, and university links. Evidence: `test-results/external-links.json`. This verifies reachability, not the factual contents of those pages.
- Desktop/mobile screenshots and the Chinese dark theme were visually reviewed. A duplicate project anchor, skipped heading level, and low-contrast metadata were corrected during verification.
- Evidence: `test-results/report.json`, `test-results/accessibility.json`, and screenshots in `test-results/` (local artifacts, intentionally excluded from source control and the published website).

Design review: **PASS**. Strongest part: cohesive academic information hierarchy and consistent, recognizable link treatments. Owner-confirmed status and submission corrections have been applied to the site and downloadable PDF. Other historical claims remain sourced to the supplied repository.

## Verification of owner corrections

The rebuilt pages contain the August 2026 USC start date and the confirmed KDD 2027 submission. Superseded venue/status strings are absent from generated HTML and the PDF. The updated PDF is three pages, with every page rendered and visually checked. The downloadable build copy matches the source PDF. A Finder-launchable `预览网站.command` shortcut opens the existing preview or starts a local static preview.

## Contact and Xiaohongshu internship update

The owner requested removal of the Chinese name from the homepage, a new contact address (`luyaoniu@usc.edu`), and a May-August 2026 AI Agent Engineering internship in Xiaohongshu's Data Analytics department. The bilingual CV now covers the knowledge base, agent architecture/development, end-to-end validation, and domain Skill design, evaluation, monitoring, and operations. No new performance metrics or business results are claimed. The May 2026 news entry links to `/cv/#xiaohongshu`. The PDF includes the same English experience and new email, with four reviewed pages after adding the internship. Browser verification passed 48 layouts and 31 internal destinations; PDF text, mail action, and the served download were also checked.


## Research positioning (2026-09-17)

The owner approved a long-term research narrative around learning, decision-making, and coordination in intelligent systems, with a growing focus on multi-agent and autonomous systems. Transportation and mobility provide a central setting. The three interest labels are **Learning & Reasoning**, **Multi-Agent Decision-Making**, and **Coordination & Collective Intelligence**. Earlier work in spatio-temporal modeling, behavioral understanding, causal analysis, and AI agents is described as a foundation; emerging interests in reinforcement learning, communication, and collective intelligence are not presented as completed contributions.

The homepage cards link to three matching research threads on the Projects page. Each thread explains the connection between earlier work and prospective questions, with working links to relevant projects. Coalition coordination in mixed-autonomy traffic remains one current USC topic, not the definition of the owner's entire research agenda. Its summary retains the distinction between comparing specified coordination arrangements and endogenous coalition formation. No draft benchmark results, formal paper title, submission status, or author list were invented.

General positioning is centralized in `_data/profile.yml`; the specific current topic lives in `_data/current_research.yml`. The homepage, project overview, CV research interests, downloadable PDF, metadata, and README use this separation.

Validation of the approved positioning: strict safe-mode Jekyll build passed; 48 responsive/language cases and 33 internal destinations passed browser checks. Five main pages in both themes had zero detected axe violations. Desktop, mobile, Chinese dark-theme, and PDF renders were inspected. The PDF retains four pages and the latest user-confirmed contact, internship, and submission details.

## CV and Publication Update (2026-09-23)

The CV now renders professional experience from one shared bilingual data structure, so Xiaohongshu, Qianmo Zhilian, Duke Kunshan University, and the China Academy of Land Surveying and Planning use the same role, organization, date, and responsibility pattern. The generic skills section was removed. Awards are retained and academic service now records peer review for WSDM, IEEE GLOBECOM, and TRB.

Publication records were updated from owner-provided information: the EV quasi-experiment is under review at *Applied Geography* with the revised title and author list; the cross-border spatial-identity manuscript has its revised title; and *GeoSplit* plus *Whose Normal?* are submitted to ICASSP 2027. The asterisk on *GeoSplit* is displayed with the supplied equal-contribution note. The site and PDF use these same data sources; no URLs, identifiers, results, or additional status claims were inferred.

The owner subsequently added the published *Systems* article, “Gender and Age Disparities in Public Health Crisis Disruptions to Cross-Border Mobility,” with the supplied author list, volume, issue, article number, MDPI link, and DOI. It is rendered as a published journal article and is included in the downloadable CV.
