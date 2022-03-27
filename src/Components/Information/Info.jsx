import React from 'react'
import { GiTakeMyMoney } from "react-icons/gi";
import { FaGlobe } from "react-icons/fa";
import { IoMdChatbubbles } from "react-icons/io";

function Info() {
  return (
    <div>
        <h1 className="text-4xl font-bold text-black py-6 mb-9">Kenapa Memilih Kami ?</h1>
        <div className='max-w-fit mx-auto flex gap-28'>
            <div className='w-72 grid justify-items-center'>
                <div className='bg-gray w-16 h-16 flex justify-center items-center rounded-full'>
                    <FaGlobe color='white' className='w-8 h-8'/>
                </div>
                <h2 className="text-2xl font-bold text-black p-2">Destinasi menarik</h2>
                <p className='text-lg font-medium text-black w-60 pl-4'>
                    Hoqo Bajoe menawarkan berbagai destinasi wisata menarik di Nusa Tenggara Timur yang wajib untuk dikunjungi.
                </p>
            </div>
            
            <div className='w-72 grid justify-items-center'>
                <div className='bg-gray w-16 h-16 flex justify-center items-center rounded-full'>
                    <GiTakeMyMoney color='white' className='w-8 h-8 '/>
                </div>
                <h2 className="text-2xl font-bold text-black p-2">Harga Terjangkau</h2>
                <p className='text-lg font-medium text-black w-60 pl-4'>
                    Hoqo Bajoe memberikan pelayanan prima dengan harga murah yang proporsional dan rasional.
                </p>
            </div>

            <div className='w-72 grid justify-items-center'>
                <div className='bg-gray w-16 h-16 flex justify-center items-center rounded-full'>
                    <IoMdChatbubbles color='white' className='w-8 h-8 '/>
                </div>
                <h2 className="text-2xl font-bold text-black p-2">Pelayanan Terbaik</h2>
                <p className='text-lg font-medium text-black w-60 pl-4'>
                    Hoqo Bajoe berkomitmen memberikan pelayanan terbaik dan menjamin kepuasan pelanggan.
                </p>
            </div> 
        </div>        
    </div>
  )
}

export default Info