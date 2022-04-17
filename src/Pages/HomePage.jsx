import React, { useEffect } from 'react'
import HomeUser from '../Components/Card/HomeUser'
import Info from '../Components/Information/Info'
import { AiOutlineLine } from "react-icons/ai";
import Testimonial from '../Components/Testi/Testimonial';
import Footer from '../Components/Navigation/Footer';
import DashboardUser from '../Components/Information/DashboardUser';
import Nav from '../Components/Navigation/Nav';

function HomePage() {

  useEffect(() => {
    document.title = "HoqoBajoe"
  }, [])
  
  return (
    <div>
      <Nav/>  
      <DashboardUser/>
      <div className='sm:max-w-fit mx-auto'>
          <div className='sm:max-w-7xl '>
              <Info/>
              <AiOutlineLine className='mt-24 mb-12 sm:w-96 mx-auto '/>
              <HomeUser/>
              <AiOutlineLine className='my-20 w-96 mx-auto '/>
              <Testimonial/>
              <AiOutlineLine className='my-20 w-96 mx-auto '/>
          </div>
      </div>

      <Footer/>
    </div>
  )
}

export default HomePage