import React, { useEffect, useState } from 'react'
import { MdDateRange } from "react-icons/md";
import UserProfile from '../../Images/man.png'
import { Axios } from '../../Helper/axios';
import moment from "moment";


function ListAdmin() {
    const [admin, setAdmin] = useState([]);

    const fetch = async () => {
        await Axios.get(`/admin/all`).then((resp) =>{
            setAdmin(resp.data.data)
        })
    }

    useEffect(() =>{
        fetch();
    }, [])

    return (
        <div className='w-full mx-auto mt-10'>

        
            <div className='flex justify-between  mb-8'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black">Admin</h1>
            </div>
            
            <div className='border border-gray-light mb-8'></div>
            
            {admin?.map((item) =>(
                <div key={item.id} className='flex items-center justify-between gap-24  text-[#495057] bg-white rounded-md drop-shadow-lg hover:drop-shadow-2xl p-3 border border-gray-light w-max mx-auto mb-8'>
                    <div className='flex items-center'>
                        <img src={UserProfile} alt="img-user" className='w-14 mr-4'/>
                        <div className='w-60'>
                            <p className="text-3xl sm:text-lg font-semibold text-black">{item.nama}</p>
                            <p className='sm:text-sm font-medium text-black italic'>{item.email}</p>
                        </div>
                    </div>
                    
                    <p className='sm:text-lg font-medium text-black w-28'>{item.role}</p>
                    <p className='flex items-center sm:text-lg font-medium text-black w-28'><MdDateRange className='mr-1'/>{moment(item.created_at).format('L')}</p>
                </div>
            ))}
        </div>
    )
}

export default ListAdmin