import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import OfferPage from './pages/OfferPage'
import Users from './pages/Users'
import Settings from './pages/Settings'
import { SidebarProvider } from './components/SidebarContext'
import LanguageConverter from './components/languageConverter'

const App = () => {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <div className='flex h-screen overflow-hidden '>
          <Sidebar />
          <div className='flex-1 overflow-hidden'>
            <Routes>
              <Route exact path='/' element={<Dashboard />} />
              <Route exact path='/offerPage' element={<OfferPage />} />
              <Route exact path='/users' element={<Users />} />
              <Route exact path='/settings' element={<Settings />} />
              <Route exact path='/converter' element={<LanguageConverter />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </SidebarProvider>
  )
}

export default App
