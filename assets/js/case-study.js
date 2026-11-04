import { site } from "./data/content.js?v=20261104-3";

const version = "20261104-3";
const loaders = {
  thesis: () => import(`./data/case-thesis.js?v=${version}`).then((module) => module.thesisCase),
  hdc: () => import(`./data/case-hardware.js?v=${version}`).then((module) => module.hdcCase),
  pcb: () => import(`./data/case-hardware.js?v=${version}`).then((module) => module.pcbCase),
  lidar: () => import(`./data/case-uva.js?v=${version}`).then((module) => module.lidarCase),
  takeover: () => import(`./data/case-uva.js?v=${version}`).then((module) => module.takeoverCase),
  chuma: () => import(`./data/case-chuma.js?v=${version}`).then((module) => module.chumaCase),
};

const labels = {
  back: { en: "Selected work", zh: "代表项目", de: "Ausgewählte Projekte" },
  open: { en: "View full-size image", zh: "查看原图", de: "Bild in voller Größe" },
  openVideo: { en: "Open video", zh: "查看视频", de: "Video öffnen" },
  language: { en: "Language", zh: "语言", de: "Sprache" },
  contents: { en: "On this page", zh: "本页内容", de: "Auf dieser Seite" },
  next: { en: "Next project", zh: "下一个项目", de: "Nächstes Projekt" },
  skip: { en: "Skip to project", zh: "跳转到项目正文", de: "Zum Projekt springen" },
  contact: { en: "Get in touch", zh: "联系我", de: "Kontakt" },
  scrollTable: { en: "Swipe to see all columns", zh: "左右滑动查看完整表格", de: "Seitlich wischen, um alle Spalten zu sehen" },
};

const projectLinks = [
  { id: "thesis", path: "thesis.html", title: { en: "Heterogeneous Edge VLA", zh: "异构 Edge VLA 加速", de: "Heterogene Edge-VLA-Beschleunigung" } },
  { id: "chuma", path: "chuma.html", title: { en: "Chuma · Student Marketplace", zh: "出吗 · 留学生闲置平台", de: "Chuma · Marktplatz für Studierende" } },
  { id: "hdc", path: "hdc.html", title: { en: "Hardware-Aware HDC", zh: "硬件感知超维计算", de: "Hardwarebewusstes HDC" } },
  { id: "lidar", path: "lidar.html", title: { en: "LiDAR-Based Robot Following", zh: "LiDAR 机器人跟随", de: "LiDAR-gestützte Zielverfolgung" } },
  { id: "takeover", path: "takeover.html", title: { en: "Multimodal Take-Over Requests", zh: "多模态驾驶接管研究", de: "Multimodale Übernahmeaufforderungen" } },
  { id: "pcb", path: "pcb.html", title: { en: "Thermography Reference PCB", zh: "热像损耗分析参考板", de: "Thermografie-Referenzplatine" } },
];

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (character) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  }[character]));
}

function normalizeLanguage(value) {
  const language = String(value || "en").toLowerCase().split("-")[0];
  return site.languages.some((entry) => entry.code === language) ? language : "en";
}

let language = normalizeLanguage(localStorage.getItem("siteLanguage"));
const copy = [];
const alternatives = [];
const localize = (value) => typeof value === "object" && value !== null ? value[language] || value.en || "" : value ?? "";

function text(tag, value, className = "", attributes = "") {
  const index = copy.push(value) - 1;
  return `<${tag} data-case-copy="${index}"${className ? ` class="${className}"` : ""}${attributes}>${escapeHtml(localize(value))}</${tag}>`;
}

function imageMarkup(image, eager = false, className = "") {
  const index = alternatives.push(image.alt) - 1;
  if (image.src.endsWith(".mp4")) {
    return `<video src="${escapeHtml(image.src)}"${image.poster ? ` poster="${escapeHtml(image.poster)}"` : ""} aria-label="${escapeHtml(localize(image.alt))}" data-case-alt="${index}" width="${image.width}" height="${image.height}" controls playsinline preload="metadata"></video>`;
  }
  return `<img${className ? ` class="${className}"` : ""} src="${escapeHtml(image.src)}" alt="${escapeHtml(localize(image.alt))}" data-case-alt="${index}" width="${image.width}" height="${image.height}" loading="${eager ? "eager" : "lazy"}" decoding="async" />`;
}

let figureNumber = 0;
function figure(image, eager = false) {
  if (!image) return "";
  const id = `case-figure-${++figureNumber}`;
  const screenshots = image.screenshots;
  const video = image.src?.endsWith(".mp4");
  return `<figure class="case-figure${screenshots ? " case-figure--screens" : ""}">
    ${screenshots ? `<div class="case-screen-pair">${screenshots.map((screen) => `<a class="case-screen" href="${escapeHtml(screen.src)}" aria-describedby="${id}">${imageMarkup(screen, eager)}${text("span", screen.label, "case-screen__label")}</a>`).join("")}</div>` : video ? `<div class="case-figure__image">${imageMarkup(image)}</div>` : `<a class="case-figure__image" href="${escapeHtml(image.src)}" aria-describedby="${id}">${imageMarkup(image, eager)}</a>`}
    <figcaption id="${id}">${text("span", image.caption)}${!screenshots ? `<a href="${escapeHtml(image.src)}" class="case-figure__open">${text("span", video ? labels.openVideo : labels.open)} <span aria-hidden="true">↗</span></a>` : ""}</figcaption>
  </figure>`;
}

