import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Axios } from '../../Helper/axios';
import { login } from '../../Redux/AdminSlice';
import { Base64 } from "js-base64";
import axios from 'axios';

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
                
            })
            .catch(err => setError("Anda Belum terdaftar"));
        // console.log("masuk")
    }
    
  
    return (
        <div className='static'>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-xl drop-shadow-lg  p-7 border border-gray-light'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">Hoqo Bajoe</h1>
                <form method='POST' action='#'>
                    <h3 className="text-xl sm:text-xl font-medium text-black">Email</h3>
                    <input type="email" name="email" value={form.email} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

                    <h3 className="text-xl sm:text-xl font-medium text-black">Password</h3>
                    <input type="password" name="password" value={form.password} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

                </form>
                <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5'>Login</button>
            </div>
            
        </div>
    )
}

export default Login