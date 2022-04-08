import React from 'react'
import Gambar from "../../Images/background.jpg"
import '../style.css'

function HomeUser() {
  return (
    <div>
      <h1 className="text-4xl font-bold text-black py-6 mb-9">Destinasi Favorit</h1>
      <div className='max-w-fit mx-auto flex flex-col gap-10 sm:flex-row sm:gap-16'>
        <div className="max-w-xs mx-auto bg-white rounded-xl drop-shadow-lg h-96 relative hover:drop-shadow-2xl">
          <img src={Gambar} className="rounded-t-lg h-2/4 w-full"/>
          <div className='p-2 w-1/2 rounded-r-lg bg-gray text-white font-semibold flex justify-center absolute top-50 left-0 cardPrice'>
              Rp.1.400.000
          </div>
          <div className='p-2'>
            <h2 className="text-2xl font-bold text-black p-2 mt-3">Wisata Wae Rebo</h2>
            <div className='flex justify-center'>
              <button className='p-3 w-3/4 rounded-full bg-gray text-white font-semibold hover:bg-gray-dark'>
                LIHAT DETAIL
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-xs mx-auto bg-white rounded-xl drop-shadow-lg h-96 relative hover:drop-shadow-2xl">
          <img src={Gambar} className="rounded-t-lg h-2/4 w-full"/>
          <div className='p-2 w-1/2 rounded-r-lg bg-gray text-white font-semibold flex justify-center absolute top-50 left-0 cardPrice'>
              Rp.1.400.000
          </div>
          <div className='p-2'>
            <h2 className="text-2xl font-bold text-black p-2 mt-3">Wisata Wae Rebo</h2>
            <div className='flex justify-center'>
              <button className='p-3 w-3/4 rounded-full bg-gray text-white font-semibold hover:bg-gray-dark'>
                LIHAT DETAIL
              </button>
            </div>
          </div>
        </div>

        <div className="max-w-xs mx-auto bg-white rounded-xl drop-shadow-lg h-96 relative hover:drop-shadow-2xl">
          <img src={Gambar} className="rounded-t-lg h-2/4 w-full"/>
          <div className='p-2 w-1/2 rounded-r-lg bg-gray text-white font-semibold flex justify-center absolute top-50 left-0 cardPrice'>
              Rp.1.400.000
          </div>
          <div className='p-2'>
            <h2 className="text-2xl font-bold text-black p-2 mt-3">Wisata Wae Rebo</h2>
            <div className='flex justify-center'>
              <button className='p-3 w-3/4 rounded-full bg-gray text-white font-semibold hover:bg-gray-dark'>
                LIHAT DETAIL
              </button>
            </div>
          </div>
        </div>
        
      </div>
      
    </div>
  )
}

export default HomeUser