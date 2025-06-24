import React from 'react'
import { useTranslation } from 'react-i18next'
import LenguageDetector from './LenguageDetector'

const LanguageDisplay = () => {
  const { t } = useTranslation()
  const { line1, line2 } = t('description', {
    city: 'Vehari',
  })
  // console.log('line1: ', line1)
  return (
    <div>
      <h1 className='text-3xl font-bold text-gray-400 mb-4'>LanguageDisplay</h1>

      <LenguageDetector />
      <h2>{t('greeting')}</h2>
      <h4>{line1}</h4>
      <p>{line2}</p>
    </div>
  )
}

export default LanguageDisplay
