import React from 'react'
import { RiSendPlaneFill } from "react-icons/ri";

function News() {
  return (
    <div className='bg-home rounded-lg h-96 bg-cover bg-no-repeat bg-left'>
        <div className='mx-auto w-fit h-fit my-auto'>
            <h1 className="text-3xl sm:text-6xl font-bold text-black pt-20 text-blue-text drop-shadow-2xl">Subscribe our newsletter</h1>
            <p className='text-blue-text drop-shadow-2xl text-xl pt-2 text-center'>Recieve latest news, update, and many other things everyweek.</p>
        </div>

        <div className='flex mx-auto w-9/12 pt-10 drop-shadow-2xl'>
            <input className='border-y border-l border-gray-light rounded-l-lg p-4 caret-btn w-full' type="text"/>
            <button className='border-y border-r border-gray-light rounded-r-lg p-2 w-10 inline-block align-middle bg-white '>
                <RiSendPlaneFill className=' stroke-[#868e96]'/>
            </button>
        </div>
    </div>
  )
}

export default News