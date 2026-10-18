import { translations } from "./data/content.js?v=20261018-4";

function normalizeLanguage(language) {
  const code = String(language || "en").toLowerCase().split("-")[0];
  return Object.prototype.hasOwnProperty.call(translations, code) ? code : "en";
}

export function getValue(obj, path) {
  return path.split(".").reduce((current, key) => current && current[key], obj);
}

export function t(path, lang = "en") {
  return getValue(translations[normalizeLanguage(lang)], path) || getValue(translations.en, path) || "";
}

export function setLanguage(lang) {
  const language = normalizeLanguage(lang);
  document.documentElement.lang = language === "zh" ? "zh-CN" : language;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n, language);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = t(element.dataset.i18nAlt, language);
    if (value) element.setAttribute("alt", value);
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    const value = t(element.dataset.i18nAriaLabel, language);
    if (value) element.setAttribute("aria-label", value);
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    const active = button.dataset.lang === language;
    button.classList.toggle("is-active", active);
    button.setAttribute("aria-pressed", String(active));
  });

  localStorage.setItem("siteLanguage", language);
  document.dispatchEvent(new CustomEvent("site:languagechange", { detail: { language } }));
}
