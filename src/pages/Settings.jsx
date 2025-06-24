import React from 'react'
import { useTranslation } from 'react-i18next'
import LenguageDetector from '../components/LenguageDetector'
import { useSidebar } from '@/components/SidebarContext'
import ProfileNotification from '@/components/ProfileNotification'
import { Input } from '@/components/ui/input'

const Settings = () => {
  const { t } = useTranslation()
  const { openSidebar } = useSidebar()
  const { line1, line2 } = t('description', {
    city: 'Vehari',
  })
  // console.log('line1: ', line1)
  const handleaActiveTab = () => {}

  return (
    <div
      className={`${
        openSidebar ? 'ml-[266px]' : 'ml-[80px]'
      } min-h-screen flex flex-col flex-1 p-3 bg-gray-50`}
    >
      {/* Header */}
      <ProfileNotification />
      <h1 className='text-3xl ml-[40px] font-bold text-black mb-4'>Settings</h1>

      {/* <LenguageDetector />
      <h2>{t('greeting')}</h2>
      <h4>{line1}</h4>
      <p>{line2}</p> */}

      <div className='flex gap-[12px] ml-[40px] flex-wrap'>
        <button
          onClick={handleaActiveTab}
          className='bg-[#17642F] py-2 px-4 sm:py-[15px] sm:px-[24px] text-sm sm:text-base font-semibold cursor-pointer hover:bg-[#76d174] rounded-full text-white'
        >
          Profile Settings
        </button>
        <button
          onClick={handleaActiveTab}
          className='bg-[#17642F] py-2 px-4 sm:py-[15px] sm:px-[24px] text-sm sm:text-base font-semibold cursor-pointer hover:bg-[#76d174] rounded-full text-white'
        >
          System Settings
        </button>
        <button
          onClick={handleaActiveTab}
          className='bg-[#17642F] py-2 px-4 sm:py-[15px] sm:px-[24px] text-sm sm:text-base font-semibold cursor-pointer hover:bg-[#76d174] rounded-full text-white'
        >
          Change Password
        </button>
      </div>

      <div className='flex mt-[32px] ml-0 lg:ml-[40px]'>
        <div className='flex-1 lg:flex-[0.60] flex-col gap-[20px]'>
          <div>
            <label
              className='text-[15px] font-bold my-[14px]'
              htmlFor='businessName'
            >
              Business Name
            </label>
            <Input
              className='rounded-full py-[25px] px-[20px]'
              type='text'
              name='business'
              id='businessName'
            />
          </div>
          <div className='flex gap-[14px] my-[20px]'>
            <div className='w-full'>
              <label className='text-[15px] font-bold' htmlFor='firstName'>
                Owner's First Name
              </label>
              <Input
                className='rounded-full py-[25px] px-[20px]'
                type='text'
                name='firstName'
                id='firstName'
              />
            </div>
            <div className='w-full'>
              <label className='text-[15px] font-bold' htmlFor='lastName'>
                Owner's Last Name
              </label>
              <Input
                className='rounded-full py-[25px] px-[20px]'
                type='text'
                name='lastName'
                id='lastName'
              />
            </div>
          </div>
          <div className='flex  gap-[14px] my-[20px]'>
            <div className='w-full'>
              <label className='text-[15px] font-bold' htmlFor='email'>
                Email Address
              </label>
              <Input
                className='rounded-full py-[25px] px-[20px]'
                type='email'
                name='email'
                id='email'
              />
            </div>
            <div className='w-full'>
              <label className='text-[15px] font-bold' htmlFor='phoneNumber'>
                Phone Number
              </label>
              <div className='flex items-center rounded-full border border-input bg-background px-4 py-[10px]'>
                <span className='text-gray-500 pr-3 border-r border-gray-300'>
                  +92
                </span>
                <input
                  type='tel'
                  name='phoneNumber'
                  id='phoneNumber'
                  placeholder='3001234567'
                  className='w-full px-3 outline-none bg-transparent'
                />
              </div>
            </div>
          </div>
          <div className='flex gap-[14px] my-[20px]'>
            <div className='w-full'>
              <label className='text-[15px] font-bold' htmlFor='Pass'>
                Password
              </label>
              <Input
                className='rounded-full py-[25px] px-[20px]'
                type='password'
                name='Pass'
                id='Pass'
              />
            </div>
            <div className='w-full'>
              <label className='text-[15px] font-bold' htmlFor='confirmPass'>
                Confirm Password
              </label>
              <Input
                className='rounded-full py-[25px] px-[20px]'
                type='password'
                name='confirmPass'
                id='confirmPass'
              />
            </div>
          </div>
          <button
            className='flex-1 lg:flex-[0.60] mt-[20px] w-full text-white cursor-pointer bg-[#FE7D13] rounded-full py-[20px] px-[20px]'
            type='submit'
          >
            Save Changes
          </button>
        </div>
      </div>
    </div>
  )
}

export default Settings
