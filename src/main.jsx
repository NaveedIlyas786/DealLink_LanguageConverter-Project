import React from 'react'
import ReactDOM from 'react-dom/client'
import './utils/i18n'
import './index.css'
import AppWithTranslation from './components/AppWithTranslation'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <React.StrictMode>
    <AppWithTranslation />
  </React.StrictMode>
)
