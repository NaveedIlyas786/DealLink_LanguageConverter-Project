import React, { useState } from 'react'
import UAEFlagImg from '../../assets/uaeFlag.png'
import UkFlagImg from '../../assets/ukFlag.png'
import { Input } from '../ui/input'
const ChangePassword = () => {
  const [enabled, setEnabled] = useState(false) // false = OFF, true = ON

  return (
    <div className='flex-1 lg:flex-[0.60] flex flex-col gap-[20px]  bg-gray-50 rounded '>
      <div>
        <h1 className='text-xl font-semibold mb-1'>Change Password</h1>
        <div className='mb-[20px]'>
          <label
            className='text-[15px] font-bold my-[14px]'
            htmlFor='businessName'
          >
            Old Password
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='text'
            name='business'
            id='businessName'
          />
        </div>
        <div className='mb-[20px]'>
          <label
            className='text-[15px] font-bold my-[14px]'
            htmlFor='businessName'
          >
            New Password
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='text'
            name='business'
            id='businessName'
          />
        </div>
        <div className='mb-[20px]'>
          <label
            className='text-[15px] font-bold my-[14px]'
            htmlFor='businessName'
          >
            Confirm Password
          </label>
          <Input
            className='rounded-full bg-white py-[25px] px-[20px]'
            type='text'
            name='business'
            id='businessName'
          />
        </div>
        <button
          className='flex-1 lg:flex-[0.60] mt-[20px] w-full text-white cursor-pointer bg-[#FE7D13] rounded-full py-[20px] px-[20px]'
          type='submit'
        >
          Save Changes
        </button>
      </div>
    </div>
  )
}

export default ChangePassword
