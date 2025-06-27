import { Route, Routes, useLocation } from 'react-router-dom'
import SignUp from './pages/loginSignUp/SignUp'
import Login from './pages/loginSignUp/Login'
import ForgotPassword from './pages/loginSignUp/ForgotPassword'
import NewPasswordCreationPage from './pages/loginSignUp/NewPasswordCreationPage'
import EmailVerifcationCodePage from './pages/loginSignUp/EmailVerifcationCodePage'
import Dashboard from './pages/Dashboard'
import OfferPage from './pages/OfferPage'
import Users from './pages/Users'
import Settings from './pages/Settings'
import NotFoundPage from './components/NotFoundPage'
import Sidebar from './components/Sidebar'
import './App.css'
export const App = () => {
  const location = useLocation()
  const role = location.pathname.split('/')[1] // 'admin' or 'user'

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
      {isSidebarVisible && (role === 'admin' || role === 'user') && (
        <Sidebar role={role} />
      )}
      <div className='flex-1 overflow-y-auto bg-gray-50 px-[15px]'>
        <Routes>
          {/* Public routes */}
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

          {/* Admin routes */}
          <Route path='/admin/dashboard' element={<Dashboard />} />
          <Route path='/admin/offerPage' element={<OfferPage />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/settings' element={<Settings />} />

          {/* User routes */}
          <Route path='/user/dashboard' element={<Dashboard />} />
          <Route path='/user/offerPage' element={<OfferPage />} />
          <Route path='/user/settings' element={<Settings />} />

          {/* Catch-all */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}
