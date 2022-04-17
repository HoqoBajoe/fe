import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import { Axios } from '../../Helper/axios';
import useValidateForm from '../../Hooks/useValidateForm';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';


function RegisAdmin() {
    
    const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
    })

    // const

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
            .post(`/admin/create`,{...form})
            .then((response) => {
                console.log(response);
                alert("Berhasil Register Admin")
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
                setErrorMsg({
                    ...errorMsg,
                    auth: error.response.data.errors[0],
                });
            })
        }
        
        // }
    }
    console.log(errorMsg)
    return (
        <div>
            <div className='border border-gray-light mt-20'></div>
            <div className='bg-white rounded-md drop-shadow-lg  p-7 border border-gray-light w-3/5 mx-auto mb-16 mt-20'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">Add Admin</h1>
                
                <form method='POST' action='#'>
                    <div className='flex justify-between'>
                        <p className="text-xl font-medium">Nama</p>
                        <div className='mb-3'>
                            <input 
                                type="text" 
                                name="nama" 
                                value={form.nama} 
                                onChange={onChange}
                                className='border border-gray-light p-1 w-96 rounded'/>
                                
                            <p className='text-red'>{errorMsg.nameError}</p>
                        </div>
                        
                    </div>
                    
                    <div className='flex justify-between'>
                        <p className="text-xl font-medium">Email</p>
                        <div className='mb-3'>
                            <input  
                            type="email" 
                            name="email" 
                            value={form.email}
                            onChange={onChange}
                            className='border border-gray-light p-1 w-96 rounded'/>
                            <p className='text-red'>{errorMsg.emailError}</p>
                        </div>
                        
                    </div>

                    <div className='flex justify-between'>
                        <p className="text-xl font-medium">Password</p>
                        <div className='mb-3'>
                            <input  
                            type="password" 
                            name="password" 
                            value={form.password} 
                            onChange={onChange}
                            className='border border-gray-light p-1 w-96 rounded'/>
                            <p className='text-red'>{errorMsg.passError}</p>
                        </div>
                        
                    </div>
                    
                    <div className='flex justify-center'>
                        <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5'>Register</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default RegisAdmin