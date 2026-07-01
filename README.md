# Harry M. R. Davies

Personal site for [harrymrdavies.com](https://harrymrdavies.com) — an editorial, newspaper-style portfolio rendered with React, deployed via GitHub Pages.

> **Status: placeholder build.** Copy is Lorem Ipsum and the design/art are stand-ins. The *structure* and *SEO infrastructure* are production-shaped and ready to be restyled and rewritten. See **Placeholders to replace** below.

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
site-content.jsx            Runner, Hero, Ticker, About, Career, Projects, Services, Writing, Contact
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

- **Copy** — all body text is Lorem Ipsum across `index.html`, `site-content.jsx`, and `writing/`.
- **Identity** — social handles in `humans.txt`, `index.html` (Contact + JSON-LD), and `writing/` use placeholder URLs (`/in/harrymrdavies`, `@harrymrdavies`, `github.com/harrymrdavies`). Swap for real handles.
- **Art** — `favicons/favicon.svg` (H monogram), `assets/portrait-placeholder.*`, and `assets/og-image.svg` are stand-ins. Replace the SVGs and re-run `npm run build:favicons` / `npm run build:og`.
- **Dates / sitemap / feed** — `sitemap.xml` and `feed.xml` carry placeholder dates; update when real content lands.

## Deployment

Push to `main`. GitHub Pages serves `harrymrdavies.com` via the `CNAME` file. No CI required.
