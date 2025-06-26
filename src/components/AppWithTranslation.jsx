import React, { useState, useEffect } from 'react'
import i18n from '../utils/i18n'
import App from '../App'

const AppWithTranslation = () => {
  const [ready, setReady] = useState(false)
  const langCode = localStorage.getItem('langCode') || 'en'
  useEffect(() => {
    if (langCode) {
      setReady(true)
    } else {
      console.log('Loading Language ....')
    }
  }, [])

  if (!ready) {
    return <div className='p-10 text-center text-gray-400'>Loading...</div>
  }

  return <App />
}

export default AppWithTranslation
