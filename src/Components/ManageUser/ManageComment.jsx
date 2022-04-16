import React, { useEffect, useState } from 'react'
import { Axios } from '../../Helper/axios';
import UserProfile from '../../Images/man.png'
import { Base64 } from "js-base64";
import Cookies from "universal-cookie";
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';

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

function ManageComment() {
    const [review, setReview] = useState([]);
    const fetch = async () => {
        await Axios.get(`/review/all`,GenerateAxiosConfig()).then((resp) =>{
            setReview(resp.data.data)
        })
    }

    const rejectReview = (id) =>{
        Axios
            .put(`/review/reject/${id}`)
            .then(() => {
                alert("Berhasil menghapus customer")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const acceptReview = (id) =>{
        Axios
            .put(`/review/accept/${id}`)
            .then((resp) =>{
                console.log(resp)
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    useEffect(() =>{
        fetch();
    }, [review])

    console.log(review)
    return (
        <div className='w-full mx-auto mb-20'>
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">Manage Review</h1>
            <div className='border border-gray-light mb-8'></div>

            <div className='bg-white rounded-xl drop-shadow-lg p-3 border border-gray-light mb-5 w-full mx-auto'>
                    <table className='table-auto border-collapse border border-gray-light '>
                        <thead className='bg-gray-light '>
                            <tr>
                                <th className='p-2'>Package</th>
                                <th>Customer</th>
                                <th>Review</th>
                                <th>Rating</th>
                                <th>Status</th>
                                <th></th>
                            </tr>
                        </thead>
                        <tbody>
                            {review?.map((item) =>(
                            <tr key={item.id} className="">
                                <td className='p-2'>{item.nama_paket}</td>
                                <td className=''>{item.nama}</td>
                                <td>{item.review}</td>
                                <td className='flex p-2 mt-2'><AiFillStar className='fill-yellow'/>{item.stars}</td>
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
                                        <button className=' bg-green text-white rounded-lg font-semibold mb-1 w-16'onClick={()=>acceptReview(item.id)}>Accept</button>
                                        <button className=' bg-red text-white rounded-lg font-semibold w-16' onClick={()=>rejectReview(item.id)}>Reject</button>
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

export default ManageComment