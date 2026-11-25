# Writing a note

Notes are Jekyll posts. Add one Markdown file per note in `_posts/`, named
`YYYY-MM-DD-short-title.md`, for example `_posts/2026-12-01-reading-marl-survey.md`:

```markdown
---
title: "What I learned from a MARL survey"
description: "One sentence shown in the Notes list."
---

Your text in Markdown. Use ## for section headings.
```

The note appears at `/notes/short-title/`, is listed on the Notes page (newest first),
and gets its own comment thread once giscus is configured in `_config.yml`.
