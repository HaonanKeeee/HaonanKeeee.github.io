import { setLanguage } from "./i18n.js?v=20261018-4";
import { initNavigation } from "./navigation.js?v=20261018-4";
import { initProjectViewToggle } from "./projectView.js?v=20261018-4";
import { initReveal } from "./reveal.js?v=20261018-4";
import { renderSite } from "./render.js?v=20261018-4";
import { initSectionMood } from "./sectionMood.js?v=20261018-4";
import { initSidebarToggle } from "./sidebar.js?v=20261018-4";

renderSite();

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

initNavigation();
initProjectViewToggle();
initSidebarToggle();
initReveal();
initSectionMood();
setLanguage(localStorage.getItem("siteLanguage") || "en");
