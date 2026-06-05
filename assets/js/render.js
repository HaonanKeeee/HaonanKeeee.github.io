import { experience, gallery, logoAssets, projects, site } from "./data/content.js?v=20260605-17";
import { t } from "./i18n.js?v=20260605-17";

function attrsForExternalLink(item) {
  return item.external ? ' target="_blank" rel="noopener"' : "";
}

function languageSwitcher() {
  return `
    <div class="language-switcher" aria-label="Language selector">
      ${site.languages.map((lang) => `<button class="lang-btn" type="button" data-lang="${lang.code}">${lang.label}</button>`).join("")}
    </div>
  `;
}

function navLinks(className, closeOnClick = false) {
  return site.nav.map((item) => {
    const closeAttr = closeOnClick ? " data-close" : "";
    const sectionAttr = closeOnClick ? "" : ` data-section="${item.id}"`;

    if (closeOnClick) {
      return `<a href="#${item.id}" class="${className}"${closeAttr} data-i18n="${item.labelKey}">${t(item.labelKey)}</a>`;
    }

    return `
      <a href="#${item.id}" class="${className}"${sectionAttr}>
        <span class="side-nav__line"></span>
        <span class="side-nav__label" data-i18n="${item.labelKey}">${t(item.labelKey)}</span>
      </a>
    `;
  }).join("");
}

function renderMobileNav() {
  return `
    <header class="mobile-nav" id="mobileNav">
      <a href="index.html" class="mobile-nav__name" data-i18n="name.display">${t("name.display")}</a>
      <div class="mobile-nav__right">
        ${languageSwitcher()}
        <button class="mobile-nav__burger" id="burger" aria-label="Toggle menu" aria-expanded="false">
          <span></span><span></span>
        </button>
      </div>
    </header>

    <div class="mobile-menu" id="mobileMenu">
      ${navLinks("mobile-menu__link", true)}
    </div>
  `;
}

function renderSidebar() {
  return `
    <aside class="sidebar">
      <button class="sidebar__toggle" type="button" aria-label="Collapse sidebar" aria-expanded="true" data-sidebar-toggle>
        <span class="sidebar__toggle-icon"></span>
      </button>
      <div>
        <a href="index.html" class="sidebar__name-link">
          <p class="sidebar__name" data-i18n="name.display">${t("name.display")}</p>
        </a>

        <nav class="side-nav" aria-label="Page sections">
          ${navLinks("side-nav__item")}
        </nav>

        ${languageSwitcher()}
      </div>

      <div class="sidebar__bottom">
        ${site.socials.map((item) => `<a href="${item.href}" class="sidebar__social"${attrsForExternalLink(item)}>${item.label}</a>`).join("")}
      </div>
    </aside>
  `;
}

function renderIntro() {
  return `
    <section class="content-section intro" id="about">
      <div class="intro__copy">
        <div class="intro__heading">
          <span class="intro__eyebrow reveal" data-i18n="intro.eyebrow">${t("intro.eyebrow")}</span>
          <h1 class="intro__name reveal" data-i18n="name.hero">${t("name.hero")}</h1>
        </div>
        <p class="intro__text reveal" data-i18n="intro.text">${t("intro.text")}</p>
        <div class="intro__links reveal">
          <a href="#projects" class="intro__link" data-i18n="intro.linkWork">${t("intro.linkWork")}</a>
          <a href="#experience" class="intro__link" data-i18n="intro.linkExperience">${t("intro.linkExperience")}</a>
          <a href="mailto:${site.email}" class="intro__link">${site.email}</a>
        </div>
      </div>
      <figure class="intro__media reveal">
        <img src="${site.portrait.src}" alt="${site.portrait.alt}" class="intro__portrait" loading="eager" />
      </figure>
    </section>
  `;
}

function renderProjectMeta(project) {
  return project.tags.map((tag) => {
    if (tag.key) return `<span data-i18n="${tag.key}">${t(tag.key)}</span>`;
    return `<span>${tag.label}</span>`;
  }).join("");
}

function renderLogos(keys = [], className) {
  const logos = keys
    .map((key) => logoAssets[key])
    .filter(Boolean)
    .map((logo) => `<img src="${logo.src}" alt="${logo.alt}" loading="lazy" />`)
    .join("");

  return logos ? `<div class="${className}">${logos}</div>` : "";
}

function getProjectSlug(project) {
  return project.titleKey.replace(".", "-");
}

function renderProjectTitle(project) {
  const institution = project.institutionKey
    ? `<span class="timeline-item__institution">(<span data-i18n="${project.institutionKey}">${t(project.institutionKey)}</span>)</span>`
    : project.institution
      ? `<span class="timeline-item__institution">(${project.institution})</span>`
      : "";

  return `
    <h4 class="timeline-item__title">
      <span data-i18n="${project.titleKey}">${t(project.titleKey)}</span>
      ${institution}
    </h4>
  `;
}

