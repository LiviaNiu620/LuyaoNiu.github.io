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

`_data/life.yml` contains the owner's motto and four stated interests. Photos, books, bands and playlists can be added when supplied. The decorative typographic panels are artwork, not substitute photographs.

## Image slots

`_data/paper_images.yml` maps approved paper image filenames to local website paths. Only files actually present are rendered; otherwise a text cover is shown. The old conceptual diagrams are no longer shown as paper previews.

For the first batch, provide AskNearby Figure 1, the public Event-CausNet overview, and the public ST-ProC overview. MF-AttnBiLSTM Figure 1 is a good next addition. Use only an approved public version of under-review work. The local `incoming-assets/` folder includes Chinese checklists and is excluded from Git and Jekyll output.

## Reference observations

- https://zewei-zhou.github.io/: introductory affiliation/adviser links, dated news, illustrated selected publications and resources, education, honors, a substantive Academic Services section split by reviewing type, and a personal Miscellaneous section (guitar, sports, design).
- https://handsomeyun.github.io/: introduction and research interests, news, selected publications with abstracts, CV/publication navigation, an email invitation, and a separate cookings page organized into Chinese, Western, fusion and dessert categories.

Useful additions for this site are confirmed lab/adviser links, approved paper figures, presentation slides, a small personal photo selection, favorite music, and a short reading list. Neither reference's research claims, credentials, images nor code are reused.

## Local validation

The 2026-09-30 local preview passed strict Jekyll safe-mode compilation, 64 page/viewport/language cases, and 36 internal destinations. Seven main pages in both themes produced no detected axe violations. All four PDF pages and the new desktop/mobile layouts were rendered and inspected. The build excludes raw manuscript PDFs, the internal dashboard, `.local-review/`, and `incoming-assets/`. Whose Normal? and the erroneous WSDM reviewer label are absent from generated content.
