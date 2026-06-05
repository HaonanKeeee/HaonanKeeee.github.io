## 2026-06-05

### Task goal
Review English, Chinese, and German site copy for natural language quality and language consistency.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/i18n.js`
- `assets/js/main.js`
- `index.html`
- `README.md`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~30 lines
- Modified: ~45 lines
- Removed: ~1 line

### Added functionality or content
- Added localized institution labels for project entries.
- Added language-aware rendering for project institution labels.
- Added this change log entry as required by `AGENTS.md`.

### Removed functionality or changed behavior
- Replaced shared English institution strings with translation keys.
- Refined English, Chinese, and German copy for intro, projects, and experience sections.
- Updated cache-busting versions to `20260605-2`.
- Updated README structure to match the current modular JavaScript files.

### Verification steps
- Ran JS syntax checks for `assets/js/data/content.js`, `assets/js/render.js`, and `assets/js/main.js`.
- Ran a localized key completeness check for project and experience fields across English, Chinese, and German.
- Confirmed cache-busting versions were updated consistently in `index.html`, `main.js`, `i18n.js`, and `render.js`.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Balance experience logos and localize the Siemens experience.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~9 lines
- Modified: ~16 lines
- Removed: 0 lines

### Added functionality or content
- Added Chinese and German translations for the Siemens working student experience.
- Added per-logo CSS classes during logo rendering.
- Added Siemens-specific logo sizing and a BMW-specific cap so experience logos have more consistent visual height.

### Removed functionality or changed behavior
- Siemens now appears larger and more proportional as a horizontal wordmark.
- Experience logo sizing now uses key-specific rules instead of one shared max width for every logo shape.
- CSS and JS cache-busting versions were updated to `20260605-25`.

### Verification steps
- Ran JavaScript syntax checks for `assets/js/data/content.js` and `assets/js/render.js` using the bundled Node runtime.
- Imported the content module to confirm English, Chinese, and German Siemens titles are present.
- Checked source references for `logo-img--siemens`, `logo-img--bmw`, and `20260605-25` cache-busting strings.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Remove the Beyond Engineering intro sentence and reduce Gallery/Studio title size.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~4 lines
- Modified: ~8 lines
- Removed: ~2 lines

### Added functionality or content
- Added a `section-title--sub` style for Gallery and Studio subsection headings.

### Removed functionality or changed behavior
- Removed the Beyond Engineering intro sentence from content and rendering.
- Gallery and Studio headings now render smaller than the parent Beyond Engineering heading.
- CSS and JS cache-busting versions were updated to `20260605-24`.

### Verification steps
- Ran JavaScript syntax checks for `assets/js/data/content.js` and `assets/js/render.js` using the bundled Node runtime.
- Searched source files to confirm `beyond.text` and the removed sentence are gone.
- Confirmed `section-title--sub` and `20260605-24` cache-busting references are present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Add a CV button and the latest Siemens AG experience.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `README.md`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~20 lines
- Modified: ~14 lines
- Removed: 0 lines

### Added functionality or content
- Added `site.cv` pointing to `cv/CV_en_general_web_jun26.pdf`.
- Added a `CV` pill button after the email button in the intro link row.
- Added Siemens logo metadata for `pic/Siemens-logo.svg.png`.
- Added the latest Siemens AG, Munich, Germany working student experience at the top of the experience list.
- Added Siemens-related tags for Industrial Metaverse, XR, digital twin, simulation, robotics, and human-centered design.
- Documented `site.cv` in `README.md`.

### Removed functionality or changed behavior
- Experience cards now allow slightly wider company logos so the Siemens wordmark can display more clearly.
- CSS and JS cache-busting versions were updated to `20260605-23`.

### Verification steps
- Confirmed `cv/CV_en_general_web_jun26.pdf` exists.
- Confirmed `pic/Siemens-logo.svg.png` exists.
- Ran JavaScript syntax checks for `assets/js/data/content.js`, `assets/js/render.js`, and `assets/js/main.js` using the bundled Node runtime.
- Imported the content module to confirm the CV link, Siemens logo key, first experience logo, and Siemens card title.
- Searched source files to confirm `site.cv`, Siemens references, and `20260605-23` cache-busting references are present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Reduce and center the Studio quote text so both lines fit.

### Changed files
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~13 lines
- Modified: ~5 lines
- Removed: 0 lines

### Added functionality or content
- Added Studio-specific quote sizing that keeps the Gallery-style hero format but uses a smaller font.
- Centered the Studio quote block and widened its blockquote container.
- Added mobile-specific Studio quote sizing.

### Removed functionality or changed behavior
- Studio quote no longer inherits the full Gallery quote font size, which caused clipping on longer lines.
- CSS cache-busting versions were updated to `20260605-22`.

### Verification steps
- Searched source files to confirm `studio-hero` sizing rules and `20260605-22` CSS cache-busting references are present.
- Reviewed the CSS diff for Studio-specific text alignment and font-size rules.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Split the Studio quote into two Gallery-style lines at the semicolon.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~10 lines
- Modified: ~8 lines
- Removed: ~1 line

### Added functionality or content
- Split the Studio quote into `quoteLine1` and `quoteLine2`, with the line break after the semicolon.
- Added the same Studio quote lines to English, Chinese, and German dictionaries.

### Removed functionality or changed behavior
- Studio no longer renders the quote as a single nowrap line, preventing horizontal clipping.
- CSS and JS cache-busting versions were updated to `20260605-21`.

### Verification steps
- Ran JavaScript syntax checks for `assets/js/data/content.js` and `assets/js/render.js` using the bundled Node runtime.
- Imported the content module to confirm all three languages expose the same two Studio quote lines.
- Searched source files to confirm `studio.quoteLine1`, `studio.quoteLine2`, and `20260605-21` cache-busting references are present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Make the Studio quote match the Gallery quote format.

### Changed files
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~5 lines
- Modified: ~12 lines
- Removed: ~18 lines

### Added functionality or content
- Rendered the Studio sentence inside the same `gallery-hero` quote layout used by Gallery.
- Added visible quotation marks around the Studio sentence without adding a citation line.

### Removed functionality or changed behavior
- Replaced the separate `studio-quote` styling with a lightweight `studio-hero` modifier so Studio visually matches Gallery.
- CSS and JS cache-busting versions were updated to `20260605-20`.

### Verification steps
- Ran JavaScript syntax checks for `assets/js/render.js` and `assets/js/main.js` using the bundled Node runtime.
- Searched source files to confirm `studio-hero`, the removed `studio-quote` references, and `20260605-20` cache-busting references.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Add a Beyond Engineering navigation group with Gallery and Studio subsections.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/navigation.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `README.md`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~120 lines
- Modified: ~18 lines
- Removed: ~10 lines

### Added functionality or content
- Added a `Beyond Engineering` parent navigation item with nested `Gallery` and `Studio` links.
- Added a Beyond Engineering intro section before Gallery.
- Kept the existing Gallery content under the new Beyond Engineering area.
- Added a new Studio section with the sentence: "Science and engineering are how we stay alive; art and culture are what we live for."
- Added sidebar and mobile-menu styles for nested navigation items.
- Updated navigation highlighting so the Beyond Engineering parent remains active when Gallery or Studio is active.
- Documented the new `beyond` and `studio` content areas in `README.md`.

### Removed functionality or changed behavior
- Gallery is no longer a top-level navigation item; it is nested under Beyond Engineering.
- CSS and JS cache-busting versions were updated to `20260605-19`.

### Verification steps
- Ran JavaScript syntax checks for `assets/js/data/content.js`, `assets/js/render.js`, `assets/js/navigation.js`, and `assets/js/main.js` using the bundled Node runtime.
- Imported `assets/js/data/content.js` with Node to confirm the navigation tree and Studio quote data.
- Searched source files to confirm Beyond Engineering, Studio, nested navigation styles, and `20260605-19` cache-busting references are present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Remove the medium-width state where the intro portrait becomes a large standalone row.

### Changed files
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~44 lines
- Modified: ~6 lines
- Removed: ~42 lines

### Added functionality or content
- Added a `1280px` intro breakpoint that switches directly to the compact name-side portrait layout.
- Kept the intro paragraph and links full-width below the compact heading row.

### Removed functionality or changed behavior
- The wide intro layout no longer wraps the portrait into a large standalone row.
- The site now has only two intended intro portrait states: wide right-side portrait, or compact portrait beside the name.
- CSS cache-busting versions were updated to `20260605-18`.

### Verification steps
- Reviewed the responsive CSS rules for the new `1280px` compact portrait breakpoint.
- Searched source files to confirm the wide intro layout uses `flex-wrap: nowrap` and CSS cache-busting references use `20260605-18`.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Make the intro portrait compact and aligned with the name on narrow screens.

### Changed files
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~28 lines
- Modified: ~12 lines
- Removed: ~4 lines

### Added functionality or content
- Added an `intro__heading` wrapper around the intro eyebrow and name.
- Changed the narrow-screen intro layout so the portrait sits to the right of the eyebrow/name block.
- Let the intro paragraph and action links span the full width below the heading row.

### Removed functionality or changed behavior
- The portrait no longer becomes a large standalone row on medium and mobile widths.
- Narrow-screen portrait sizing was reduced to a compact range closer to the combined heading height.
- CSS and JS cache-busting versions were updated to `20260605-17`.

### Verification steps
- Ran JavaScript syntax checks for `assets/js/render.js`, `assets/js/main.js`, and `assets/js/i18n.js` using the bundled Node runtime.
- Searched source files to confirm the new `intro__heading` markup and `20260605-17` cache-busting references.
- Reviewed the responsive CSS diff for the intro layout rules.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Prevent the intro portrait from making the intro text too narrow on medium-width screens.

### Changed files
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~4 lines
- Modified: ~14 lines
- Removed: ~2 lines

### Added functionality or content
- Changed the intro layout from a fixed two-column grid to a wrapping flex layout.
- Added a minimum comfortable width for the intro copy so the portrait wraps instead of squeezing text into short lines.
- Tuned responsive portrait sizing with matching flex-basis values.

### Removed functionality or changed behavior
- On medium-width screens, the portrait can move below the intro copy before the text becomes overly narrow.
- CSS cache-busting versions were updated to `20260605-16`.

### Verification steps
- Reviewed the updated intro CSS and responsive rules.
- Searched source files to confirm the new cache-busting version and intro layout selectors are present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Add the professional portrait to the intro section.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `README.md`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~38 lines
- Modified: ~12 lines
- Removed: 0 lines

### Added functionality or content
- Added `site.portrait` pointing to `pic/Portrait/portrait.jpg`.
- Rendered a rounded professional portrait in the intro section beside the main copy on desktop.
- Added responsive rules so the portrait stacks cleanly on narrower screens.
- Documented `site.portrait` in `README.md`.

### Removed functionality or changed behavior
- The intro section now uses a two-column layout on desktop instead of a single text-only block.
- CSS and JS cache-busting versions were updated to `20260605-15`.

### Verification steps
- Confirmed the portrait image exists and is square at `1254x1254`.
- Ran JavaScript syntax checks for `assets/js/data/content.js`, `assets/js/render.js`, and `assets/js/main.js` using the bundled Node runtime.
- Searched source files to confirm the portrait references and cache-busting version are present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Make the Gallery quote render as two centered lines.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~10 lines
- Modified: ~14 lines
- Removed: ~3 lines

### Added functionality or content
- Split the Gallery quote into two localized line fields so the desktop layout can keep the requested line break.
- Centered the quote and attribution inside the Gallery display area.

### Removed functionality or changed behavior
- Replaced automatic single-paragraph wrapping with explicit two-line quote rendering on wider screens.
- Mobile layouts can still wrap the quote lines to avoid overflow.
- CSS and JS cache-busting versions were updated to `20260605-14`.

### Verification steps
- Ran JavaScript syntax checks for `assets/js/data/content.js`, `assets/js/render.js`, and `assets/js/main.js`.
- Checked the content module output for all three languages to confirm the quote is split into the intended two lines.
- Searched source files to confirm the new cache-busting version and Gallery centering styles are present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Make the Gallery quote render as two fixed centered lines.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~10 lines
- Modified: ~14 lines
- Removed: ~3 lines

### Added functionality or content
- Split the Gallery quote into `quoteLine1` and `quoteLine2` so the desktop layout can force the exact two-line break.
- Centered the Gallery quote block and attribution within the hero display area.

### Removed functionality or changed behavior
- Replaced automatic quote wrapping with two explicit lines: `"Make sure your offline world is` and `better than your online one"`.
- On very narrow screens, quote lines are allowed to wrap to avoid overflow.
- JS and CSS cache-busting versions were updated to `20260605-14`.

### Verification steps
- Ran JS syntax checks for `assets/js/data/content.js`, `assets/js/render.js`, and `assets/js/main.js`.
- Imported the content module and confirmed all three languages have `quoteLine1` and `quoteLine2`.
- Searched CSS, JS, and HTML to confirm centered quote styling and cache-busting versions are present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Refine the Gallery quote hero typography and background.

### Changed files
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~1 line
- Modified: ~12 lines
- Removed: ~7 lines

### Added functionality or content
- Added balanced text wrapping for the Gallery quote.

### Removed functionality or changed behavior
- Reduced the Gallery quote hero height and quote font size.
- Removed the Gallery hero background line pattern and inner border.
- Replaced the line-pattern background with a cleaner soft gradient.
- CSS cache-busting versions were updated to `20260605-13`.

### Verification steps
- Searched CSS and HTML to confirm the new Gallery quote typography, clean background styling, and cache-busting versions are present.
- Reviewed the local diff for the changed CSS and HTML files.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Add quotation marks around the Gallery hero quote.

### Changed files
- `assets/js/data/content.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/js/render.js`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: 0 lines
- Modified: ~8 lines
- Removed: 0 lines

### Added functionality or content
- Added visible quotation marks around the Ronny Chieng quote in English, Chinese, and German modes.

### Removed functionality or changed behavior
- Gallery quote text now renders as a formal quoted line.
- JS cache-busting versions were updated to `20260605-12`.

### Verification steps
- Ran JS syntax checks for `assets/js/data/content.js`, `assets/js/render.js`, and `assets/js/main.js`.
- Imported the content module and confirmed all three gallery quote translations include quotation marks.
- Searched JS and HTML to confirm the new cache-busting version is present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Add a Gallery section for photography with an artistic quote header.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `README.md`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~120 lines
- Modified: ~15 lines
- Removed: 0 lines

### Added functionality or content
- Added a Gallery navigation item in desktop and mobile navigation.
- Added a Gallery section with a large editorial quote hero using the Ronny Chieng quote provided by the user.
- Added a data-driven `gallery` array for future photography entries.
- Added responsive masonry-style gallery rendering and an empty state for when no photos are configured.
- Added README guidance for updating `gallery` entries.

### Removed functionality or changed behavior
- The page now includes Gallery after Experience and before the footer.
- JS and CSS cache-busting versions were updated to `20260605-10`.

### Verification steps
- Ran JS syntax checks for `assets/js/data/content.js`, `assets/js/render.js`, and `assets/js/main.js`.
- Ran a translation key check for all Gallery-related keys across English, Chinese, and German.
- Searched HTML, CSS, JS, and README to confirm Gallery rendering, navigation, and cache-busting versions are present.

### Known limitations or TODOs
- No photography files are present in the repository yet, so the Gallery currently renders its quote hero and an empty state.
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Make the left sidebar navigation labels consistently uppercase.

### Changed files
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~2 lines
- Modified: ~5 lines
- Removed: 0 lines

### Added functionality or content
- Added uppercase styling and letter spacing to `.side-nav__label`.

### Removed functionality or changed behavior
- Left sidebar navigation labels now render in uppercase without changing the underlying translation strings.
- CSS cache-busting versions were updated to `20260605-11`.

### Verification steps
- Searched CSS and HTML to confirm uppercase sidebar styling and cache-busting versions are present.
- Reviewed the local diff for the changed CSS and HTML files.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Lighten the project thumbnail hover overlay.

### Changed files
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: 0 lines
- Modified: ~5 lines
- Removed: 0 lines

### Added functionality or content
- None.

### Removed functionality or changed behavior
- Changed the project hover overlay from a dark gray shade to a light warm gray overlay.
- CSS cache-busting versions were updated to `20260605-9`.

### Verification steps
- Searched CSS and HTML to confirm the new overlay color and cache-busting version are present.
- Reviewed the local diff for the changed CSS and HTML files.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Make project hover logos blend with the gray overlay background instead of appearing on a separate white tile.

### Changed files
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: 0 lines
- Modified: ~5 lines
- Removed: ~4 lines

### Added functionality or content
- None.

### Removed functionality or changed behavior
- Removed the white background, padding, rounded tile, and shadow from project hover logo images.
- Project hover logos now sit directly on the gray overlay.
- CSS cache-busting versions were updated to `20260605-8`.

### Verification steps
- Searched CSS and HTML to confirm the project logo image styling and new cache-busting version are present.
- Reviewed the local diff for the changed CSS and HTML files.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Add company and institution logos to experience cards and project thumbnail hover states.

### Changed files
- `assets/js/data/content.js`
- `assets/js/render.js`
- `assets/js/main.js`
- `assets/js/i18n.js`
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `README.md`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~70 lines
- Modified: ~18 lines
- Removed: ~2 lines

### Added functionality or content
- Added `logoAssets` and `logoKeys` data for TUM, UVA, IAV, BMW, and Audi logos.
- Added experience-card logo rendering in the top-right corner.
- Added project thumbnail hover overlays that dim the visual and show the institution logo.
- Added README notes for the `pic/` folder and logo configuration.

### Removed functionality or changed behavior
- Project thumbnail hover no longer applies a saturation filter; it now reveals an institution logo overlay.
- Experience cards now reserve top-right space for company/institution logos.
- JS and CSS cache-busting versions were updated to `20260605-7`.

### Verification steps
- Ran JS syntax checks for `assets/js/data/content.js`, `assets/js/render.js`, and `assets/js/main.js`.
- Ran a data integrity check to confirm all `logoKeys` resolve to existing logo assets and files.
- Ran a localized key completeness check for project and experience fields across English, Chinese, and German.
- Searched HTML, CSS, and JS to confirm the new cache-busting version and logo selectors are present.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Prevent project thumbnails from becoming flat horizontal strips at intermediate narrow viewport widths.

### Changed files
- `assets/css/components.css`
- `assets/css/responsive.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~26 lines
- Modified: ~12 lines
- Removed: ~2 lines

