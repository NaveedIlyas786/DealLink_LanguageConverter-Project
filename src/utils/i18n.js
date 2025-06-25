import i18n from 'i18next'
import LenguageDetectetor from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'
import engLanguage from '../utils/locales/engLanguage.json'
import arabicLanguage from '../utils/locales/arabicLangauge.json'

i18n
  .use(LenguageDetectetor)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    returnObjects: true,
    fallbackLng: 'en',

    interpolation: {
      escapeValue: false,
    },
    resources: {
      en: {
        translation: engLanguage,
      },
      ar: {
        translation: arabicLanguage,
      },
    },
  })
