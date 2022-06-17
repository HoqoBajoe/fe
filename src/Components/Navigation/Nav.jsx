import React, { useState } from 'react'
import { HiUserCircle } from "react-icons/hi";
import { useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';

const Nav = () => {
    let [open,setOpen]=useState(false);
    const user = useSelector((state) => state.admin);
    const navigate = useNavigate();

    const onClick = () => {
        if (user.id !== 0) {
            navigate("/profile-user")
        } else {
            Swal.fire(
                'Anda belum melakukan login!',
                'Silahkan masuk terlebih dahulu.',
                // 'error'
            )
            navigate("/login")
        }
    }

    return (
        <div className='shadow-md w-full top-0 left-0 bg-blue nav'>
            <div className='md:flex items-center justify-between py-4 md:px-10 px-7 border-b border-white mx-7'>
                <Link to={'/'}>
                    <a className='font-bold text-2xl cursor-pointer flex items-center 
                    text-gray-800 text-white'>
                        HoqoBajoe
                    </a>
                </Link>
                
                <div onClick={()=>setOpen(!open)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
                    <ion-icon name={open ? 'close':'menu'}></ion-icon>
                </div>

                <ul className={` md:mr-14 md:flex md:items-center gap-44 md:pb-0 pb-12 absolute md:static  z-40 left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in text-white ${open ? 'top-20 ':'top-[-490px]'}`}>
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
                            <a href="/tour" className='text-gray-800 hover:text-gray-400 duration-500'>Tour Package</a>
                        </li>

                        <li className='md:ml-8 text-xl md:my-0 my-7'>
                            {/* {user.id != 0 ? <a href="/profile-user" className='text-gray-800 hover:text-gray-400 duration-500'>Profile</a> : <a href="/login" className='text-gray-800 hover:text-gray-400 duration-500'>Profile</a>} */}
                            <a onClick={onClick} className='cursor-pointer text-gray-800 hover:text-gray-400 duration-500'>Profile</a>
                        </li>
                </ul>

                <div>
                    <Link to="/login">
                        <HiUserCircle color='white' className='w-8 h-8'/>
                    </Link>  
                </div>
            </div>
        </div>
    )
}

export default Nav