function renderProjects() {
  const items = projects.map((project) => `
    <a href="${project.href}" class="timeline-item reveal">
      <span class="timeline-item__date">${project.year}</span>
      <div class="timeline-item__img timeline-item__img--${getProjectSlug(project)}">
        <span class="project-visual__label" data-i18n="${project.visualKey}">${t(project.visualKey)}</span>
        ${renderLogos(project.logoKeys, "project-logo-overlay")}
      </div>
      <div class="timeline-item__info">
        ${renderProjectTitle(project)}
        <p class="timeline-item__desc" data-i18n="${project.descKey}">${t(project.descKey)}</p>
        <div class="timeline-item__tech">${renderProjectMeta(project)}</div>
      </div>
      <span class="timeline-item__arrow">→</span>
    </a>
  `).join("");

  return `
    <section class="content-section" id="projects">
      <div class="section-heading reveal">
        <div>
          <span class="section-label" data-i18n="projects.label">${t("projects.label")}</span>
          <h2 class="section-title" data-i18n="projects.title">${t("projects.title")}</h2>
        </div>
        <div class="view-switcher" aria-label="Project view">
          <button class="view-switcher__item is-active" type="button" data-project-view="timeline" data-i18n="projects.viewTimeline" aria-pressed="true">${t("projects.viewTimeline")}</button>
          <button class="view-switcher__item" type="button" data-project-view="grid" data-i18n="projects.viewGrid" aria-pressed="false">${t("projects.viewGrid")}</button>
        </div>
      </div>
      <div class="projects-timeline is-timeline" data-projects-view>${items}</div>
    </section>
  `;
}

function renderExperience() {
  const cards = experience.map((item) => `
    <div class="experience-card reveal">
      ${renderLogos(item.logoKeys, "experience-card__logos")}
      <span class="experience-card__period" data-i18n="${item.periodKey}">${t(item.periodKey)}</span>
      <h3 data-i18n="${item.titleKey}">${t(item.titleKey)}</h3>
      <p class="experience-card__role" data-i18n="${item.roleKey}">${t(item.roleKey)}</p>
      <p data-i18n="${item.descKey}">${t(item.descKey)}</p>
      <div class="experience-card__tech">
        ${item.tags.map((tag) => `<span class="tag">${tag}</span>`).join("")}
      </div>
    </div>
  `).join("");

  return `
    <section class="content-section" id="experience">
      <span class="section-label reveal" data-i18n="experience.label">${t("experience.label")}</span>
      <h2 class="section-title reveal" data-i18n="experience.title">${t("experience.title")}</h2>
      <div class="experience-grid">${cards}</div>
    </section>
  `;
}

function renderGalleryItems() {
  if (!gallery.length) {
    return `
      <div class="gallery-empty reveal">
        <p class="gallery-empty__title" data-i18n="gallery.emptyTitle">${t("gallery.emptyTitle")}</p>
        <p data-i18n="gallery.emptyText">${t("gallery.emptyText")}</p>
      </div>
    `;
  }

  return `
    <div class="gallery-grid">
      ${gallery.map((item) => `
        <figure class="gallery-item reveal">
          <img src="${item.src}" alt="${item.alt}" loading="lazy" />
          ${item.caption ? `<figcaption>${item.caption}</figcaption>` : ""}
        </figure>
      `).join("")}
    </div>
  `;
}

function renderGallery() {
  return `
    <section class="content-section gallery-section" id="gallery">
      <span class="section-label reveal" data-i18n="gallery.label">${t("gallery.label")}</span>
      <h2 class="section-title reveal" data-i18n="gallery.title">${t("gallery.title")}</h2>
      <div class="gallery-hero reveal">
        <blockquote>
          <p>
            <span data-i18n="gallery.quoteLine1">${t("gallery.quoteLine1")}</span>
            <span data-i18n="gallery.quoteLine2">${t("gallery.quoteLine2")}</span>
          </p>
          <cite>
            <span class="gallery-hero__dash">—</span>
            <span data-i18n="gallery.attribution">${t("gallery.attribution")}</span>
          </cite>
        </blockquote>
      </div>
      ${renderGalleryItems()}
    </section>
  `;
}

function renderFooter() {
  return `
    <footer class="footer">
      <p data-i18n="footer.text">${t("footer.text")}</p>
    </footer>
  `;
}

export function renderSite() {
  const root = document.getElementById("site-root");

  root.innerHTML = `
    ${renderMobileNav()}
    <div class="site">
      ${renderSidebar()}
      <main class="content">
        ${renderIntro()}
        ${renderProjects()}
        ${renderExperience()}
        ${renderGallery()}
        ${renderFooter()}
      </main>
    </div>
  `;
}
