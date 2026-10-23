# Quillote site

The public site for Quillote, served at https://quillote.com. Static HTML, one CSS file, one small JavaScript file, self-hosted fonts, no build step and no third-party requests.

Made by [Eulogik](https://eulogik.com).

## Preview locally

```sh
python3 -m http.server 8080 --directory site
```

Open http://localhost:8080. There is no watch step: edit the files and refresh.

## Deploy

The public repository is `eulogik/quillote-site`. A push to `main` runs `.github/workflows/pages.yml`, which uploads the repository root as a Pages artifact and deploys it.

To update the live site:

```sh
rsync -a --delete site/ /path/to/quillote-site/
cd /path/to/quillote-site
git add -A
git commit -m "site: update"
git push
```

The workflow needs Pages enabled with **Source: GitHub Actions** in the repository settings. The first run publishes `https://eulogik.github.io/quillote-site/`; the custom domain takes over once DNS is set.

## Custom domain

`quillote.com` is the canonical origin. The `CNAME` file is kept for reference, but a Pages site deployed with Actions ignores it; set the custom domain in **Settings, Pages** instead.

At the registrar:

- Apex `quillote.com`: `A` records to `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`.
- `www`: `CNAME` to `eulogik.github.io`.

Then add `quillote.com` in the Pages settings, wait for the DNS check, and enable **Enforce HTTPS**.

## What is in here

- `index.html`: the home page, the interactive Source / Live / Read demo, the FAQ and the JSON-LD.
- `support/`, `privacy/`, `changelog/`: the three supporting pages.
- `404.html`: GitHub Pages serves this for missing paths.
- `assets/css/site.css`: the whole visual system, no framework.
- `assets/js/site.js`: the mobile menu and the accessible demo tabs. About 2 KB.
- `assets/fonts/`: Instrument Serif and Inter, with their licenses. No external font requests.
- `assets/img/`: the mark, app screenshots, icons and the 1200 x 630 social card.
- `assets/downloads/`: the current macOS beta DMG. When the app changes, replace this file and update the SHA-256 in `index.html` (the `dmg-hash` element).
- `llms.txt` and `index.md`: the AI-readable summary and Markdown mirror.
- `robots.txt`, `sitemap.xml`, `site.webmanifest`, `.nojekyll`.

## Copy rules

The product is in private beta. Keep the copy honest:

- The macOS build is unsigned and Apple Silicon only. Say so.
- iPhone and Android are beta; do not offer a download that does not exist.
- Windows and Linux are build-from-source until installers ship.
- The size numbers are measured. Update them only from a real build, and keep the footnote about the category ranges.
- No em dashes. No growth-hack language. Short sentences, concrete claims.

## SEO and AI notes

- One `h1` per page. Canonical URLs point at `https://quillote.com`.
- Structured data: `WebSite`, `Organization`, `WebPage`, `SoftwareApplication` and `FAQPage` on the home; `WebPage` and `BreadcrumbList` on the subpages. The `SoftwareApplication` has no rating, because there are no reviews to cite.
- `robots.txt` allows search and AI crawlers and points at the sitemap.
- `llms.txt` follows the September 2024 proposal; `index.md` is the same content without markup.
- Images have width and height, the hero is preloaded, and all fonts are local. Keep it that way.
