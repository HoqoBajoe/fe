import { Base64 } from 'js-base64';
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';
import { Axios } from '../../Helper/axios';

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

function AllTransactions() {
  const [transaction, setTransaction] = useState([]);
    const fetch = async () => {
        await Axios.get(`/transaction`, GenerateAxiosConfig()).then((resp) =>{
            setTransaction(resp.data.data)
        })
    }

    const rejectTransaction = (id) =>{
        Axios
            .put(`/transaction/reject/${id}`)
            .then(() => {
                alert("Berhasil menghapus customer")
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
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    useEffect(() =>{
        fetch();
    }, [transaction])

    console.log("transaksi:",transaction)
    return (
        <div>
            <table className='table-auto border-collapse border border-gray-light '>
                <thead className='bg-gray-light '>
                    <tr>
                        <th className='p-2'>Package</th>
                        <th>Customer</th>
                        <th>Method Payment</th>
                        <th>Total</th>
                        <th>Status</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {transaction?.map((item) =>(
                    <tr key={item.id} className="">
                        <td className='p-2'>{item.nama_paket}</td>
                        <td className=''>{item.nama}</td>
                        <td>{item.metode}</td>
                        <td className='flex p-2 mt-2'>{item.total}</td>
                        <td>
                            {item.status === "Pending" ? 
                            <div className='bg-gray text-white rounded-lg text-center'>Pending</div>
                            :
                            <div>
                                {item.status === "Accepted"?
                                <div className='bg-green text-white rounded-lg text-center'>Published</div>
                                :
                                <div className='bg-gray-light text-white rounded-lg text-center'>Reject</div>
                                }
                            </div>
                            }
                        </td>
                        {/* <td>{item.status}</td> */}
                        <td className='flex'>
                            {
                            item.status === "Pending" ? 
                            <div>
                                <button className=' bg-green text-white rounded-lg font-semibold mb-1 w-16'onClick={()=>acceptTransaction(item.id)}>Accept</button>
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
    )
}

export default AllTransactions