### Added functionality or content
- Added a fixed `2 / 1` aspect ratio for project thumbnails.
- Added a second responsive breakpoint at `620px` so project items stay image-left/text-right at tablet-like widths and only stack on narrow phone widths.

### Removed functionality or changed behavior
- Removed fixed thumbnail min-heights that allowed wide stacked images to look like flat strips.
- Changed the `900px` responsive project layout from fully stacked to a compact horizontal layout.
- CSS cache-busting versions were updated to `20260605-6`.

### Verification steps
- Searched CSS and HTML to confirm the thumbnail aspect ratio, new breakpoint, responsive grid columns, and cache-busting version are present.
- Reviewed the local diff for the changed CSS and HTML files.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Make the experience cards wider for better readability.

### Changed files
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: 0 lines
- Modified: ~6 lines
- Removed: 0 lines

### Added functionality or content
- Updated the experience grid to use responsive wider cards with `repeat(auto-fit, minmax(min(100%, 460px), 1fr))`.

### Removed functionality or changed behavior
- Experience cards no longer force a three-column layout on desktop; they now use wider columns and naturally collapse when space is limited.
- CSS cache-busting versions were updated to `20260605-5`.

### Verification steps
- Searched CSS and HTML to confirm the new experience grid rule and cache-busting version are present.
- Reviewed the local diff for the changed CSS and HTML files.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Make the intro paragraph lines longer and reduce the hero name size.

