import i18n from 'i18next'
import LenguageDetectetor from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import Backend from 'i18next-http-backend'

i18n
  .use(LenguageDetectetor)
  .use(initReactI18next)
  .use(Backend)
  .init({
    debug: true,
    returnObjects: true,
    fallbackLng: 'en',
    resources: {
      en: {
        translation: {
          name: 'Name',
          category: 'Category',
          offerName: 'offer Name',
          merchant: 'Merchant',
          status: 'Status',
          submittedOn: 'Submitted On',
          Actions: 'Actions',
          'No Actions': 'No Actions',
          statuses: {
            Approved: 'Approved',
            Pending: 'Pending',
            Rejected: 'Rejected',
          },
          roles: {
            Admin: 'Admin',
            Editor: 'Editor',
            Viewer: 'Viewer',
          },
          actions: {
            edit: 'Edit',
            delete: 'Delete',
          },
        },
      },
      fr: {
        translation: {
          name: 'Nom',
          category: 'Catégorie',
          offerName: "Nom de l'offre",
          merchant: 'Marchand',
          status: 'Statut',
          submittedOn: 'Soumis le',
          Actions: 'Actions',
          'No Actions': 'Aucune action',
          statuses: {
            Approved: 'Approuvé',
            Pending: 'En attente',
            Rejected: 'Rejeté',
          },
          roles: {
            Admin: 'Administrateur',
            Editor: 'Éditeur',
            Viewer: 'Spectateur',
          },
          actions: {
            edit: 'Modifier',
            delete: 'Supprimer',
          },
        },
      },
      ar: {
        translation: {
          name: 'الاسم',

          offerName: 'اسم العرض',
          merchant: 'التاجر',
          category: 'الفئة',
          submittedOn: 'تاريخ الإرسال',
          status: 'الحالة',

          Actions: 'الإجراءات',
          'No Actions': 'لا توجد إجراءات',
          statuses: {
            Approved: 'تمت الموافقة',
            Pending: 'قيد الانتظار',
            Rejected: 'مرفوض',
          },
          roles: {
            Admin: 'مسؤول',
            Editor: 'محرر',
            Viewer: 'مشاهد',
          },
          actions: {
            edit: 'تعديل',
            delete: 'حذف',
          },
        },
      },
    },
  })
