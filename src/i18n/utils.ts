/**
 * i18n utility functions
 * 国际化工具函数
 */

import { ui, defaultLang, type Language, type UIKey } from "./ui";

/**
 * Get translation for a given key
 * 获取翻译文本
 */
export function useTranslations(lang: Language) {
  return function t(key: UIKey): string {
    return ui[lang][key] || ui[defaultLang][key];
  };
}

/**
 * Get current language from localStorage or browser
 * 从 localStorage 或浏览器获取当前语言
 */
export function getCurrentLanguage(): Language {
  // Check localStorage first
  if (typeof localStorage !== "undefined") {
    const saved = localStorage.getItem("language") as Language | null;
    if (saved && (saved === "zh" || saved === "en")) {
      return saved;
    }
  }

  // Fallback to browser language
  if (typeof navigator !== "undefined") {
    const browserLang = navigator.language.toLowerCase();
    if (browserLang.startsWith("zh")) {
      return "zh";
    }
    if (browserLang.startsWith("en")) {
      return "en";
    }
  }

  return defaultLang;
}

/**
 * Set current language and save to localStorage
 * 设置当前语言并保存到 localStorage
 */
export function setLanguage(lang: Language): void {
  if (typeof localStorage !== "undefined") {
    localStorage.setItem("language", lang);
  }
}

/**
 * Toggle between languages
 * 切换语言
 */
export function toggleLanguage(): Language {
  const current = getCurrentLanguage();
  const newLang: Language = current === "zh" ? "en" : "zh";
  setLanguage(newLang);
  return newLang;
}