function tableMarkup(table, sectionId, sectionNote) {
  if (!table) return "";
  const note = table.note || sectionNote;
  return `<div class="case-table-wrap" role="region" tabindex="0" aria-labelledby="${sectionId}-title">
    <table aria-labelledby="${sectionId}-title"${note ? ` aria-describedby="${sectionId}-note"` : ""}>
      <thead><tr>${table.headers.map((header) => text("th", header, "", ' scope="col"')).join("")}</tr></thead>
      <tbody>${table.rows.map((row) => `<tr${row.featured ? ' class="is-featured"' : ""}>${text("th", row.label, "", ' scope="row"')}${row.values.map((value) => text("td", value)).join("")}</tr>`).join("")}</tbody>
    </table>
  </div>${text("p", labels.scrollTable, "case-table-hint")}${note ? text("p", note, "case-note", ` id="${sectionId}-note"`) : ""}`;
}

const caseId = document.body.dataset.case;
const study = await loaders[caseId]();
const currentIndex = projectLinks.findIndex((entry) => entry.id === caseId);
const next = projectLinks[(currentIndex + 1) % projectLinks.length];

document.getElementById("site-root").innerHTML = `
  <a class="case-skip" href="#case-content">${text("span", labels.skip)}</a>
  <header class="case-header">
    <div class="case-shell case-header__inner">
      <a class="case-identity" href="index.html"><img src="${site.portrait.src}" alt="" width="40" height="40" /><span>${site.name}</span></a>
      <div class="language-switcher case-languages" role="group">
        ${site.languages.map((entry) => `<button type="button" class="lang-btn" data-lang="${entry.code}" lang="${entry.code}" aria-pressed="false">${entry.label}</button>`).join("")}
      </div>
    </div>
  </header>
  <main class="case-shell" id="case-content">
    <a class="case-back" href="index.html#projects"><span aria-hidden="true">←</span>${text("span", labels.back)}</a>
    <article>
      <header class="case-hero">
        <div class="case-meta">${text("span", study.eyebrow, "section-label")}<span>${escapeHtml(study.affiliation)}</span><span>${escapeHtml(study.year)}</span></div>
        ${text("h1", study.title, "case-title")}
        ${text("p", study.intro, "case-lede")}
        <ul class="case-tags">${study.tags.map((tag) => `<li>${escapeHtml(tag)}</li>`).join("")}</ul>
        <dl class="case-highlights" style="--highlight-count:${study.highlights.length}">${study.highlights.map((highlight) => `<div>${text("dt", highlight.label)}${text("dd", highlight.value, "case-highlight__value")}${highlight.detail ? text("dd", highlight.detail, "case-highlight__detail") : ""}</div>`).join("")}</dl>
        ${figure(study.hero, true)}
      </header>
      <nav class="case-index"><ol>${study.sections.map((section, index) => `<li><a href="#${escapeHtml(section.id)}"><span class="case-index__number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>${text("span", section.title)}</a></li>`).join("")}</ol></nav>
      ${study.sections.map((section, index) => `<section class="case-section" id="${escapeHtml(section.id)}" aria-labelledby="${escapeHtml(section.id)}-title">
        ${(section.aliases || []).map((alias) => `<span class="case-anchor" id="${escapeHtml(alias)}" aria-hidden="true"></span>`).join("")}
        <div class="case-section__intro"><div><span class="case-section__number" aria-hidden="true">${String(index + 1).padStart(2, "0")}</span>${text("h2", section.title, "case-section__title", ` id="${escapeHtml(section.id)}-title"`)}</div>${text("p", section.text, "case-prose")}</div>
        ${tableMarkup(section.table, section.id, section.note)}
        ${!section.table && section.note ? text("p", section.note, "case-note") : ""}
        ${(section.figures || []).map((item) => figure(item)).join("")}
      </section>`).join("")}
    </article>
    <a class="case-next" href="${next.path}"><div>${text("span", labels.next, "section-label")}${text("span", next.title, "case-next__title")}</div><span aria-hidden="true">↗</span></a>
    <footer class="case-footer"><a class="case-back" href="index.html#projects"><span aria-hidden="true">←</span>${text("span", labels.back)}</a><a href="mailto:${site.email}">${text("span", labels.contact)} <span aria-hidden="true">↗</span></a></footer>
  </main>`;

function applyLanguage(nextLanguage) {
  language = normalizeLanguage(nextLanguage);
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;
  document.querySelectorAll("[data-case-copy]").forEach((element) => { element.textContent = localize(copy[+element.dataset.caseCopy]); });
  document.querySelectorAll("[data-case-alt]").forEach((element) => { element.setAttribute(element.tagName === "VIDEO" ? "aria-label" : "alt", localize(alternatives[+element.dataset.caseAlt])); });
  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });
  document.querySelector(".case-languages").setAttribute("aria-label", localize(labels.language));
  document.querySelector(".case-index").setAttribute("aria-label", localize(labels.contents));
  document.title = `${localize(study.title)} — ${site.name}`;
  document.querySelector('meta[name="description"]').setAttribute("content", localize(study.intro));
  localStorage.setItem("siteLanguage", language);
}

document.querySelectorAll(".lang-btn").forEach((button) => { button.addEventListener("click", () => applyLanguage(button.dataset.lang)); });
applyLanguage(language);
document.getElementById(location.hash.slice(1))?.scrollIntoView({ behavior: "instant", block: "start" });
