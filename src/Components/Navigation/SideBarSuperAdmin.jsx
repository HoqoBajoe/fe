import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import UserProfile from '../../Images/man.png'
import { FiLogOut } from "react-icons/fi";
import { logout } from '../../Redux/AdminSlice';
import Cookies from 'universal-cookie';
import { Link, useNavigate } from 'react-router-dom';
import { Axios } from '../../Helper/axios';

function SideBarSuperAdmin() {
  const user = useSelector((state) => state.admin)
  const cookies = new Cookies();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const initialValue = {
    nama: user.nama,
    role: user.role,
  }

  const [form, setForm] = useState(initialValue)
  const roleCheck = "admin"

  //  const fetch = async () => {
  //       await Axios.get(`/logout`)
  //         .then((resp) =>{
  //           dispatch(logout());
  //           cookies.remove("token", { path: "/", domain: window.location.hostname });
  //           if (window.location.pathname) {
  //             navigate("/");
  //           } else {
  //             window.location.reload();
  //           }
  //       })
  //   }

  const onClick = () => {
    sessionStorage.removeItem('token');
    dispatch(logout());
    cookies.remove("token", { path: "/dashboard", domain: window.location.hostname });
    
    if (window.location.pathname) {
      navigate("/");
    } else {
      window.location.reload();
    }
  };

  return (
    <div className='sticky top-0 h-screen'>
    <div className='w-72 h-screen bg-gray flex flex-col justify-between'>
        <div className='pt-4 p-2 text-[#f8f9fa]'>
            <img src={UserProfile} className='w-14 h-14 mx-auto mb-4'/>
            <div className='w-max mx-auto mb-2'>
                <p className="text-3xl sm:text-lg font-semibold">{form.nama}</p>
                <p className='sm:text-sm font-medium text-black italic w-max mx-auto'>{form.role}</p>
            </div>
            
            <div className='border border-gray-dark mb-4'></div>
            {
              roleCheck === form.role ? 
              <ul className='text-[#f8f9fa] ml-5 list-none'>
                <Link to="/dashboard">
                  <li className='hover:font-semibold hover:cursor-pointer'>Home</li>
                </Link>
              </ul>  
              :
              <ul className='text-[#f8f9fa] ml-5 list-none'>
                <Link to="/dashboard">
                  <li className='hover:font-semibold hover:cursor-pointer mb-1'>Home</li>
                </Link>

                <Link to="/tour-package">
                  <li className='hover:font-semibold hover:cursor-pointer mb-1'>Tour Package</li>
                </Link>
                
                <Link to="/transaction">
                  <li className='hover:font-semibold hover:cursor-pointer mb-1'>Transactions</li>
                </Link>
                
                <Link to="/manage-admin">
                  <li className='hover:font-semibold hover:cursor-pointer'>Manage Admin</li>
                </Link>
              </ul>  
            }
        </div>
        <button className='text-white flex bg-gray-dark w-72 p-3 gap-3 justify-center' onClick={onClick}><FiLogOut className='stroke-white w-6 h-6'/>Logout</button>
    </div>
 </div>
  )
}

export default SideBarSuperAdmin