# Harry M. R. Davies

Personal site for [harrymrdavies.com](https://harrymrdavies.com) — an editorial, newspaper-style portfolio rendered with React, deployed via GitHub Pages.

> **Status: real homepage copy, placeholder art + links.** The homepage copy is Harry's; the portrait, favicons and OG image are stand-ins, and a couple of links are placeholders. See **Placeholders to replace** below. The `writing/` pages are still Lorem Ipsum scaffold.

## Stack

- **Static** — vanilla HTML/CSS/React, deployed via GitHub Pages, no SSR.
- **React 18** — pre-compiled JSX (no in-browser Babel). React/React-DOM self-hosted in `vendor/`.
- **Type** — Fraunces (display), Inter (body), JetBrains Mono (meta). Self-hosted Latin subsets in `assets/fonts/`.
- **Palette** — near-black ink `#1E1E1C` + forest-green accent `#3F6B4C` on warm cream `#F4EFE4`.

## Local dev

```bash
npm install
npm run build          # compile *.jsx → *.js, then bundle.js
npm run build:favicons # rasterize favicons/favicon.svg → PNG set
npm run build:og       # rasterize assets/og-image.svg → og-image.png
```

Serve locally with any static server, e.g. `python3 -m http.server 8000`.

## Layout

```
index.html                  Entry point + meta tags + JSON-LD + static SEO fallback
site.css                    All styles, including @font-face declarations
*.jsx / *.js                React components (source + compiled; only bundle.js ships)
portfolio-app.jsx           Top-level composition
site-content.jsx            Runner, Hero, About, Services, Projects, Career, Writing, Beyond, Contact
assets/
  fonts/                    Self-hosted woff2 fonts
  portrait-placeholder.*    Hero portrait stand-in (replace with a real photo)
  og-image.*                Open Graph cover image
favicons/                   Full favicon set (generated from favicon.svg)
vendor/                     Self-hosted React + React-DOM
tools/                      bundle.cjs, generate-favicons.cjs
writing/                    Writing hub + per-article pages (full per-article SEO)
404.html, robots.txt, sitemap.xml, feed.xml, humans.txt, sw.js, site.webmanifest
```

## Placeholders to replace

- **Links** — `BOOK_URL` (`https://cal.com/harrymrdavies`, currently 404s) and `SUBSCRIBE_URL` in `site-content.jsx` are placeholders; swap for Harry's real scheduling and newsletter links before sharing the site widely. (LinkedIn + YouTube are live.)
- **Art** — `favicons/favicon.svg` (H monogram) and `assets/og-image.svg` are stand-ins. The hero + OG image use Harry's real photo (`assets/portrait.png`). Replace the monogram SVG and re-run `npm run build:favicons` if desired.
- **Writing** — `writing/` (hub + 3 articles) is still Lorem Ipsum scaffold: `noindex`ed and excluded from `sitemap.xml`, so it won't be indexed. `feed.xml` still lists the placeholder entries. Populate or delete when ready.

## Deployment

Push to `main`. GitHub Pages serves `harrymrdavies.com` via the `CNAME` file. No CI required.
