import { site, thesis } from "./data/content.js?v=20261018-4";
import { t, setLanguage } from "./i18n.js?v=20261018-4";

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[character]));
}

function localized(tag, key, className = "", attributes = "") {
  return `<${tag}${className ? ` class="${className}"` : ""} data-i18n="${key}"${attributes}>${escapeHtml(t(key))}</${tag}>`;
}

function figure(image, eager = false) {
  if (!image) return "";

  return `
    <figure class="thesis-figure thesis-figure--${escapeHtml(image.id)}">
      <a class="thesis-figure__image-link" href="${escapeHtml(image.src)}" aria-describedby="figure-${escapeHtml(image.id)}-caption">
        <img src="${escapeHtml(image.src)}" alt="${escapeHtml(t(image.altKey))}" data-i18n-alt="${image.altKey}" width="${image.width}" height="${image.height}" loading="${eager ? "eager" : "lazy"}" decoding="async" />
      </a>
      <figcaption id="figure-${escapeHtml(image.id)}-caption">
        ${localized("span", image.captionKey, "thesis-figure__caption")}
        <a class="thesis-figure__open" href="${escapeHtml(image.src)}" aria-describedby="figure-${escapeHtml(image.id)}-caption">
          ${localized("span", "thesis.figureLink")}<span aria-hidden="true"> ↗</span>
        </a>
      </figcaption>
    </figure>
  `;
}

function comparisonTable() {
  const rows = [
    { label: "original", throughput: "2.11", latency: "499" },
    { label: "student", throughput: "4.19–4.20", latency: "259–262" },
    { label: "heterogeneous", throughput: "5.54–5.55", latency: "430–432" },
  ];

  return `
    <div class="thesis-comparison">
      <table aria-labelledby="thesis-results-title" aria-describedby="thesis-results-intro">
        <thead>
          <tr>
            ${localized("th", "thesis.table.deployment", "", ' scope="col"')}
            ${localized("th", "thesis.table.throughput", "", ' scope="col"')}
            ${localized("th", "thesis.table.latency", "", ' scope="col"')}
          </tr>
        </thead>
        <tbody>
          ${rows.map((row) => `
            <tr${row.label === "heterogeneous" ? ' class="thesis-comparison__highlight"' : ""}>
              ${localized("th", `thesis.table.${row.label}`, "", ' scope="row"')}
              <td>${row.throughput}</td>
              <td>${row.latency}</td>
            </tr>
          `).join("")}
        </tbody>
      </table>
    </div>
  `;
}

const platform = thesis.images.find((image) => image.id === "platform");
const architecture = thesis.images.find((image) => image.id === "architecture");
const results = thesis.images.find((image) => image.id === "results");
const demoImages = thesis.images.filter((image) => !["platform", "architecture", "results"].includes(image.id));

document.getElementById("site-root").innerHTML = `
  <div class="thesis-shell">
    <header class="thesis-header">
      <a class="thesis-identity" href="index.html">
        <img src="${escapeHtml(site.portrait.src)}" alt="${escapeHtml(site.portrait.alt)}" width="44" height="44" />
        ${localized("span", "name.display")}
      </a>
      <div class="language-switcher" aria-label="${escapeHtml(t("controls.languageSelector"))}" data-i18n-aria-label="controls.languageSelector">
        ${site.languages.map((language) => `<button class="lang-btn" type="button" data-lang="${language.code}" lang="${language.code}" aria-pressed="false">${escapeHtml(language.label)}</button>`).join("")}
      </div>
    </header>

    <main>
      <a class="thesis-back" href="index.html#projects">
        <span aria-hidden="true">←</span>${localized("span", "thesis.back")}
      </a>

      <article>
        <header class="thesis-hero">
          <div class="thesis-meta">
            ${localized("span", "thesis.label", "section-label")}
            ${localized("span", "thesis.status", "thesis-status")}
            ${localized("span", "thesis.date", "thesis-date")}
          </div>
          ${localized("h1", "thesis.title", "thesis-title")}
          <div class="thesis-tags" aria-label="${escapeHtml(t("controls.technologies"))}" data-i18n-aria-label="controls.technologies">
            <span>FPGA</span><span>RK3588 NPU</span><span>ROS 2</span><span>Vision–Language–Action</span>
          </div>
          ${localized("p", "thesis.overview", "thesis-overview")}
          ${figure(platform, true)}
        </header>

        <section class="thesis-section" aria-labelledby="thesis-approach-title">
          <div class="thesis-section__intro">
            ${localized("h2", "thesis.approachTitle", "thesis-section__title", ' id="thesis-approach-title"')}
            ${localized("p", "thesis.approach", "thesis-prose")}
          </div>
          ${figure(architecture)}
        </section>

        <section class="thesis-section" aria-labelledby="thesis-results-title">
          <div class="thesis-section__intro">
            ${localized("h2", "thesis.resultsTitle", "thesis-section__title", ' id="thesis-results-title"')}
            ${localized("p", "thesis.resultsIntro", "thesis-prose", ' id="thesis-results-intro"')}
          </div>
          ${comparisonTable()}
          ${figure(results)}
        </section>

        <section class="thesis-section thesis-section--demo" aria-labelledby="thesis-demo-title">
          <div class="thesis-section__intro">
            ${localized("h2", "thesis.demoTitle", "thesis-section__title", ' id="thesis-demo-title"')}
            <div class="thesis-demo-copy">
              ${localized("p", "thesis.demo", "thesis-prose")}
              ${localized("p", "thesis.limitations", "thesis-prose thesis-limitations")}
            </div>
          </div>
          ${demoImages.map((image) => figure(image)).join("")}
        </section>
      </article>
    </main>

    <footer class="thesis-footer">
      <a class="thesis-back" href="index.html#projects">
        <span aria-hidden="true">←</span>${localized("span", "thesis.back")}
      </a>
      <a href="mailto:${escapeHtml(site.email)}">${escapeHtml(site.email)}</a>
    </footer>
  </div>
`;

function applyLanguage(language) {
  setLanguage(language);
  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.setAttribute("aria-pressed", String(button.classList.contains("is-active")));
  });
}

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => applyLanguage(button.dataset.lang));
});

const savedLanguage = localStorage.getItem("siteLanguage");
applyLanguage(site.languages.some((language) => language.code === savedLanguage) ? savedLanguage : "en");
