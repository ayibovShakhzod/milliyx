import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
  en: {
    translation: {
      titleTop: 'MILLIXY - Digital creative agency'
    }
  },
  ru: {
    translation: {
      titleTop: 'MILLIXY - Цифровое креативное агентство'
    }
  },
  uz: {
    translation: {
      titleTop: 'MILLIXY - Raqamli ijodiy agentlik'
    }
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    lng: 'en',
    fallbackLng: 'ru',
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;