### Changed files
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: 0 lines
- Modified: ~6 lines
- Removed: 0 lines

### Added functionality or content
- Increased the intro paragraph max width from `820px` to `980px`.
- Reduced the hero name font-size clamp from `clamp(38px, 5.4vw, 68px)` to `clamp(34px, 4.4vw, 56px)`.

### Removed functionality or changed behavior
- The intro copy now occupies longer lines on wider screens.
- The hero name appears less oversized on desktop and medium-width layouts.
- CSS cache-busting versions were updated to `20260605-4`.

### Verification steps
- Searched CSS and HTML to confirm the new intro width, name font-size, and cache-busting version are present.
- Reviewed the local diff for the changed CSS and HTML files.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.

## 2026-06-05

### Task goal
Make long text paragraphs visually align on both left and right edges.

### Changed files
- `assets/css/components.css`
- `assets/css/main.css`
- `index.html`
- `log.md`

### Approximate added / modified / removed lines
- Added: ~3 lines
- Modified: ~6 lines
- Removed: 0 lines

### Added functionality or content
- Applied justified text alignment to intro copy, project descriptions, and experience descriptions.
- Added `text-align-last: left` so the final line of each paragraph does not stretch awkwardly.

### Removed functionality or changed behavior
- Project and experience description paragraphs now use the same justified alignment behavior as the intro paragraph.
- CSS cache-busting versions were updated to `20260605-3`.

### Verification steps
- Searched CSS to confirm the justified paragraph selectors and cache-busting versions are present.
- Reviewed the local diff for the CSS and HTML changes.

### Known limitations or TODOs
- Browser-based visual verification was not run because the user previously asked not to continue browser verification.
