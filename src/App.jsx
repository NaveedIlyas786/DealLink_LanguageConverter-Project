import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import OfferPage from './pages/OfferPage'
import CreateNewOffer from '../src/components/dashboardOffers/CreateOfferForm'
import Users from './pages/Users'
import Settings from './pages/Settings'
import { SidebarProvider } from './components/SidebarContext'

const App = () => {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <div className='flex h-screen '>
          <Sidebar />
          {/* <div className='flex-1 overflow-hidden'> */}
          <div className='flex-1 overflow-y-auto bg-gray-50 px-[15px]'>
            <Routes>
              <Route exact path='/dashboard' element={<Dashboard />} />
              <Route path='/offerPage' element={<OfferPage />} />
              <Route
                path='/offerPage/createnewOffer'
                element={<CreateNewOffer />}
              />
              <Route exact path='/users' element={<Users />} />
              <Route exact path='/settings' element={<Settings />} />
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </SidebarProvider>
  )
}

export default App
