import axios from 'axios';
import { Base64 } from 'js-base64';
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import { Axios } from '../../Helper/axios';

function GenerateAxiosConfig() {
  const cookies = new Cookies();
  const token = Base64.decode(cookies.get("token"));
  const config = {
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json;charset=UTF-8",
        Authorization: "Bearer " + token,
    },
  };
  return config;
}

function AllTransactions() {
  const [transaction, setTransaction] = useState([]);

    const fetch = async () => {
        await axios.get(`http://hoqobajoe.herokuapp.com/api/transaction`, GenerateAxiosConfig()).then((resp) =>{
            setTransaction(resp.data.data)
        })
    }

    const rejectTransaction = (id) =>{
        Axios
            .put(`/transaction/reject/${id}`)
            .then(() => {
                alert("Transaksi Ditolak")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const acceptTransaction = (id) =>{
        Axios
            .put(`/transaction/accept/${id}`)
            .then((resp) =>{
                console.log(resp)
                alert("Transaksi Berhasil")
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    useEffect(() =>{
        fetch();
    }, [])

    console.log("transaksi:",transaction)
    return (
        <div className='w-full mx-auto mb-20 mt-10'>
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">Manage Transaction</h1>
            <div className='border border-gray-light mb-8'></div>

            <div className='bg-[#f1f3f5] rounded drop-shadow-lg border border-gray-light mb-5 w-full mx-auto'>
                <table className='table-auto border-collapse border-gray rounded-xl mb-8 w-full mx-auto text-[#495057]'>
                    <thead className=''>
                        <tr>
                            <th className='p-2'>Package</th>
                            <th>Customer</th>
                            <th>Method Payment</th>
                            <th>Pax</th>
                            <th>Price</th>
                            <th>Total</th>
                            <th>Status</th>
                            <th className='p-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {transaction?.map((item) =>(
                        <tr key={item.id} className="">
                            <td className='p-2 border-b border-[#e9ecef] mb-8'>{item.nama_paket}</td>
                            <td className='border-b border-[#e9ecef] p-2'>{item.nama}</td>
                            <td className='border-b border-[#e9ecef] p-2'>{item.metode}</td>
                            <td className='border-b border-[#e9ecef] p-2'>{item.pax}</td>
                            <td className='border-b border-[#e9ecef] p-2'>{item.harga}</td>
                            <td className='flex p-2 mt-2 text-center items-center'>{item.total}</td>
                            <td className='border-b border-[#e9ecef] mr-1 p-2'>
                                {item.status === "Pending" ? 
                                <div className='bg-gray text-white rounded-lg text-center'>Pending</div>
                                :
                                <div>
                                    {item.status === "Accepted"?
                                    <div className='bg-green text-white rounded-lg text-center p-1'>Published</div>
                                    :
                                    <div className='bg-gray-light text-white rounded-lg text-center'>Reject</div>
                                    }
                                </div>
                                }
                            </td>
                            <td className='flex p-1'>
                                {
                                item.status === "Pending" ? 
                                <div className='w-fit mt-1 mb-2 flex flex-col'>
                                    <button className=' bg-green text-white rounded-lg font-semibold mb-1 w-16 mr-1'onClick={()=>acceptTransaction(item.id)}>Accept</button>
                                    <button className=' bg-red text-white rounded-lg font-semibold w-16' onClick={()=>rejectTransaction(item.id)}>Reject</button>
                                </div>
                                : 
                                null
                                }
                            </td>
                        </tr>
                        ))}
                    </tbody>
                </table> 
            </div>
        </div>
    )
}

export default AllTransactions