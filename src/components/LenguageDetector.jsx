import React, { useEffect, useState } from 'react'
import '../App.css'
import { useTranslation } from 'react-i18next'
import UAEFlagImg from '../assets/uaeFlag.png'
import UkFlagImg from '../assets/ukFlag.png'

const LanguageDetector = () => {
  const { i18n } = useTranslation()
  console.log('Current language:', i18n.language)

  const [langCode, setLangCode] = useState('')

  const currentlang = localStorage.getItem('langCode') || i18n.language
  console.log('currentlang:', currentlang)

  const handleLanguageChange = (code) => {
    setLangCode(code || currentlang)
    i18n.changeLanguage(code)
  }

  useEffect(() => {
    localStorage.setItem('langCode', i18n.language)
  }, [handleLanguageChange])

  useEffect(() => {
    document.body.dir = i18n.language === 'ar' ? 'rtl' : 'ltr'
  }, [i18n.language])

  return (
    <div className={`overflow-y-auto flex flex-col flex-1 bg-gray-50`}>
      <div className='flex gap-[50px]'>
        <div className='flex items-center gap-4'>
          <input
            className={`w-5 h-5 cursor-pointer ${
              langCode === i18n.language
            } && accent-green-600 `}
            type='radio'
            id='english'
            name='fav_language'
            checked={i18n.language === 'en'}
            value='english'
            onClick={() => handleLanguageChange('en')}
          />
           
          <img className='w-[24px] h-[24px]' src={UkFlagImg} alt='Flag Img' />
          <label for='english'>English</label>
        </div>
        <div className='flex items-center gap-4 '>
          <input
            className={`w-5 h-5 cursor-pointer ${
              langCode === i18n.language ? 'accent-green-600' : ''
            } `}
            type='radio'
            checked={i18n.language === 'ar'}
            id='arabic'
            name='fav_language'
            value='arabic'
            onClick={() => handleLanguageChange('ar')}
          />

          <img
            className='w-[28px] h-[28px]'
            src={UAEFlagImg}
            alt='Flag Img'
            id='arabic'
          />
          <label for='html'>Arabic</label>
        </div>
      </div>
    </div>
  )
}

export default LanguageDetector
