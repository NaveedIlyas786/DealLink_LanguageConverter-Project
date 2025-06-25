import React, { useEffect } from 'react'
import '../App.css'
import { useTranslation } from 'react-i18next'

const LanguageDetector = () => {
  const { i18n } = useTranslation()

  const languages = [
    { code: 'en', lang: 'English' },
    { code: 'ar', lang: 'Arabic' },
  ]

  const handleLanguageChange = (code) => {
    i18n.changeLanguage(code)
  }

  useEffect(() => {
    document.body.dir = ['ar'].includes(i18n.language) ? 'rtl' : 'ltr'
  }, [i18n.language])

  return (
    <div className='flex gap-4'>
      {languages.map((a) => (
        <button
          key={a.code}
          className={a.code === i18n.language ? 'selected' : ''}
          onClick={() => handleLanguageChange(a.code)}
        >
          {a.lang}
        </button>
      ))}
    </div>
  )
}

export default LanguageDetector
