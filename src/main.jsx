import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import { SidebarProvider } from './components/SidebarContext'
import AppWithTranslation from './components/AppWithTranslation'
import './utils/i18n'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <SidebarProvider>
        <AppWithTranslation />
      </SidebarProvider>
    </BrowserRouter>
  </React.StrictMode>
)
