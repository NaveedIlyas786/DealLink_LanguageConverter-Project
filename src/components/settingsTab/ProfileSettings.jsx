import React, { useEffect } from 'react'
import { Input } from '@/components/ui/input'
import LanguageDetector from '../LenguageDetector'
import { useTranslation } from 'react-i18next'
import { useSidebar } from '../SidebarContext'
const ProfileSettings = () => {
  // const { i18n } = useTranslation()
  // console.log('Current language:', i18n.language)

  return (
    <div className='flex-1 lg:flex-[0.60] flex-col gap-[20px]'>
      <div>
        <label
          className='text-[15px] font-bold my-[14px]'
          htmlFor='businessName'
        >
          Business Name
        </label>
        <Input
          className='rounded-full bg-white py-[25px] px-[20px]'
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
            className='rounded-full bg-white  py-[25px] px-[20px]'
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
            className='rounded-full bg-white py-[25px] px-[20px]'
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
            className='rounded-full bg-white py-[25px] px-[20px]'
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
              className='w-full px-3 bg-white outline-none bg-transparent'
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
            className='rounded-full bg-white py-[25px] px-[20px]'
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
            className='rounded-full bg-white py-[25px] px-[20px]'
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
      <LanguageDetector />
    </div>
  )
}

export default ProfileSettings
