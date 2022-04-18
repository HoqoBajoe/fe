import React, { useEffect, useState } from 'react'
import { Axios } from '../../Helper/axios';
import Swal from 'sweetalert2';

function UpdatedPackage(props) {
    const { id }  = props
    const [form, setForm]= useState({
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

    const getPackageByID = async () => {
        await Axios.get(`/paket/${id}`).then((resp) =>{
            setForm({
                nama_paket: resp.data.data.nama_paket,
                destinasi_wisata: resp.data.data.destinasi_wisata,
                deskripsi: resp.data.data.deskripsi,
                photo_wisata: resp.data.data.photo_wisata,
                harga: resp.data.data.harga,
            })
        })
    }

    useEffect(() =>{
        getPackageByID();
    }, [id])


    const onSubmit = (e) => {
        e.preventDefault();
        const destinasi = form.destinasi_wisata.split(',');
        const gambar = form.photo_wisata.split(',');
        
        Axios
            .put(`/paket/update/${id}`,{...form, destinasi_wisata: destinasi, photo_wisata:gambar})
            .then((response) => {
                console.log(response);
                Swal.fire(
                    'Success!',
                    'Update Tour Package success..',
                    'success'
                )
                setForm({
                    nama_paket: "",
                    destinasi_wisata: "",
                    deskripsi:"",
                    photo_wisata: "",
                    harga: 0,
                })
            })
            .catch((error) => {
                console.log(error)
                Swal.fire(
                    'Failed!',
                    'Update Tour Package failed..',
                    'error'
                )
            })
    }

    console.log(id)
    return (
        <div>
            <form method='PUT' action='#'>
                <h3 className="text-xl sm:text-lg font-medium text-black">Nama paket</h3>
                <input type="text" name="nama_paket" value={form.nama_paket} onChange={onChange} className='border border-gray-light mb-3 p-1 w-full rounded-md'/><br/>

                <h3 className="text-xl sm:text-lg font-medium text-black">Destinasi Wisata</h3>
                <input type="text" name="destinasi_wisata" value={form.destinasi_wisata} onChange={onChange} className='border border-gray-light mb-3 p-1 w-full rounded-md'/><br/>
                
                <h3 className="text-xl sm:text-lg font-medium text-black">Deskripsi</h3>
                <input type="text" name="deskripsi" value={form.deskripsi} onChange={onChange} className='border border-gray-light mb-3 p-1 w-full rounded-md'/><br/>
                
                <h3 className="text-xl sm:text-lg font-medium text-black">Foto Wisata</h3>
                <input type="text" name="photo_wisata" value={form.photo_wisata} onChange={onChange} className='border border-gray-light mb-3 p-1 w-full rounded-md'/><br/>

                <h3 className="text-xl sm:text-lg font-medium text-black">harga</h3>
                <input type="number" name="harga" value={form.harga} onChange={onChange} className='border border-gray-light mb-3 p-1 w-full rounded-md'/><br/>
                
                <div className='flex justify-center'>
                    <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5'>Update Package</button>
                </div>
            </form>
        </div>
  )
}

export default UpdatedPackage