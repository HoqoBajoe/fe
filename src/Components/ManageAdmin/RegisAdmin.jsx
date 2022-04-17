import React, { useState } from 'react'
import { Axios } from '../../Helper/axios';
import useValidateForm from '../../Hooks/useValidateForm';
import Swal from 'sweetalert2';

function RegisAdmin() {
    const { validateForm } = useValidateForm
  const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
    })

    const [errorMsg, setErrorMsg] = useState({});

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const onBlur = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        const messages = validateForm(name, value);
        setErrorMsg({ ...errorMsg, ...messages });
  };


    const onSubmit = (e) => {
        e.preventDefault();
        Axios
            .post(`/admin/create`,{...form})
            .then((response) => {
                console.log(response);
                Swal.fire(
                    'Add admin success!',
                    'Register new admin successfully..',
                    'success'
                )
                setForm({
                    nama: "",
                    email: "",
                    password: "",
                })
            })
            .catch((error) => {
                setErrorMsg({
                    ...errorMsg,
                });
                Swal.fire(
                    'Add admin error!',
                    'Register new admin error..',
                    'error'
                )
            })
    }
    return (
        <div>
            <div className='border border-gray-light mt-20'></div>
            <div className='bg-white rounded-md drop-shadow-lg  p-7 border border-gray-light w-3/5 mx-auto mb-16 mt-20'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">Add Admin</h1>
                
                <form method='POST' action='#'>
                    <div className='flex justify-between'>
                        <p className="text-xl font-medium">Nama</p>
                        <input type="text" required name="nama" value={form.nama} onChange={onChange} className='border border-gray-light mb-3 p-1 w-96 rounded'/>
                    </div>
                    <div className='flex justify-between'>
                        <p className="text-xl font-medium">Email</p>
                        <input required type="email" name="email" value={form.email} onChange={onChange} className='border border-gray-light mb-3 p-1 w-96 rounded'/>
                    </div>

                    <div className='flex justify-between'>
                        <p className="text-xl font-medium">Password</p>
                        <input required type="password" name="password" value={form.password} onChange={onChange} className='border border-gray-light mb-3 p-1 w-96 rounded'/>
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