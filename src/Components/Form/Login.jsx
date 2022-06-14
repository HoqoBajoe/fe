import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Cookies from 'universal-cookie';
import { Base64 } from 'js-base64';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'
import { login } from '../../Redux/AdminSlice';

function Login() {
    const [form, setForm] = useState({
        email: "",
        password: "",
    })

    const [errorMsg, setErrorMsg] = useState({
        emailError: "",
        passError: "",
    });

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const cookies = new Cookies();

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const validate = () => {
        let emailError = "";
        let passError = "";
        const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPassword = /.{6,}$/;

        if(!form.email){
            emailError = "Email cannot be blank"
        } else if(!regexEmail.test(form.email)){
            emailError = "Invalid email format"
        }

        if(!form.password){
            passError = "password cannot be blank"
        } else if (!regexPassword.test(form.password)){
             passError = "Min. 6 character"
        }

        if(emailError || passError){
            setErrorMsg({emailError, passError});
            return false;
        }

        return true
    }

    const onSubmit = (e) =>{
        const isValid = validate();
        if(isValid){
            axios
            .post('https://hoqobajoe.herokuapp.com/api/login',{...form})
            .then((resp) =>{
                const hash = Base64.encode(resp.data.data.token);
                cookies.set("token", hash, {
                path: "/dashboard",
                domain: window.location.hostname,
                });
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
                    Swal.fire(  
                        'Login Success!',
                        'Welcome to HoqoBajoe..',
                        'success'
                        )
                    if (resp.data.data.role === 'super-admin' || resp.data.data.role === 'admin'){
                        navigate("/dashboard")
                    } else {
                        navigate('/')
                    }
                    })
            .catch(err => {
                Swal.fire(
                    "Login Failed!",
                    "Wrong Email/Password",
                    'error'
                )
            }
            );
        }
    }
    
    return (
        <div className='static'>
            <div className="bg-home h-screen bg-cover bg-no-repeat flex">
                <div className='container mx-auto my-auto text-blue-text'>
                    <div className='w-1/3 m-auto mt-36 p-2 border-solid rounded-md shadow-2xl mb-20 bg-ivory min-w-max sm:max-w-xl'>
                        <h1 className="text-3xl sm:text-4xl mt-6 font-bold text-black mb-8 text-center">Hoqo Bajoe</h1>
                        <form method='POST' action='#'>
                            <div className="mb-2 mt-10 lg:mx-10 sm:mx-5 md:mx-5">
                                <h3 className="text-lg sm:text-xl font-medium text-black">Email</h3>
                                <div className='mb-3'>
                                    <input type="email" name="email" value={form.email} onChange={onChange} className='w-full rounded-md p-4 h-10 shadow-md leading-tight hover:shadow-lg transition'/>
                                    <p className='text-red'>{errorMsg.emailError}</p>
                                </div>
                            </div>
                            <div className="mb-4 mt-5 lg:mx-10 sm:mx-5 md:mx-5">
                                <h3 className="text-xl sm:text-xl font-medium text-black">Password</h3>
                                <div className='mb-3'>
                                    <input type="password" name="password" value={form.password} onChange={onChange} className='w-full rounded-md p-4 h-10 shadow-md leading-tight hover:shadow-lg transition'/>
                                    <p className='text-red'>{errorMsg.passError}</p>

                                </div>
                            </div>
                        </form>
                        <div className='flex justify-center mt-10'>
                            <button type='submit' onClick={onSubmit} className='text-white bg-blue p-2 rounded-md w-72 mt-5 uppercase font-semibold shadow-md   hover:bg-blue-dark'>Login</button>
                        </div>
                        <div className="flex justify-center mt-5 mb-5">
                            <Link to={'/register'}>
                                <a href="!#" className="font-bold shadow-sm hover:shadow-lg hover:border-b-2 transition">Create Account</a>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login