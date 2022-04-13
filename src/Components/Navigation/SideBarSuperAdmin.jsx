import React from 'react'
import UserProfile from '../../Images/man.png'

function SideBarSuperAdmin() {
  return (
    <div className='w-72 h-screen bg-gray p-2'>
        <div className='pt-4'>
            <img src={UserProfile} className='w-14 h-14 mx-auto mb-4'/>
            <div className='w-max mx-auto mb-2'>
                <p className="text-3xl sm:text-lg font-semibold text-white">Muhammad Ikram Kaer Sinapoy</p>
                <p className='sm:text-sm font-medium text-black italic text-white w-max mx-auto'>Super Admin</p>
            </div>
            
            <div className='border border-gray-dark mb-4'></div>
            <ul className='text-white ml-5 list-none'>
                <li className='hover:font-semibold hover:cursor-pointer'>Home</li>
                <li className='hover:font-semibold hover:cursor-pointer'>Customers</li>
                <li className='hover:font-semibold hover:cursor-pointer'>Transactions</li>
            </ul>            
        </div>
    </div>
  )
}

export default SideBarSuperAdmin