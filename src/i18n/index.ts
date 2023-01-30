import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_PT_BR } from "./translations/pt_BR";
import { TRANSLATIONS_EN_US } from "./translations/en_US";

const resources = {
  en_US: {
    translation: TRANSLATIONS_EN_US,
  },
  pt_BR: {
    translation: TRANSLATIONS_PT_BR,
  },
};

i18n
  .use(initReactI18next)
  .use(LanguageDetector)
  .init({
    resources,
    fallbackLng: "pt_BR",
  });
