import React from 'react'
import Harga from "../../Images/pricing.svg"
import Pelayanan from "../../Images/typing.svg"
import Trip from "../../Images/trip.svg"

function Info() {
  return (
    <div className='border-b border-gray-light text-blue-text'>
        <h1 className="text-3xl sm:text-4xl font-bold text-black py-6">Kenapa Memilih Kami ?</h1>
        <div className='flex items-center gap-20 my-20'>
            <img src={Trip} className='w-1/2'/>
            <div>
                <h2 className="text-2xl font-bold text-black pb-3">Destinasi menarik</h2>
                <p className='text-xl font-medium text-black '>
                    Hoqo Bajoe menawarkan berbagai destinasi wisata menarik di Nusa Tenggara Timur yang wajib untuk dikunjungi.
                </p>
            </div>
        </div>

        <div className='flex items-center gap-20 my-24'>
            <div>
                <h2 className="text-2xl font-bold text-black pb-3">Harga Terjangkau</h2>
                <p className='text-xl font-medium text-black '>
                    Hoqo Bajoe memberikan pelayanan prima dengan harga murah yang proporsional dan rasional.
                </p>
            </div>
             <img src={Harga} className='w-1/2'/>
        </div>

        <div className='flex items-center gap-20 my-24'>
            <img src={Pelayanan} className='w-1/2'/>
            <div>
                <h2 className="text-2xl font-bold text-black pb-3">Pelayanan Terbaik</h2>
                <p className='text-xl font-medium text-black '>
                    Hoqo Bajoe berkomitmen memberikan pelayanan terbaik dan menjamin kepuasan pelanggan.
                </p>
            </div>
        </div>
        
        {/* <div className='max-w-fit mx-auto flex flex-col gap-10 sm:gap-28 sm:flex-row p-0'>
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
        </div>         */}
    </div>
  )
}

export default Info