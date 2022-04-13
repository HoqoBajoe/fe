import React from 'react'
import { FiSearch } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import UserProfile from '../../Images/man.png'

function ListCustomers() {
  return (
    <div className='w-2/3 mx-auto'>
        <div className='flex justify-between  mb-8'>
            <h1 className="text-3xl sm:text-4xl font-bold text-black">Customers</h1>
            <div className='flex'>
                <input className='border-y border-l border-gray-light rounded-l-lg p-2'/>
                <div className='border-y border-r border-gray-light rounded-r-lg p-2 w-max inline-block align-middle '>
                    <FiSearch className='mt-1'/>
                </div>
            </div>
        </div>
        
        <div className='border border-gray-light mb-8'></div>
        <div className='flex items-center justify-between gap-36 bg-white rounded-xl drop-shadow-lg hover:drop-shadow-2xl p-3 border border-gray-light w-max mx-auto mb-8'>
            <div className='flex items-center'>
                <img src={UserProfile} className='w-14 mr-4 '/>
                <div className='w-80'>
                    <p className="text-3xl sm:text-lg font-semibold text-black">Muhammad Ikram Kaer Sinapoy</p>
                    <p className='sm:text-sm font-medium text-black italic'>ikramsinapoy@gmail.com</p>
                </div>
            </div>
            
            
            <p className='sm:text-lg font-medium text-black w-28'>09/02/2022</p>
            <div className='bg-red h-max p-2 rounded-lg'>
                <FaTrashAlt className='fill-white w-5 h-5 hover:cursor-pointer'/>
            </div>
        </div>
        
        <div className='flex items-center justify-between gap-36 bg-white rounded-xl drop-shadow-lg hover:drop-shadow-2xl p-3 border border-gray-light w-max mx-auto mb-8'>
            <div className='flex items-center'>
                <img src={UserProfile} className='w-14 mr-4 '/>
                <div className='w-80'>
                    <p className="text-3xl sm:text-lg font-semibold text-black">Muhammad Ikram Kaer Sinapoy</p>
                    <p className='sm:text-sm font-medium text-black italic'>ikramsinapoy@gmail.com</p>
                </div>
            </div>
            
            
            <p className='sm:text-lg font-medium text-black w-28'>09/02/2022</p>
            <div className='bg-red h-max p-2 rounded-lg'>
                <FaTrashAlt className='fill-white w-5 h-5 hover:cursor-pointer'/>
            </div>
        </div>

        <div className='flex items-center justify-between gap-36 bg-white rounded-xl drop-shadow-lg hover:drop-shadow-2xl p-3 border border-gray-light w-max mx-auto mb-8'>
            <div className='flex items-center'>
                <img src={UserProfile} className='w-14 mr-4 '/>
                <div className='w-80'>
                    <p className="text-3xl sm:text-lg font-semibold text-black">Muhammad Ikram Kaer Sinapoy</p>
                    <p className='sm:text-sm font-medium text-black italic'>ikramsinapoy@gmail.com</p>
                </div>
            </div>
            
            
            <p className='sm:text-lg font-medium text-black w-28'>09/02/2022</p>
            <div className='bg-red h-max p-2 rounded-lg'>
                <FaTrashAlt className='fill-white w-5 h-5 hover:cursor-pointer'/>
            </div>
        </div>
    </div>

  )
}

export default ListCustomers