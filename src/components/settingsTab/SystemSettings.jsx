import React, { useState } from 'react'
import UAEFlagImg from '../../assets/uaeFlag.png'
import UkFlagImg from '../../assets/ukFlag.png'
import LanguageDetector from '../LenguageDetector'
const SystemSettings = () => {
  const [enabled, setEnabled] = useState(false) // false = OFF, true = ON

  return (
    <div className='flex-1 lg:flex-[0.60] flex flex-col gap-[20px] bg-gray-50 rounded '>
      <div>
        <h1 className='text-xl font-semibold mb-1'>Show Notifications</h1>
        <p className='text-sm text-gray-600 mb-4'>
          Allow to receive push notifications for user activities and logs
          count.
        </p>

        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-gray-700'>OFF</span>

          {/* Toggle Switch */}
          <label className='switch'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </label>

          <span className='text-sm font-medium text-gray-700'>ON</span>
        </div>
      </div>
      <div>
        <h1 className='text-xl font-semibold mb-1'>2 Factor Authentication</h1>
        <p className='text-sm text-gray-600 mb-4'>
          Allow to receive push notifications for user activities and logs
          count.
        </p>

        <div className='flex items-center gap-4'>
          <span className='text-sm font-medium text-gray-700'>OFF</span>

          {/* Toggle Switch */}
          <label className='switch'>
            <input type='checkbox' />
            <span className='slider round'></span>
          </label>

          <span className='text-sm font-medium text-gray-700'>ON</span>
        </div>
      </div>
      <div>
        <h1 className='text-xl font-semibold mb-1'>Select Your Language</h1>
        <p className='text-sm text-gray-600 mb-4'>
          Allow to receive push notifications for user activities and logs
          count.
        </p>

        <LanguageDetector />
      </div>
    </div>
  )
}

export default SystemSettings
