import { Bell, Settings, UserCircle } from 'lucide-react'
import React from 'react'

const ProfileNotification = () => {
  return (
    <div className='flex justify-between shadow-md bg-white px-[20px] py-[15px]  rounded-xl items-center mb-6'>
      <div>
        <h1 className='text-lg font-semibold'>
          Hey! <span className='font-bold'>Arlene McCoy</span>
        </h1>
        <p className='text-gray-500 text-sm'>
          Here’s an overview of platform activity.
        </p>
      </div>
      <div className='flex items-center space-x-4'>
        <Bell className='text-gray-500' />
        <UserCircle className='text-green-600 w-8 h-8' />
      </div>
    </div>
  )
}

export default ProfileNotification
