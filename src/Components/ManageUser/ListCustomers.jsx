import React, { useEffect, useState } from 'react'
import { FaTrashAlt } from "react-icons/fa";
import { MdDateRange } from "react-icons/md";
import UserProfile from '../../Images/man.png'
import { Axios } from '../../Helper/axios';
import moment from "moment";
import { Base64 } from "js-base64";
import Cookies from "universal-cookie";
import Swal from 'sweetalert2'

function GenerateAxiosConfig() {
  const cookies = new Cookies();
  const token = Base64.decode(cookies.get("token"));
  const config = {
    headers: {
      Authorization: "Bearer " + token,
    },
  };
  return config;
}

function ListCustomers() {
    const [customer, setCustomer] = useState([]);
    const fetch = async () => {
        await Axios.get(`/user`).then((resp) =>{
            setCustomer(resp.data.data)
        })
    }

    const deleteCust = (id) =>{
        Axios
            .delete(`/user/delete/${id}`)
            .then(() => {
                Swal.fire(
                    'Success!',
                    'Delete customer success..',
                    'success'
                )
            })
            .catch((err) => {
                Swal.fire(
                    'Error!',
                    'Delete customer error!',
                    'error'
                )
            })
    }

    useEffect(() =>{
        fetch();
    }, [customer])

    return (
        <div className='w-full mx-auto'>
            <div className='flex justify-between  mb-8'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black">Customers</h1>

            </div>
            
            <div className='border border-gray-light mb-8'></div>

            {customer?.map((item) =>(

                <div key={item.id} className='flex items-center justify-between gap-24 text-[#495057] bg-white rounded-md drop-shadow-lg hover:drop-shadow-2xl p-3 border border-gray-light w-max mx-auto mb-8'>

                    <div className='flex items-center'>
                        <img src={UserProfile} alt="usr-img" className='w-14 mr-4'/>
                        <div className='w-60'>
                            <p className="text-3xl sm:text-lg font-semibold text-black">{item.nama}</p>
                            <p className='sm:text-sm font-medium text-black italic'>{item.email}</p>
                        </div>
                    </div>
                    
                    <p className='sm:text-lg font-medium text-black w-28'>{item.role === "user"? "Customer" : item.role}</p>

                    <p className='flex items-center sm:text-lg font-medium text-black w-28'><MdDateRange className='mr-1'/>{moment(item.created_at).format('L')}</p>

                    <button className='bg-red h-max p-2 rounded-lg' onClick={()=>deleteCust(item.id)}>
                        <FaTrashAlt className='fill-white w-5 h-5'/>
                    </button>
                </div>
            ))}
        </div>
    )
}

export default ListCustomers