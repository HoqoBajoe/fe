import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import UserProfile from '../../Images/man.png'
import { Axios } from '../../Helper/axios';
import moment from "moment";


function AllPackage(props) {
  const [tourPackage, setTourPackage] = useState([]);
  const [stateId, setStateId] = useState("");

    const fetch = async () => {
        await Axios.get(`paket`).then((resp) =>{
            setTourPackage(resp.data.data)
        })
    }

    useEffect(() =>{
        fetch();
    }, [])

    console.log(tourPackage)
    console.log(stateId)
    return (
        <div className='w-full mx-auto'>
            <div className='flex justify-between  mb-8'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black">Tour Package</h1>
                <div className='flex'>
                    <input className='border-y border-l border-gray-light rounded-l-lg p-2 caret-pink'/>
                    <div className='border-y border-r border-gray-light rounded-r-lg p-2 w-max inline-block align-middle '>
                        <FiSearch className='mt-1'/>
                    </div>
                </div>
            </div>
            
            <div className='border border-gray-light mb-8'></div>

            {tourPackage?.map((item) =>(
                <div key={item.id} className='flex items-center justify-between gap-24 bg-white rounded-xl drop-shadow-lg hover:drop-shadow-2xl p-3 border border-gray-light w-max mx-auto mb-8'>
                    <div className='flex items-center'>
                        <img src={UserProfile} className='w-14 mr-4 '/>
                        <div className='w-64'>
                            <p className="text-3xl sm:text-lg font-semibold text-black">{item.nama_paket}</p>
                            <p className='sm:text-sm font-medium text-black italic'>{item.harga}</p>
                        </div>
                    </div>
                    
                    {/* <p className='sm:text-lg font-medium text-black w-28'>{item.role}</p> */}
                    <p className='sm:text-lg font-medium text-black w-28'>{moment(item.created_at).format('L')}</p>
                    <button onClick={() => {setStateId(item.id)}} className='bg-blue p-2 rounded-lg text-white'>
                        edit
                    </button>
                </div>
            ))}
        </div>
    )
}

export default AllPackage