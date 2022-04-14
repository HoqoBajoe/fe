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
        <div>
            <div className="bg-home h-screen bg-cover bg-no-repeat flex">
                <div className="container">
                    <div className="w-1/3 m-auto mt-36 p-2 border-solid rounded-xl shadow-2xl mb-20 bg-ivory min-w-max sm:max-w-xl">               
                        <form onSubmit={onSubmit}>
                            <h1 className="text-center my-9 text-4xl font-extrabold ">Hoqo Bajoe</h1>
                            <div className="mb-4 mt-14 lg:mx-10 sm:mx-5 md:mx-5">
                                <label className="block mb-2 font-semibold">Email</label>
                                <input className="w-full rounded-lg p-4 h-10 shadow-md leading-tight hover:shadow-lg transition" type="email" name="email" value={form.email} onChange={onChange}></input>
                            </div>
                            <div className="mb-4 lg:mx-10 sm:mx-5 md:mx-5">
                                <label className="block mb-2 font-semibold" for="password">Password</label>
                                <input className="w-full rounded-lg p-4 h-10 shadow-md leading-tight hover:shadow-lg transition" type="password" name="password" value={form.password} onChange={onChange}></input>
                            </div>
                            <div className="flex justify-center mt-20">
                                <button type="submit" className="bg-gray px-6 py-2.5 leading-tight uppercase text-white font-semibold rounded-xl shadow-md hover:bg-gray-green w-56 transition">Login</button>   
                            </div>
                            <div className="flex justify-center mt-5 mb-5">
                                <a href="#" className="font-bold shadow-sm hover:shadow-lg hover:border-b-2 transition">Create Account</a>
                            </div>
                        </form>                 
                    </div>
                </div>
            </div>
            
        </div>
    )
}

export default Login