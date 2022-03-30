import React from 'react'
import BgImage from '../../Images/bgimage.jpg'
import '../style.css'

function DashboardUser() {
  return (
    <div >
        <div style={{ backgroundImage: `url(${BgImage})` }} className=''>
            <div className=''>
                <h1 className='text-6xl font-bold'>WORLD OF PARADISE, INDONESIA</h1>
                <p className='text-xl'>
                    Let's explore one of the third largest countries in the world, namedly Indonesia. enjoy your vacation packages at competitve prices and strong soul
                </p>
            </div>
        {/* <img src={BgImage} className='h-fit sm:h-fit w-screen mb-20'/> */}
        
        
        </div>
        
    </div>
  )
}

export default DashboardUser