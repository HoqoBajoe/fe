import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Axios } from '../../Helper/axios';
import { login } from '../../Redux/AdminSlice';
import { Base64 } from "js-base64";
import axios from 'axios';
import { Link } from 'react-router-dom';

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const [error, setError] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cookies = new Cookies();

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const onSubmit = (e) =>{
        axios
            .post('http://hoqobajoe.herokuapp.com/api/login',{...form})
            .then((resp) =>{
                console.log("ini respon: ", resp)
                const hash = Base64.encode(resp.data.data.token);
                cookies.set("token", hash, {
                path: "/dashboard",
                domain: window.location.hostname,
                });

                if (resp.data.data.role == 'super-admin' || resp.data.data.role == 'admin'){
                    dispatch(
                        login({
                            id: resp.data.data.id,
                            nama: resp.data.data.nama,
                            email: resp.data.data.email,
                            role: resp.data.data.role,
                            token: resp.data.data.token,
                        }) 
                    )
                    sessionStorage.setItem('token', resp.data.data.token)
                    navigate("/dashboard")
                } else {
                    e.preventDefault();
                    setError("Anda Belum terdaftar");
                }
                alert("Berhasil Login")
                
            })
            .catch(err => setError("Anda Belum terdaftar"));
        // console.log("masuk")
    }
    
  
    return (
        <div className='static'>
            <div className="bg-home h-screen bg-cover bg-no-repeat flex">
                <div className='container'>
                    <div className='w-1/3 m-auto mt-36 p-2 border-solid rounded-xl shadow-2xl mb-20 bg-ivory min-w-max sm:max-w-xl'>
                        <h1 className="text-3xl sm:text-4xl mt-6 font-bold text-black mb-8 text-center">Hoqo Bajoe</h1>
                        <form method='POST' action='#'>
                            <div className="mb-2 mt-10 lg:mx-10 sm:mx-5 md:mx-5">
                                <h3 className="text-lg sm:text-xl font-medium text-black">Email</h3>
                                <input type="email" name="email" value={form.email} onChange={onChange} className='w-full rounded-lg p-4 h-10 shadow-md leading-tight hover:shadow-lg transition'/>
                            </div>
                            <div className="mb-4 mt-5 lg:mx-10 sm:mx-5 md:mx-5">
                                <h3 className="text-xl sm:text-xl font-medium text-black">Password</h3>
                                <input type="password" name="password" value={form.password} onChange={onChange} className='w-full rounded-lg p-4 h-10 shadow-md leading-tight hover:shadow-lg transition'/>
                            </div>
                        </form>

                        <div className='flex justify-center mt-10'>
                            <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5 uppercase font-semibold shadow-md   hover:bg-gray-white'>Login</button>
                        </div>
                        <div className="flex justify-center mt-5 mb-5">
                            <Link to={'/register'}>
                                <a className="font-bold shadow-sm hover:shadow-lg hover:border-b-2 transition">Create Account</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        
        </div>
    )
}

export default Login