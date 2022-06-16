import React, { useEffect, useState }  from 'react'
import { Axios } from '../../Helper/axios';
import { Link } from "react-router-dom";
import '../style.css'

function HomeUser() {
  const [tourPackage, setTourPackage] = useState([]);

  const fetchTour = async (nama) => {
        await Axios.get(`/paket?nama_paket=${nama}`).then((resp) =>{
        setTourPackage(resp.data.data)
        })
    }

    useEffect(() =>{
        fetchTour('');
    }, [])

  return (
    <div className='border-b border-gray-light mb-24 pb-12 text-blue-text'>
      <h1 className="text-4xl font-bold text-black mt-16">Destinasi Favorit</h1>
      
      <div className=' my-20'>
          <div className='grid grid-cols-3 justify-items-center'>
              {tourPackage?.map((item) => (
                  <div key={item.id} className="max-w-xs mx-auto bg-white rounded-xl drop-shadow-lg h-96 relative hover:drop-shadow-2xl">
                      <img src={item.photo_wisata[0]} className="rounded-t-lg h-2/4 w-full"/>
                      <div className='p-2 w-1/2 rounded-r-lg bg-blue text-white font-semibold flex justify-center absolute top-50 left-0 cardPrice'>
                          Rp. {item.harga}
                      </div>
                      <div className='p-2'>
                          <h2 className="text-2xl font-bold text-black p-2 mt-5 mb-7 text-blue-text">{item.nama_paket}</h2>
                          <div className='flex justify-center'>
                            <button className='p-3 w-3/4 rounded-full bg-blue hover:bg-blue-dark text-white font-semibold'>
                                <Link to={`/detail-package/${item.id}`}>
                                LIHAT DETAIL
                                </Link>
                            </button>
                          </div>
                      </div>
                  </div>
              ))}
          </div>
      </div>
      {/* <div className='max-w-fit mx-auto flex flex-col gap-10 sm:flex-row sm:gap-16 '>
        <div className="max-w-xs mx-auto bg-white rounded-xl drop-shadow-lg h-96 relative hover:drop-shadow-2xl z-0">
          <img src={Gambar} className="rounded-t-lg h-2/4 w-full"/>
          <div className='p-2 w-1/2 rounded-r-lg bg-gray text-white font-semibold flex justify-center absolute top-50 left-0 cardPrice '>
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
        
      </div> */}
      
    </div>
  )
}

export default HomeUser