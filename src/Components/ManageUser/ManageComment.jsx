import React, { useEffect, useState } from 'react'
import { Axios } from '../../Helper/axios';
import UserProfile from '../../Images/man.png'
import { Base64 } from "js-base64";
import Cookies from "universal-cookie";
import { AiFillStar } from "react-icons/ai";
import axios from 'axios';
import Popup from '../Information/Popup';

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

function ManageComment(props) {
    const [review, setReview] = useState([]);
    // const [messages, setMessages] = useState("");
    // const [popup, setPopup] = useState(false)

    const fetch = async () => {
        await Axios.get(`/review/all`,GenerateAxiosConfig()).then((resp) =>{
            setReview(resp.data.data)
        })
    }

    const rejectReview = (id) =>{
        Axios
            .put(`/review/reject/${id}`)
            .then(() => {
                alert("Review Paket Tidak di Published")
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
                alert("Review Paket Berhasil di Published")
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    useEffect(() =>{
        fetch();
    }, [review])

    return (
        <div className='w-full mx-auto mb-20'>
            {/* <Popup show={popup} onHide={() => setPopup(false)} messages={messages}/> */}
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">Manage Review</h1>
            <div className='border border-gray-light mb-8'></div>

            <div className='bg-[#f1f3f5] rounded drop-shadow-lg border border-gray-light mb-5 w-full mx-auto'>
                <table className='table-auto border-collapse  border-gray rounded-xl mb-8 w-full mx-auto text-[#495057]'>
                    <thead className=''>
                        <tr>
                            <th className='p-2'>Package</th>
                            <th>Customer</th>
                            <th>Review</th>
                            {/* <th>Rating</th> */}
                            <th>Status</th>
                            <th className='p-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody className='bg-white'>
                        {review?.map((item) =>(
                        <tr key={item.id} className="">
                            <td className='p-2 border-b border-[#e9ecef] mb-8'>{item.nama_paket}</td>
                            <td className='border-b border-[#e9ecef] p-2'>{item.nama}</td>
                            <td className='border-b border-[#e9ecef] p-2'>{item.review}</td>
                            {/* <td className='flex items-center border-b p-2 mb-8'><AiFillStar className='fill-yellow'/>{item.stars}</td> */}
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
                            {/* <td>{item.status}</td> */}
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