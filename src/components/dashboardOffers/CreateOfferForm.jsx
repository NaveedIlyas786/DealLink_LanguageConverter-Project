import React from 'react'
import ProfileNotification from '../ProfileNotification'
import { useNavigate } from 'react-router-dom'

const CreateOfferForm = () => {
  const navigate = useNavigate()
  const routeToOfferPage = () => {
    navigate('/offerPage')
  }

  return (
    <div className='min-h-screen overflow-y-auto flex flex-col flex-1 py-[15px] bg-gray-50'>
      {/* Header */}
      <ProfileNotification />
      <button
        onClick={routeToOfferPage}
        className='text-orange-500 mb-4 cursor-pointer'
      >
        &larr; Create New Offer
      </button>

      <form className='bg-white rounded-2xl shadow-md p-6 space-y-6 w-[85%]'>
        <div className='space-y-4'>
          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Offer Title
            </label>
            <input
              type='text'
              placeholder='e.g. "50% Off on Facial"'
              className='w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
            />
          </div>

          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Category
              </label>
              <select className='w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'>
                <option>Select Category</option>
                <option>Beauty</option>
                <option>Health</option>
                <option>Fitness</option>
              </select>
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Short Description
              </label>
              <input
                type='text'
                placeholder='e.g. "Enjoy a premium facial at half price!"'
                className='w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
          </div>

          <div>
            <label className='block text-sm font-medium text-gray-700'>
              Full Description
            </label>
            <textarea
              rows='4'
              placeholder='Type description'
              className='w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
            ></textarea>
          </div>
        </div>

        <div className='space-y-4'>
          <h2 className='text-lg font-semibold text-gray-800'>
            Pricing & Redemption
          </h2>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Original Price
              </label>
              <input
                type='number'
                placeholder='e.g. Rs. 1800'
                className='w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>

            <div>
              <label className='block text-sm font-medium text-gray-700'>
                Discounted Price
              </label>
              <input
                type='number'
                placeholder='e.g. Rs. 899'
                className='w-full border border-gray-300 rounded-xl p-2 focus:outline-none focus:ring-2 focus:ring-orange-400'
              />
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row gap-4 pt-4'>
          <button
            type='button'
            className='flex-1 border border-gray-300 text-gray-700 py-2 rounded-xl hover:bg-gray-100'
          >
            Save as Draft
          </button>
          <button
            type='submit'
            className='flex-1 bg-orange-500 text-white py-2 rounded-xl hover:bg-orange-600'
          >
            Publish Now
          </button>
        </div>
      </form>
    </div>
  )
}

export default CreateOfferForm
