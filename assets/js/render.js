import { experience, projects, site } from "./data/content.js";
import { t } from "./i18n.js";

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
    <section class="content-section" id="about">
      <span class="intro__eyebrow reveal" data-i18n="intro.eyebrow">${t("intro.eyebrow")}</span>
      <h1 class="intro__name reveal" data-i18n="name.hero">${t("name.hero")}</h1>
      <p class="intro__text reveal" data-i18n="intro.text">${t("intro.text")}</p>
      <div class="intro__links reveal">
        <a href="#projects" class="intro__link" data-i18n="intro.linkWork">${t("intro.linkWork")}</a>
        <a href="#experience" class="intro__link" data-i18n="intro.linkExperience">${t("intro.linkExperience")}</a>
        <a href="mailto:${site.email}" class="intro__link">Email</a>
      </div>
    </section>
  `;
}

function renderProjectMeta(project) {
  return project.tags.map((tag) => {
    if (tag.key) return `<span data-i18n="${tag.key}">${t(tag.key)}</span>`;
    return `<span>${tag.label}</span>`;
  }).join("");
}

function renderProjects() {
  const items = projects.map((project, index) => `
    <a href="${project.href}" class="timeline-item reveal">
      <span class="timeline-item__date">${project.year}</span>
      <div class="timeline-item__img timeline-item__img--${index + 1}">
        <span class="project-visual__label" data-i18n="${project.visualKey}">${t(project.visualKey)}</span>
      </div>
      <div class="timeline-item__info">
        <h4 class="timeline-item__title" data-i18n="${project.titleKey}">${t(project.titleKey)}</h4>
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
        <div class="view-switcher" aria-hidden="true">
          <span class="view-switcher__item is-active" data-i18n="projects.viewTimeline">${t("projects.viewTimeline")}</span>
          <span class="view-switcher__item" data-i18n="projects.viewGrid">${t("projects.viewGrid")}</span>
        </div>
      </div>
      <div class="projects-timeline">${items}</div>
    </section>
  `;
}

function renderExperience() {
  const cards = experience.map((item) => `
    <div class="experience-card reveal">
      <span class="experience-card__period">${item.period}</span>
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
        ${renderFooter()}
      </main>
    </div>
  `;
}
