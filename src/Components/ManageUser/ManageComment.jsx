import React, { useEffect, useState } from 'react'
import { Axios } from '../../Helper/axios';
import { AiFillStar } from "react-icons/ai";
import Swal from 'sweetalert2';

function ManageComment(props) {
    const [review, setReview] = useState([]);
    
    const getReview = async () => {
        await Axios.get(`/review/all`).then((resp) =>{
            setReview(resp.data.data)
        })
    }

    const rejectReview = (id) =>{
        Axios
            .put(`/review/reject/${id}`)
            .then(() => {
                Swal.fire(
                    "Reject success!",
                    "Review has been rejected!",
                    'success'
                )
            })
            .catch((err) => {
                Swal.fire(
                    "Reject Failed!",
                    "Something wrong, reject failed",
                    'error'
                )
            })
    }
    const acceptReview = (id) =>{
        Axios
            .put(`/review/accept/${id}`)
            .then((resp) =>{
                Swal.fire(
                    "Accept review success!",
                    "Review has been published!",
                    'success'
                )
            })
            .catch((err) =>{
                Swal.fire(
                    "Accept review failed!",
                    "Something wrong, accept review failed",
                    'error'
                )
            })
    }

    useEffect(() =>{
        getReview();
    }, [review])

    return (
        <div className='w-full mx-auto mb-20'>
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">Manage Review</h1>
            <div className='border border-gray-light mb-8'></div>


            <div className='bg-[#f1f3f5] rounded drop-shadow-lg border border-gray-light mb-5 w-full mx-auto'>
                <table className='table-auto border-collapse  border-gray rounded-xl mb-8 w-full mx-auto text-[#495057]'>
                    <thead className=''>
                        <tr>
                            <th className='p-2'>Package</th>
                            <th>Customer</th>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>Status</th>
                            <th className='p-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {review?.map((item) =>(
                        <tr key={item.id} className="">
                            <td className='p-2 border-b border-[#e9ecef] mb-8'>{item.nama_paket}</td>
                            <td className='border-b border-[#e9ecef] p-2'>{item.nama}</td>
                            <td className='border-b border-[#e9ecef] p-5 flex items-center'><AiFillStar className="fill-yellow mr-2"/> {item.stars} </td>
                            <td className='border-b border-[#e9ecef] p-2'>{item.review}</td>
                            <td className='border-b border-[#e9ecef] mr-1 p-2'>
                                {item.status === "Pending" ? 
                                <div className='bg-gray text-white rounded-lg text-center p-1'>Pending</div>
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
                            <td className='flex p-1 justify-center'>
                                {
                                item.status === "Pending" ? 
                                <div className='w-fit mt-1 mb-2'>
                                    <button className=' bg-green text-white rounded-lg font-semibold mb-1 w-16'onClick={()=>{acceptReview(item.id);}}>Accept</button>
                                    <button className=' bg-red text-white rounded-lg font-semibold w-16' onClick={()=> {rejectReview(item.id);}}>Reject</button>
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