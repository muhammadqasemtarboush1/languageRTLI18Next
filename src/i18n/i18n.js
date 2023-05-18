import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import HttpApi from "i18next-http-backend";
import LanguageDetector from "i18next-browser-languagedetector";

import format from "./i18n-format";
import { defaultLanguage, supportedLanguages } from "./i18";

i18next
  .use(initReactI18next)
  .use(HttpApi)
  .use(LanguageDetector)
  .init({
    supportedLngs: supportedLanguages.map((lang) => lang.code),

    nonExplicitSupportedLngs: true,

    fallbackLng: defaultLanguage,

    // preload: ["en", "ar"],

    // backend: {
    //   loadPath: "/locales/{{lng}}/{{ns}}.json",
    // },

    interpolation: {
      escapeValue: false,
      format,
    },

    debug: process.env.NODE_ENV === "development",
  });

export default i18next;

export function languageCodeOnly(fullyQualifiedCode) {
  return fullyQualifiedCode.split("-")[0];
}
