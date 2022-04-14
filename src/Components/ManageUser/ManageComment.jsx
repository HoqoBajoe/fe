import React, { useEffect, useState } from 'react'
import { Axios } from '../../Helper/axios';
import UserProfile from '../../Images/man.png'

function ManageComment() {
    const [review, setReview] = useState([]);
    const fetch = async () => {
        await Axios.get(`/review/all`).then((resp) =>{
            setReview(resp.data.data)
        })
    }

    const deleteReview = (id) =>{
        Axios
            .delete(`/review/${id}`)
            .then(() => {
                alert("Berhasil menghapus customer")
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const acceptReview = (id) =>{
        Axios
            .put(`/review/${id}`)
            .then((resp) =>{
                console.log(resp)
            })
            .catch((err) =>{
                console.log(err)
            })
    }

    useEffect(() =>{
        fetch();
    }, [setReview])

    console.log(review)
    return (
        <div className='w-full mx-auto mb-20'>
            <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8">Manage Review</h1>
            <div className='border border-gray-light mb-8'></div>

            <div className='bg-white rounded-xl drop-shadow-lg p-3 border border-gray-light mb-5 w-full mx-auto'>
                {review?.map((item) =>(
                    <div className='flex items-start mb-8'>
                        <img src={UserProfile} className='w-14 mr-4 '/>
                        <div className='mb-2'>
                            <p className="text-3xl sm:text-lg font-semibold text-black">{item.nama_user}</p>
                            <p className='sm:text-sm font-medium text-black mb-3'>{item.review}</p>

                            <button className='p-2 bg-green text-white rounded-lg font-semibold mr-5'onClick={()=>acceptReview(item.id)}>Accept</button>
                            <button className='p-2 bg-red text-white rounded-lg font-semibold' onClick={()=>deleteReview(item.id)}>Reject</button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ManageComment