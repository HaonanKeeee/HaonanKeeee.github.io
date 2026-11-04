# Haonan Ke Personal Site

Personal portfolio site for GitHub Pages. The page is intentionally kept as a static site with native HTML, CSS, and JavaScript modules, so it can be deployed without a build step.

## Structure

```text
.
├─ index.html
├─ pic/
│  └─ logos and image assets
└─ assets/
   ├─ css/
   │  ├─ base.css
   │  ├─ layout.css
   │  ├─ components.css
   │  ├─ responsive.css
   │  └─ main.css
   └─ js/
      ├─ data/
      │  └─ content.js
      ├─ i18n.js
      ├─ main.js
      ├─ navigation.js
      ├─ projectView.js
      ├─ render.js
      ├─ reveal.js
      └─ sidebar.js
```

## Editing Content

Most site content lives in `assets/js/data/content.js`.

- Update `projects` to add or reorder selected work.
- Six project pages share `assets/js/case-study.js` and `assets/css/case-study.css`: `thesis.html`, `chuma.html`, `hdc.html`, `lidar.html`, `takeover.html`, and `pcb.html`.
- Their introductions, highlights, sections, figures, and comparison tables live in `assets/js/data/case-*.js`. Every prose field has English, Chinese, and German variants; a language change also updates image/video labels and page metadata.
- Project cards include an `image` with `src`, `altKey`, `width`, and `height`. Use `fit: "contain"` for figures that must retain their axes or board boundaries. A translated `statusKey` is optional.
- Curated media is under `pic/projects/`. Keep full report pages, signed documents, participant data, and raw project folders outside web assets.
- Source provenance and measurement-scope notes are kept locally; only curated web content and media are committed to the public repository.
- Update `experience` for institutional experience cards.
- Update `gallery` to add photography entries with image paths, alt text, and optional captions.
- Update `beyond` and `studio` copy for the Beyond Engineering section.
- Update `translations` for English, Chinese, and German copy, including localized institution labels.
- Update `logoAssets` and `logoKeys` to control institution and company logos.
- Update `site.portrait` to change the rounded intro portrait on the homepage.
- Update `site.cv` to change the CV PDF link shown in the intro buttons.
- Update `site.socials` for email, GitHub, LinkedIn, or other links.

The page is rendered from this data by `assets/js/render.js`.

## Local Preview

Run a local static server from the repository root:

```bash
python3 -m http.server 8000 --bind 127.0.0.1
```

Then open:

```text
http://127.0.0.1:8000/
```

Using a local server is recommended because the site uses JavaScript modules.

## Deployment

This repository is GitHub Pages friendly. Push the static files to the Pages branch or repository root configured in GitHub Pages; no bundling or install step is required.
