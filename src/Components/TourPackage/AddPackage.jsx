import React, { useState } from 'react'
import { Axios } from '../../Helper/axios';

function AddPackage(props) {
    const [form, setForm] = useState({
        nama_paket: "",
        destinasi_wisata: "",
        deskripsi:"",
        photo_wisata: "",
        harga: 0,
    })

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const onSubmit = (e) => {
        e.preventDefault();
        const destinasi = form.destinasi_wisata.split(',');
        const gambar = form.photo_wisata.split(',');
        Axios
            .post(`/paket/create`,{...form, destinasi_wisata: destinasi, photo_wisata:gambar})
            .then((response) => {
                console.log(response);
                alert('Berhasil menambah paket wisata')
                
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(destinasi);
        console.log(gambar);
    }

  return (
    <div>
        <div className='border border-gray-light mt-20'></div>
        <div className='bg-white rounded-md drop-shadow-lg  p-7 border border-gray-light w-4/6 mx-auto mb-16 mt-20'>
            <h1 className="text-3xl sm:text-4xl font-bold text-center border-b p-1 mb-10 border-gray-light">Add Package</h1>

            <form method='POST' action='#' className='text-[#495057]'>
                <div className='flex justify-between'>
                    <p className='text-xl sm:text-xl font-medium '>Nama paket</p>
                    <input type="text" name="nama_paket" value={form.nama_paket} onChange={onChange} className='border border-gray-light mb-3 p-1 w-9/12 rounded'/>
                </div>

                <div className='flex justify-between'>
                    <h3 className="text-xl sm:text-xl font-medium">Destinasi Wisata</h3>
                    <input type="text" name="destinasi_wisata" value={form.destinasi_wisata} onChange={onChange} className='border border-gray-light mb-3 p-1 w-9/12 rounded'/>
                </div>

                <div className='flex justify-between'>
                    <h3 className="text-xl sm:text-xl font-medium">Deskripsi</h3>
                    <input type="text" name="deskripsi" value={form.deskripsi} onChange={onChange} className='border border-gray-light mb-3 p-1 w-9/12 rounded'/>
                </div>

                <div className='flex justify-between'>
                    <h3 className="text-xl sm:text-xl font-medium">Foto Wisata</h3>
                    <input type="text" name="photo_wisata" value={form.photo_wisata} onChange={onChange} className='border border-gray-light mb-3 p-1 w-9/12 rounded'/>
                </div>

                <div className='flex justify-between'>
                    <h3 className="text-xl sm:text-xl font-medium">harga</h3>
                    <input type="number" name="harga" value={form.harga} onChange={onChange} className='border border-gray-light mb-3 p-1 w-9/12 rounded'/>
                </div>

                <div className='flex justify-center'>
                    <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5'>Add Package</button>
                </div>
            </form>
        </div>
    </div>
    
  )
}

export default AddPackage