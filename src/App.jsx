import React from 'react'
import './App.css'
import Sidebar from './components/Sidebar'
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import OfferPage from './pages/OfferPage'
import CreateNewOffer from './components/dashboardOffers/CreateOfferForm'
import Users from './pages/Users'
import Settings from './pages/Settings'
import { SidebarProvider } from './components/SidebarContext'
import Login from './pages/loginSignUp/Login'
import SignUp from './pages/loginSignUp/SignUp'
import ForgotPassword from './pages/loginSignUp/ForgotPassword'
import NewPasswordCreationPage from './pages/loginSignUp/newPasswordCreationPage'
import EmailVerifcationCodePage from './pages/loginSignUp/emailVerifcationCodePage'

const AppWrapper = () => {
  const location = useLocation()

  // Define routes where Sidebar should not be shown
  const noSidebarRoutes = [
    '/',
    '/register',
    '/forgotPassword',
    '/newPasswordCreationPage',
    '/emailVerifcationCodePage',
  ]

  const isSidebarVisible = !noSidebarRoutes.includes(location.pathname)

  return (
    <div className='flex h-screen'>
      {isSidebarVisible && <Sidebar />}
      <div className='flex-1 overflow-y-auto bg-gray-50 px-[15px]'>
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/register' element={<SignUp />} />
          <Route path='/forgotPassword' element={<ForgotPassword />} />
          <Route
            path='/newPasswordCreationPage'
            element={<NewPasswordCreationPage />}
          />
          <Route
            path='/emailVerifcationCodePage'
            element={<EmailVerifcationCodePage />}
          />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/offerPage' element={<OfferPage />} />
          <Route path='/users' element={<Users />} />
          <Route path='/settings' element={<Settings />} />
        </Routes>
      </div>
    </div>
  )
}

const App = () => {
  return (
    <SidebarProvider>
      <BrowserRouter>
        <AppWrapper />
      </BrowserRouter>
    </SidebarProvider>
  )
}

export default App
