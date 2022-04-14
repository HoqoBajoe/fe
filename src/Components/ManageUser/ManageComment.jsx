import React from 'react'
import UserProfile from '../../Images/man.png'

function ManageComment() {
  return (
    <div className='w-full mx-auto mb-20'>
        <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">Manage Review</h1>
        <div className='border border-gray-light mb-8'></div>

        <div className='bg-white rounded-xl drop-shadow-lg p-3 border border-gray-light mb-5 w-full mx-auto'>
            <div className='flex items-start mb-8'>
                <img src={UserProfile} className='w-14 mr-4 '/>
                <div className='mb-2'>
                    <p className="text-3xl sm:text-lg font-semibold text-black">Muhammad Ikram Kaer Sinapoy</p>
                    <p className='sm:text-sm font-medium text-black mb-3'>is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>

                    <button className='p-2 bg-green text-white rounded-lg font-semibold mr-5'>Accept</button>
                    <button className='p-2 bg-red text-white rounded-lg font-semibold'>Reject</button>
                </div>
            </div>

            <div className='flex items-start mb-8'>
                <img src={UserProfile} className='w-14 mr-4 '/>
                <div className='mb-2'>
                    <p className="text-3xl sm:text-lg font-semibold text-black">Muhammad Ikram Kaer Sinapoy</p>
                    <p className='sm:text-sm font-medium text-black mb-3'> is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text </p>

                    <button className='p-2 bg-green text-white rounded-lg font-semibold mr-5'>Accept</button>
                    <button className='p-2 bg-red text-white rounded-lg font-semibold'>Reject</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ManageComment