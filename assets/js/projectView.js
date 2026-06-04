export function initProjectViewToggle() {
  const projectList = document.querySelector("[data-projects-view]");
  const buttons = document.querySelectorAll("[data-project-view]");

  if (!projectList || buttons.length === 0) return;

  function setView(view) {
    const nextView = view === "grid" ? "grid" : "timeline";

    projectList.classList.toggle("is-grid", nextView === "grid");
    projectList.classList.toggle("is-timeline", nextView === "timeline");
    projectList.dataset.view = nextView;

    buttons.forEach((button) => {
      const active = button.dataset.projectView === nextView;
      button.classList.toggle("is-active", active);
      button.setAttribute("aria-pressed", String(active));
    });

    localStorage.setItem("projectView", nextView);
  }

  buttons.forEach((button) => {
    button.addEventListener("click", () => setView(button.dataset.projectView));
  });

  setView(localStorage.getItem("projectView") || "timeline");
}
