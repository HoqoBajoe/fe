import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Axios } from '../../Helper/axios';
import { login } from '../../Redux/AdminSlice';

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const onSubmit = (e) =>{
        e.preventDefault();
        Axios
            .post(`/login`,{...form})
            .then((resp) =>{
                console.log("ini respon: ", resp)
                dispatch(
                    login({
                        id: resp.data.data.id,
                        nama: resp.data.data.nama,
                        email: resp.data.data.email,
                        role: resp.data.data.role,
                        token: resp.data.data.token,
                    })
                )
                .then(function(){
                    navigate("/dashboard")
                })
            })
            .catch((error) =>{
                // console.log(error.response.data.errors[0])
            })
        // console.log("masuk")
    }
    console.log(form)
    
  
    return (
        <div className='static'>
            <div className='absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-xl drop-shadow-lg  p-7 border border-gray-light'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">Hoqo Bajoe</h1>
                <form onSubmit={onSubmit}>
                    <h3 className="text-xl sm:text-xl font-medium text-black">Email</h3>
                    <input type="email" name="email" value={form.email} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

                    <h3 className="text-xl sm:text-xl font-medium text-black">Password</h3>
                    <input type="password" name="password" value={form.password} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

                    <button type='submit' className='text-white bg-gray p-2 rounded-lg w-72 mt-5'>Login</button>
                </form>
            </div>
            
        </div>
    )
}

export default Login