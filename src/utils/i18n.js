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
    ns: [
      'admin/offerPage',
      'admin/users',
      'admin/dashboard',
      'static',
      'user/offerPage',
      'user/users',
      'user/dashboard',
      'static',
    ],
    defaultNS: 'admin/offerPage',
    fallbackNS: 'static',
    resources: {
      en: {
        'admin/offerPage': engLanguageOfferPage,
        'admin/users': engLanguageUserPage,
        'admin/dashboard': offersNeedingReviewEnglish,

        'user/offerPage': engLanguageOfferPage,
        'user/users': engLanguageUserPage,
        'user/dashboard': offersNeedingReviewEnglish,

        static: staticDataEnglish,
      },
      ar: {
        'admin/offerPage': arabicLanguageOfferPage,
        'admin/users': arabicLanguageUserPage,
        'admin/dashboard': offersNeedingReviewArabic,

        'user/offerPage': arabicLanguageOfferPage,
        'user/users': arabicLanguageUserPage,
        'user/dashboard': offersNeedingReviewArabic,

        static: staticDataArabic,
      },
    },
  })

export default i18n
