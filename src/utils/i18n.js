import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

import engLanguageOfferPage from '../utils/locales/offerPageSidebar/engLanguageOfferPage.json'
import arabicLanguageOfferPage from '../utils/locales/offerPageSidebar/arabicLangaugeOfferPage.json'

import engLanguageUserPage from '../utils/locales/userPageSidebar/engLanguageUserPage.json'
import arabicLanguageUserPage from '../utils/locales/userPageSidebar/arabicLanguageUserPage.json'

import offersNeedingReviewEnglish from '../utils/locales/offersNeedingReview/offersNeedingReviewEnglish.json'
import offersNeedingReviewArabic from '../utils/locales/offersNeedingReview/offersNeedingReviewArabic.json' // ✅ Only once

import staticDataEnglish from '../utils/locales/staticData/staticDataEnglish.json'
import staticDataArabic from '../utils/locales/staticData/staticDataArabic.json'

// Get saved language or fallback to 'en'
const langCode = localStorage.getItem('langCode') || 'en'

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    fallbackLng: langCode,
    lng: langCode,
    debug: false,
    interpolation: {
      escapeValue: false,
    },
    ns: ['offerPage', 'users', 'dashboard', 'static'],
    defaultNS: 'offerPage',
    fallbackNS: 'static',
    resources: {
      en: {
        offerPage: engLanguageOfferPage,
        users: engLanguageUserPage,
        dashboard: offersNeedingReviewEnglish,
        static: staticDataEnglish,
      },
      ar: {
        offerPage: arabicLanguageOfferPage,
        users: arabicLanguageUserPage,
        dashboard: offersNeedingReviewArabic,
        static: staticDataArabic,
      },
    },
  })

export default i18n
