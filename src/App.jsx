import { Route, Routes, useLocation } from 'react-router-dom'
import SignUp from './pages/loginSignUp/SignUp'
import Login from './pages/loginSignUp/Login'
import ForgotPassword from './pages/loginSignUp/ForgotPassword'
import NewPasswordCreationPage from './pages/loginSignUp/NewPasswordCreationPage'
import EmailVerifcationCodePage from './pages/loginSignUp/EmailVerifcationCodePage'
import Users from './pages/adminSection/Users'
import Settings from './pages/allUserRolesAccess/Settings'
import NotFoundPage from './components/NotFoundPage'
import Sidebar from './components/Sidebar'
import './App.css'
import AdminDashboard from './pages/adminSection/AdminDashboard'
import UserDashboard from './pages/userSection/UserDashboard'
import AdminOfferPage from './pages/adminSection/AdminOfferPage'
import UserOfferPage from './pages/userSection/UserOfferPage'
import AdminCatgeoryPage from './pages/adminSection/AdminCatgeoryPage'
import PaymentsPage from './pages/allUserRolesAccess/PaymentsPage'
import CoupensPage from './pages/allUserRolesAccess/CoupensPage'
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
          <Route path='/admin/dashboard' element={<AdminDashboard />} />
          <Route path='/admin/offerPage' element={<AdminOfferPage />} />
          <Route path='/admin/adminCategory' element={<AdminCatgeoryPage />} />
          <Route path='/admin/users' element={<Users />} />
          <Route path='/admin/settings' element={<Settings />} />
          <Route path='/admin/payments' element={<PaymentsPage />} />
          <Route path='/admin/coupens' element={<CoupensPage />} />

          {/* User routes */}
          <Route path='/user/dashboard' element={<UserDashboard />} />
          <Route path='/user/userOfferPage' element={<UserOfferPage />} />
          <Route path='/user/settings' element={<Settings />} />
          <Route path='/user/payments' element={<PaymentsPage />} />
          <Route path='/user/coupens' element={<CoupensPage />} />

          {/* Catch-all */}
          <Route path='*' element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  )
}
