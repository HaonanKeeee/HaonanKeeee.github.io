export function initSidebarToggle() {
  const toggle = document.querySelector("[data-sidebar-toggle]");
  if (!toggle) return;

  function setCollapsed(collapsed) {
    document.body.classList.toggle("is-sidebar-collapsed", collapsed);
    toggle.setAttribute("aria-expanded", String(!collapsed));
    toggle.setAttribute("aria-label", collapsed ? "Expand sidebar" : "Collapse sidebar");
    localStorage.setItem("sidebarCollapsed", String(collapsed));
  }

  toggle.addEventListener("click", () => {
    setCollapsed(!document.body.classList.contains("is-sidebar-collapsed"));
  });

  setCollapsed(localStorage.getItem("sidebarCollapsed") === "true");
}
