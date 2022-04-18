import React, { useState } from 'react'
import { Axios } from '../../Helper/axios';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

function RegisUser() {
    const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
    })

    const [errorMsg, setErrorMsg] = useState({
        nameError: "",
        emailError: "",
        passError: "",
    });

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const validate = () => {
        let nameError = "";
        let emailError = "";
        let passError = "";
        const regexName = /^[a-zA-Z ]{3,}$/;
        const regexEmail =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const regexPassword = /.{6,}$/;


        if(!form.nama){
            nameError = "Name cannot be blank"
        } else if (!regexName.test(form.nama)){
            nameError = "Min. 3 character and String Only"
        }

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

        if(emailError || nameError || passError){
            setErrorMsg({nameError, emailError, passError});
            return false;
        }

        return true
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if(isValid){
            Axios
            .post(`/register`,{...form})
            .then((response) => {
                Swal.fire(
                    'Register Success!',
                    'Please login..',
                    'success'
                )
                setForm({
                    nama: "",
                    email: "",
                    password: "", 
                })
                setErrorMsg({
                    nameError: "",
                    emailError: "",
                    passError: "",
                })
            })
            .catch((error) => {
                var res = error.response.data;

                if (res.email) {
                    Swal.fire(
                        "Register Failed!",
                        "Email sudah dipakai, tolong hubungi administrator",
                        'error'
                    )
                }
                if (res.password) {
                    Swal.fire(
                        "Register Failed!",
                        "Password wajib 6 character",
                        'error'
                    )
                }

                Swal.fire(
                    "Register Failed!",
                    "Hubungi administrator!",
                    'error'
                )
            })
        }
    }
    return (
        <div>
            <div className='static'>
            <div className="bg-home h-screen bg-cover bg-no-repeat flex">
                <div className='container mx-auto my-auto'>
                    <div className='w-1/3 m-auto mt-36 p-2 border-solid rounded-xl shadow-2xl mb-20 bg-ivory min-w-max sm:max-w-xl'>
                        <h1 className="text-3xl sm:text-4xl mt-6 font-bold text-black mb-8 text-center">Hoqo Bajoe</h1>
                        <form method='POST' action='#'>
                            <div className="mb-2 mt-10 lg:mx-10 sm:mx-5 md:mx-5">
                                <h3 className="text-lg sm:text-xl font-medium text-black mb-1">Nama</h3>
                                <div>
                                    <input 
                                    type="text" 
                                    name="nama" 
                                    value={form.nama} 
                                    onChange={onChange} 
                                    className='w-full rounded-lg p-4 h-10 shadow-md leading-tight hover:shadow-lg transition'/>
                                    <p className='text-red'>{errorMsg.nameError}</p>
                                </div>  
                            </div>

                            <div className="mb-2 mt-5 lg:mx-10 sm:mx-5 md:mx-5">
                                <h3 className="text-lg sm:text-xl font-medium text-black mb-1">Email</h3>
                                <div>
                                    <input 
                                        type="email" 
                                        name="email" 
                                        value={form.email} 
                                        onChange={onChange} 
                                        className='w-full rounded-lg p-4 h-10 shadow-md leading-tight hover:shadow-lg transition'/>
                                    <p className='text-red'>{errorMsg.emailError}</p>
                                </div>
                            </div>
                            <div className="mb-4 mt-5 lg:mx-10 sm:mx-5 md:mx-5">
                                <h3 className="text-xl sm:text-xl font-medium text-black mb-1">Password</h3>
                                <div>
                                    <input 
                                        type="password" 
                                        name="password" 
                                        value={form.password} 
                                        onChange={onChange} 
                                        className='w-full rounded-lg p-4 h-10 shadow-md leading-tight hover:shadow-lg transition'/>
                                    <p className='text-red'>{errorMsg.passError}</p>
                                </div>
                            </div>
                            <div className='flex justify-center mt-10'>
                            <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5 uppercase font-semibold shadow-md  hover:bg-gray-white'>Sign Up</button>
                            </div>
                            <div className="flex justify-center mt-5 mb-5">
                                <Link to={'/login'}>
                                    <a className="font-bold shadow-sm hover:shadow-lg hover:border-b-2 transition">Back To Login</a>
                                </Link>
                            </div>
                        </form>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    )
}

export default RegisUser