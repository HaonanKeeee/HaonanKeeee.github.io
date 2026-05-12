import { translations } from "./data/content.js";

export function getValue(obj, path) {
  return path.split(".").reduce((current, key) => current && current[key], obj);
}

export function t(path, lang = "en") {
  return getValue(translations[lang] || translations.en, path) || getValue(translations.en, path) || "";
}

export function setLanguage(lang) {
  const dictionary = translations[lang] || translations.en;

  document.documentElement.lang = lang === "zh" ? "zh-CN" : lang;

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const value = getValue(dictionary, element.dataset.i18n);
    if (value) element.textContent = value;
  });

  document.querySelectorAll(".lang-btn").forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === lang);
  });

  localStorage.setItem("siteLanguage", lang);
}
