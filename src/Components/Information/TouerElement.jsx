import React from 'react'
import Gambar from "../../Images/background.jpg"

function TouerElement() {
  return (
    <div >
        <div className="bg-home h-96 w-full bg-cover bg-no-repeat bg-left bg-fixed">
            <div className='mx-auto w-fit h-fit my-auto'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black ">Tour Package</h1>
            </div>
        </div>
        {/* <img src={Gambar} className='fixed h-1/3 w-screen object-cover'/> */}
    </div>
  )
}

export default TouerElement