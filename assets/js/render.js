import { experience, projects, research, site } from "./data/content.js";
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
        <a href="#research" class="intro__link" data-i18n="intro.linkResearch">${t("intro.linkResearch")}</a>
        <a href="mailto:${site.email}" class="intro__link">Email</a>
      </div>
    </section>
  `;
}

function renderTag(tag) {
  const mainClass = tag.main ? " tag--main" : "";

  if (tag.key) {
    return `<span class="tag${mainClass}" data-i18n="${tag.key}">${t(tag.key)}</span>`;
  }

  return `<span class="tag${mainClass}">${tag.label}</span>`;
}

function renderProjects() {
  const items = projects.map((project) => `
    <a href="${project.href}" class="timeline-item reveal">
      <span class="timeline-item__date">${project.year}</span>
      <div class="timeline-item__content">
        <div class="timeline-item__img">
          <span class="project-visual__label" data-i18n="${project.visualKey}">${t(project.visualKey)}</span>
        </div>
        <div class="timeline-item__info">
          <div>
            <div class="timeline-item__info-top">
              <h4 class="timeline-item__title" data-i18n="${project.titleKey}">${t(project.titleKey)}</h4>
              <span class="timeline-item__arrow">→</span>
            </div>
            <p class="timeline-item__desc" data-i18n="${project.descKey}">${t(project.descKey)}</p>
          </div>
          <div class="timeline-item__tech">
            ${project.tags.map(renderTag).join("")}
          </div>
        </div>
      </div>
    </a>
  `).join("");

  return `
    <section class="content-section" id="projects">
      <span class="section-label reveal" data-i18n="projects.label">${t("projects.label")}</span>
      <h2 class="section-title reveal" data-i18n="projects.title">${t("projects.title")}</h2>
      <div class="projects-timeline">${items}</div>
    </section>
  `;
}

function renderResearch() {
  const items = research.map((item) => `
    <li class="pub-item reveal">
      <div><span class="pub-year">${item.year}</span></div>
      <div>
        <p class="pub-title" data-i18n="${item.titleKey}">${t(item.titleKey)}</p>
        <p class="pub-authors"><strong>${item.authors}</strong></p>
        <p class="pub-venue" data-i18n="${item.venueKey}">${t(item.venueKey)}</p>
      </div>
    </li>
  `).join("");

  return `
    <section class="content-section" id="research">
      <span class="section-label reveal" data-i18n="research.label">${t("research.label")}</span>
      <h2 class="section-title reveal" data-i18n="research.title">${t("research.title")}</h2>
      <ol class="pub-list">${items}</ol>
    </section>
  `;
}

function renderExperience() {
  const cards = experience.map((item) => `
    <div class="experience-card reveal">
      <h3 data-i18n="${item.titleKey}">${t(item.titleKey)}</h3>
      <p data-i18n="${item.descKey}">${t(item.descKey)}</p>
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
        ${renderResearch()}
        ${renderExperience()}
        ${renderFooter()}
      </main>
    </div>
  `;
}
