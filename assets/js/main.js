import { setLanguage } from "./i18n.js?v=20260604-21";
import { initNavigation } from "./navigation.js?v=20260604-21";
import { initProjectViewToggle } from "./projectView.js?v=20260604-21";
import { initReveal } from "./reveal.js?v=20260604-21";
import { renderSite } from "./render.js?v=20260604-21";
import { initSidebarToggle } from "./sidebar.js?v=20260604-21";

renderSite();

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

initNavigation();
initProjectViewToggle();
initSidebarToggle();
initReveal();
setLanguage(localStorage.getItem("siteLanguage") || "en");
