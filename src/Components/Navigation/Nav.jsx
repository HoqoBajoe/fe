import React, { useState } from 'react'
import { HiUserCircle } from "react-icons/hi";

const Nav = () => {
    let [open,setOpen]=useState(false);


    return (
        <div className='shadow-md w-full fixed top-0 left-0 md:bg-transparent nav'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7 border-b border-white mx-7'>
                <div className='font-bold text-2xl cursor-pointer flex items-center 
                text-gray-800 text-white'>
                    HoqoBajoe
                </div>
                
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <ul className={` md:mr-14 md:flex md:items-center gap-44 md:pb-0 pb-12 absolute md:static  md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in text-white ${open ? 'top-20 ':'top-[-490px]'}`}>
                    {/* {
                    Links.map((link)=>(
                        <li key={link.name} className='md:ml-8 text-xl md:my-0 my-7'>
                        <a href={link.link} className='text-gray-800 hover:text-gray-400 duration-500'>{link.name}</a>
                        </li>
                    ))
                    } */}
                    {/* <Button>
                    Get Started
                    </Button> */}
                        <li className='md:ml-8 text-xl md:my-0 my-7 '>
                            <a href="/" className='text-gray-800 hover:text-gray-400 active:border-b-4 border-white duration-500'>Explore</a>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href="/" className='text-gray-800 hover:text-gray-400 duration-500'>Discover</a>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            <a href="/" className='text-gray-800 hover:text-gray-400 duration-500'>Tour Package</a>
                        </li>
                </ul>

                <div>
                    <HiUserCircle color='white' className='w-8 h-8'/>
                </div>
            </div>
        </div>
    )
}

export default Nav