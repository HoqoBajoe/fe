import React, { useState } from 'react'
import { Axios } from '../../Helper/axios';

function AddPackage() {
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
                
            })
            .catch((error) => {
                console.log(error)
            })
        console.log(destinasi);
        console.log(gambar);
    }

  return (
    <div>
        <h1 className="text-3xl sm:text-4xl font-bold text-black">Add Package</h1>
        <form method='POST' action='#'>
            <h3 className="text-xl sm:text-xl font-medium text-black">Nama paket</h3>
            <input type="text" name="nama_paket" value={form.nama_paket} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

            <h3 className="text-xl sm:text-xl font-medium text-black">Destinasi Wisata</h3>
            <input type="text" name="destinasi_wisata" value={form.destinasi_wisata} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

            <h3 className="text-xl sm:text-xl font-medium text-black">Deskripsi</h3>
            <input type="text" name="deskripsi" value={form.deskripsi} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

            <h3 className="text-xl sm:text-xl font-medium text-black">Foto Wisata</h3>
            <input type="text" name="photo_wisata" value={form.photo_wisata} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>

            <h3 className="text-xl sm:text-xl font-medium text-black">harga</h3>
            <input type="number" name="harga" value={form.harga} onChange={onChange} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>
            
            <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5'>Add Package</button>
        </form>

        {/* <form>
            <h3 className="text-xl sm:text-xl font-medium text-black">Destinasi Wisata</h3>
            <input type="text" onChange={addDestinasi} className='border border-gray-light mb-3 p-1 w-72 rounded-md'/><br/>
            <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5'>Add Package</button>
        </form> */}
    </div>
  )
}

export default AddPackage