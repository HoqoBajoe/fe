import React, { useEffect, useState }  from 'react'
import { FiSearch } from "react-icons/fi";
import { Axios } from '../../Helper/axios';
import { Link } from "react-router-dom";
import TouerElement from '../Information/TouerElement';
import Gambar from "../../Images/pinkBeach.jpg"
import Footer from '../Navigation/Footer';
import Nav from '../Navigation/Nav';

function AllPackageUser() {
    const [tourPackage, setTourPackage] = useState([]);
    const [filter, setFilter] = useState("")

    const onChange = (e) => {
        const value = e.target.value;
        setFilter(value);
    };

    const fetchTour = async (nama) => {
        await Axios.get(`/paket?nama_paket=${nama}`).then((resp) =>{
        setTourPackage(resp.data.data)
        })
    }

    useEffect(() =>{
        fetchTour('');
    }, [])
  return (
    <div>
        <Nav/>
            <div className='bg-tour h-96 w-full bg-cover bg-no-repeat bg-left bg-fixed'>
                <div className='mx-auto w-fit h-fit my-auto'>
                    <h1 className="text-3xl sm:text-6xl font-bold text-black pt-20 text-gray drop-shadow-2xl">Tour Package</h1>
                </div>

                <div className='flex mx-auto w-2/5 pt-10 drop-shadow-2xl'>
                    <input className='border-y border-l border-gray-light rounded-l-lg p-4 caret-pink w-full' type="search" name='search' value={filter} onChange={onChange}/>
                    <button className='border-y border-r border-gray-light rounded-r-lg p-2 w-10 inline-block align-middle bg-white ' onClick={() => {(fetchTour(filter))}}>
                        <FiSearch className='mt-1 stroke-[#868e96]'/>
                    </button>
                </div>
            </div>
            
            <div className='w-9/12 mx-auto my-20'>
                <div className='grid grid-cols-3 gap-4'>
                    {tourPackage?.map((item) => (
                        <div key={item.id} className="max-w-xs mx-auto bg-white rounded-xl drop-shadow-lg h-96 relative hover:drop-shadow-2xl">
                            <img src={item.photo_wisata[0]} className="rounded-t-lg h-2/4 w-full"/>
                            <div className='p-2 w-1/2 rounded-r-lg bg-blue-dark text-white font-semibold flex justify-center absolute top-50 left-0 cardPrice'>
                                Rp. {item.harga}
                            </div>
                            <div className='p-2'>
                                <h2 className="text-2xl font-bold text-black p-2 mt-5 mb-7">{item.nama_paket}</h2>
                                <div className='flex justify-center'>
                                    
                                <button className='p-3 w-3/4 rounded-full bg-btn text-white font-semibold'>
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
            
            <Footer/>
    </div>
  )
}

export default AllPackageUser