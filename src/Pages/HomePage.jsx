import React, { useEffect } from 'react'
import HomeUser from '../Components/Card/HomeUser'
import Info from '../Components/Information/Info'
import { AiOutlineLine } from "react-icons/ai";
import Testimonial from '../Components/Testi/Testimonial';
import Footer from '../Components/Navigation/Footer';
import DashboardUser from '../Components/Information/DashboardUser';
import Nav from '../Components/Navigation/Nav';
import News from '../Components/Information/News';

function HomePage() {

  useEffect(() => {
    document.title = "HoqoBajoe"
  }, [])
  
  return (
    <div>
      <Nav/>  
      <DashboardUser/>
      <div className='w-4/6 mx-auto my-20'>
        <Info/>
        <HomeUser/>
        <Testimonial/>
        <News/>
      </div>
      <Footer/>
    </div>
  )
}

export default HomePage