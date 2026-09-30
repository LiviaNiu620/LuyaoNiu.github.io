# Content and imagery guide

## Current research

The public overview presents three broad topics with one question and a few methods each. New ideas are not described through implementation steps, specific mechanisms, numerical results, future submission targets, or internal priorities. The general Learning / Decision-Making / Coordination positioning remains intact.

`_data/current_research.yml` controls the current overview. The Projects page provides concise context and links to existing public papers. Whose Normal? is excluded at the owner's request. Anonymous or incomplete-author drafts are held out until their author lists and intended public titles are confirmed.

## Manuscripts

New complete drafts with visible authors are labeled `Working manuscript`; intended venues are not treated as confirmed submissions. Their titles and authors come from the manuscript title pages. Draft PDFs and internal planning dashboards are not copied into the website.

## Experience and service

Experience follows the latest owner-provided roles, dates, locations and work arrangements. Roles without provided duties show only their confirmed metadata. Academic service has a dedicated page, a full-width homepage section, and a main CV section. No reviewer years or committee roles are inferred.

## Talks

`_data/talks.yml` holds the month and city of each oral presentation. These are presentation dates, separate from publication and preprint dates.

## Life

`_data/life.yml` contains the owner's motto and four stated interests. The rock, live-show and reading sections use the owner's supplied photos. The drums section retains its graphic cover at the owner's explicit request. Presentation.jpg is used on Talks, without inferring a specific conference from the photo.

## Image slots

`_data/paper_images.yml` maps approved paper image filenames to local website paths. Only files actually present are rendered; otherwise a text cover is shown. The old conceptual diagrams are no longer shown as paper previews.

Fifteen owner-selected figures from Picture/ are converted to WebP. The four remaining paper slots (Blind Spots, regional integration, traffic assignment, and spatial satisfaction) retain text covers until figures are supplied. No source figure PDF or unrelated file in Picture/ is published. Later images can be processed with scripts/import_picture_assets.py.

## Downloadable resume

The owner-supplied personal_resume (1).pdf is the authoritative download. It is copied verbatim to files/CV.pdf. The optional data-based builder now writes only to the excluded tmp/cv-generated directory, preventing accidental replacement of the supplied resume.

## Reference observations

- https://zewei-zhou.github.io/: introductory affiliation/adviser links, dated news, illustrated selected publications and resources, education, honors, a substantive Academic Services section split by reviewing type, and a personal Miscellaneous section (guitar, sports, design).
- https://handsomeyun.github.io/: introduction and research interests, news, selected publications with abstracts, CV/publication navigation, an email invitation, and a separate cookings page organized into Chinese, Western, fusion and dessert categories.

Useful additions for this site are confirmed lab/adviser links, approved paper figures, presentation slides, a small personal photo selection, favorite music, and a short reading list. Neither reference's research claims, credentials, images nor code are reused.

## Local validation

The 2026-09-30 local preview passed strict Jekyll safe-mode compilation, 64 page/viewport/language cases, and 36 internal destinations. Seven main pages in both themes produced no detected axe violations. All four PDF pages and the new desktop/mobile layouts were rendered and inspected. The build excludes raw manuscript PDFs, the internal dashboard, `.local-review/`, and `incoming-assets/`. Whose Normal? and the erroneous WSDM reviewer label are absent from generated content.
