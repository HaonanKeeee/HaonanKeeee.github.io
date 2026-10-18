import { t } from "./i18n.js?v=20261018-4";

export function initSidebarToggle() {
  const toggle = document.querySelector("[data-sidebar-toggle]");
  if (!toggle) return;
  const sidebar = toggle.closest(".sidebar");
  const hiddenGroups = sidebar.querySelectorAll(".sidebar__name-link, .language-switcher, .sidebar__bottom");

  function setCollapsed(collapsed) {
    if (collapsed && [...hiddenGroups].some((group) => group.contains(document.activeElement))) {
      toggle.focus({ preventScroll: true });
    }
    document.body.classList.toggle("is-sidebar-collapsed", collapsed);
    hiddenGroups.forEach((group) => {
      group.inert = collapsed;
      group.setAttribute("aria-hidden", String(collapsed));
    });
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.dataset.i18nAriaLabel = collapsed ? "controls.expandSidebar" : "controls.collapseSidebar";
    const language = document.documentElement.lang.split("-")[0] || "en";
    toggle.setAttribute("aria-label", t(toggle.dataset.i18nAriaLabel, language));
    localStorage.setItem("sidebarCollapsed", String(collapsed));
  }

  toggle.addEventListener("click", () => {
    setCollapsed(!document.body.classList.contains("is-sidebar-collapsed"));
  });

  setCollapsed(localStorage.getItem("sidebarCollapsed") === "true");
}
