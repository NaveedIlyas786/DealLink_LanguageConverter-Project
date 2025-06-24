import {
  ArrowLeft,
  BadgePercent,
  LayoutDashboard,
  LogOut,
  Settings,
  User,
} from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import AppIcon from '../assets/app_icon.png'
import { useSidebar } from './SidebarContext'
import { LuLogOut } from 'react-icons/lu'

const Sidebar = () => {
  const { openSidebar, setOpenSidebar } = useSidebar()
  const location = useLocation()

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 769) setOpenSidebar(false)
      else setOpenSidebar(true)
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Utility function to determine if the route is active
  const isActive = (path) => location.pathname === path

  return (
    <div
      className={`sidebar fixed top-0 left-0 z-50 flex flex-col ${
        openSidebar ? 'w-[266px]' : 'w-[80px]'
      } p-4 h-screen bg-white shadow-md transition-all duration-300`}
    >
      {/* Toggle Button */}
      <button
        className={`absolute top-[50px] -right-3 z-10 p-2 cursor-pointer border-2 border-orange-500 bg-[#f6f5f5] rounded-full transition-transform duration-300 ${
          openSidebar ? '' : 'rotate-180'
        }`}
        // onClick={handleOpenClose}
        onClick={() => setOpenSidebar(!openSidebar)}
      >
        <ArrowLeft className='w-5 h-5 text-[#FE7D13]' />
      </button>

      {/* Logo */}
      <Link
        to='/'
        className='flex items-center gap-2 ml-3 text-[#FE7D13] text-[22px] font-bold'
      >
        <img src={AppIcon} className='w-[38px]' alt='AppIcon' />
        {openSidebar && (
          <span>
            Deal<span className='text-green-600'>Link</span>
          </span>
        )}
      </Link>

      {/* Nav Items */}
      <ul className='flex flex-col space-y-2 mt-10'>
        <li>
          <Link
            to='/'
            className={`flex items-center gap-2 transition ${
              isActive('/')
                ? 'bg-[#17642f] text-[#ffffff] font-bold'
                : 'text-gray-700 hover:text-[#FE7D13]'
            }`}
          >
            <LayoutDashboard className='w-7 h-5' />
            {openSidebar && <span className='text-[16px]'>Dashboard</span>}
          </Link>
        </li>

        <li>
          <Link
            to='/offerPage'
            className={`flex items-center gap-2 transition ${
              isActive('/offerPage')
                ? 'bg-[#17642f] text-[#ffffff] font-bold'
                : 'text-gray-700 hover:text-[#FE7D13]'
            }`}
          >
            <BadgePercent className='w-7 h-5' />
            {openSidebar && <span className='text-[16px]'>Offers</span>}
          </Link>
        </li>

        <li>
          <Link
            to='/users'
            className={`flex items-center gap-2 transition ${
              isActive('/users')
                ? 'bg-[#17642f] text-[#ffffff] font-bold'
                : 'text-gray-700 hover:text-[#FE7D13]'
            }`}
          >
            <User className='w-7 h-5' />
            {openSidebar && <span className='text-[16px]'>Users</span>}
          </Link>
        </li>

        <li>
          <Link
            to='/settings'
            className={`flex items-center gap-2 transition ${
              isActive('/settings')
                ? 'bg-[#17642f] text-[#ffffff] font-bold'
                : 'text-gray-700 hover:text-[#FE7D13]'
            }`}
          >
            <Settings className='w-7 h-5' />
            {openSidebar && <span className='text-[16px]'>Settings</span>}
          </Link>
        </li>
        <li>
          <Link
            to='/converter'
            className={`flex items-center gap-2 transition ${
              isActive('/converter')
                ? 'bg-[#17642f] text-[#ffffff] font-bold'
                : 'text-gray-700 hover:text-[#FE7D13]'
            }`}
          >
            <Settings className='w-7 h-5' />
            {openSidebar && (
              <span className='text-[16px]'>Language Converter</span>
            )}
          </Link>
        </li>
      </ul>

      {/* Logout Button */}

      <div
        className={`absolute bottom-4 left-3 cursor-pointer ${
          openSidebar ? 'p-4' : 'p-2'
        } right-5 flex items-center gap-2  bg-red-100 text-red-600 rounded-[10px] hover:bg-red-200 transition`}
      >
        <LuLogOut size={openSidebar ? 30 : 30} />

        {openSidebar && <span className='font-bold'>Logout</span>}
      </div>
    </div>
  )
}

export default Sidebar
