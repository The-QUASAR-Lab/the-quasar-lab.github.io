# the-quasar-lab.github.io

Website of the Quantum Architecture, Systems, and Applications Research (QUASAR) Lab, Department of Computer Science, CU Boulder: https://quasar.colorado.edu

Built with [Jekyll](https://jekyllrb.com/) and the [al-folio](https://github.com/alshedivat/al-folio) template (v1). Page layouts come from the `al_folio_core` gem; this repo holds the site's config and content.

## Where to edit things

| What | File |
| --- | --- |
| Home page text | `_pages/about.md` |
| News items (one file per item, newest shown first) | `_news/YYYY-MM-DD-short-name.md` |
| Lab members | `_data/people.yml`, photos in `assets/img/people/` |
| Publications | `_bibliography/papers.bib` |
| Paper PDFs | `assets/pdf/firstauthor-shorttitle-venueYEAR.pdf`, linked with `pdf = {file.pdf}` in the BibTeX entry |
| Site title, navigation, settings | `_config.yml` |

### Adding a news item

Create `_news/2026-10-01-my-news.md`:

```markdown
---
layout: post
date: 2026-10-01
inline: true
related_posts: false
---

Our paper [Paper Title](https://arxiv.org/abs/xxxx.xxxxx) was accepted at VENUE! Congrats!
```

### Adding a publication

Paste the BibTeX entry into `_bibliography/papers.bib` and add any of these fields to get buttons: `html` (publisher page), `doi`, `arxiv` (ID only), `pdf` (file name in `assets/pdf/`), `code`, `slides`. `abbr` sets the venue badge.

## Preview locally

Optional. Install Ruby 3.x (for example `brew install ruby`), then:

```bash
bundle install
bundle exec jekyll serve
```

Then open http://localhost:4000. Without a local preview, just push to `main` and check the live site after the deploy finishes (about 2 minutes).

## Deployment

Pushing to `main` runs `.github/workflows/deploy.yml`, which builds the site and pushes it to the `gh-pages` branch. GitHub Pages serves `gh-pages` at quasar.colorado.edu (`CNAME`).
