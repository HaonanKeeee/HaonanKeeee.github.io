import { setLanguage } from "./i18n.js";
import { initNavigation } from "./navigation.js";
import { initReveal } from "./reveal.js";
import { renderSite } from "./render.js";

renderSite();

document.querySelectorAll(".lang-btn").forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.lang));
});

initNavigation();
initReveal();
setLanguage(localStorage.getItem("siteLanguage") || "en");
