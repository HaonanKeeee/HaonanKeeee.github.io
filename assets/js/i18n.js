import { translations } from "./data/content.js?v=20261015-3";

export function getValue(obj, path) {
  return path.split(".").reduce((current, key) => current && current[key], obj);
}

export function t(path, lang = "en") {
  return getValue(translations[lang] || translations.en, path) || getValue(translations.en, path) || "";
}

export function setLanguage(lang) {
  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = t(element.dataset.i18n, lang);
    if (value) element.textContent = value;
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    const value = t(element.dataset.i18nAlt, lang);
    if (value) element.setAttribute("alt", value);
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  localStorage.setItem("siteLanguage", lang);
}
