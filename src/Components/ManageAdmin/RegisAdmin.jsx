import React, { useState } from 'react'
import { Axios } from '../../Helper/axios';

function RegisAdmin() {
  const [form, setForm] = useState({
        nama: "",
        email: "",
        password: "",
    })

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        Axios
            .post(`/admin/create`,{...form})
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error)
            })
    }
    return (
        <div>
            <div className='static'>
                <div className='bg-white rounded-xl drop-shadow-lg  p-7 border border-gray-light'>
                    <h1 className="text-3xl sm:text-4xl font-bold text-black mb-8 text-center">Hoqo Bajoe</h1>
                    <form method='POST' action='#'>
                        <h3 className="text-xl sm:text-xl font-medium text-black">Nama</h3>
                        <input type="text" name="nama" value={form.nama} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

                        <h3 className="text-xl sm:text-xl font-medium text-black">Email</h3>
                        <input type="email" name="email" value={form.email} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

                        <h3 className="text-xl sm:text-xl font-medium text-black">Password</h3>
                        <input type="password" name="password" value={form.password} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>
                        <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5'>Register</button>
                    </form>
                </div>
                
            </div>
        </div>
    )
}

export default RegisAdmin