import React, { useEffect, useState } from 'react'
import Testi from "../../Images/testi.svg"
import { Axios } from '../../Helper/axios';

function Testimonial() {
  const [review, setReview] = useState([])

  const fetchReview = () => {
    Axios.get(`/review/paket/1`).then((resp) =>{
        setReview(resp.data.data)
    })
  }

  useEffect(() => {
      fetchReview();
  }, [setReview])

  return (
    <div className='flex items-center gap-16 mb-36 mt-32'>
      <img src={Testi} className='w-1/2'/>
      <div>
        <h1 className="text-4xl font-bold text-black text-blue-text mb-2">Apa Kata Mereka?</h1>
        {review?.map((item) => (
          <div>
            <p className='text-blue-text drop-shadow-2xl text-xl pt-2 italic'>"{item.review}"</p>
            <p className='text-blue-text drop-shadow-2xl text-xl pt-2 font-bold'>- {item.nama}</p>
          </div>
      
        ))}
      </div>
    </div>
  )
}

export default Testimonial