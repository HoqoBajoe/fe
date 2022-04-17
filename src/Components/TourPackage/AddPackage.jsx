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

    const [errorMsg, setErrorMsg] = useState({
        nameError: "",
        destinasiError: "",
        deskripsiError: "",
        fotoError: "",
        hargaError: "",
    });

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const validate = () => {
        let nameError = "";
        let destinasiError = "";
        let deskripsiError = "";
        let fotoError = "";
        let hargaError = "";
        const regexNumber = /^[0-9]*$/;


        if(!form.nama_paket){
            nameError = "Name package cannot be blank"
        }

        if(!form.destinasi_wisata){
            destinasiError = "Tourist destination cannot be blank"
        }
        if(!form.deskripsi){
            deskripsiError = "Description cannot be blank"
        }
        if(!form.photo_wisata){
            fotoError = "Picture cannot be blank"
        }

        if(!form.harga){
            hargaError = "Price cannot be blank"
        }
        
        if(destinasiError || nameError || hargaError || fotoError || deskripsiError){
            setErrorMsg({nameError, destinasiError, deskripsiError, fotoError, hargaError});
            return false;
        }

        return true
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if(isValid){
        const destinasi = form.destinasi_wisata.split(',');
        const gambar = form.photo_wisata.split(',');
        Axios
            .post(`/paket/create`,{...form, destinasi_wisata: destinasi, photo_wisata:gambar})
            .then((response) => {
                console.log(response);
                alert('Berhasil menambah paket wisata')
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
            })
        }
    }

  return (
    <div>
        <div className='border border-gray-light mt-20'></div>
        <div className='bg-white rounded-md drop-shadow-lg  p-7 border border-gray-light w-4/6 mx-auto mb-16 mt-20'>
            <h1 className="text-3xl sm:text-4xl font-bold text-center border-b p-1 mb-10 border-gray-light">Add Package</h1>

            <form method='POST' action='#' className='text-[#495057]'>
                <div className='flex gap-7'>
                    <p className='text-xl sm:text-xl font-medium w-56'>Nama paket</p>
                    <div className='mb-3 w-full'>
                        <input type="text" name="nama_paket" value={form.nama_paket} onChange={onChange} className='border border-gray-light p-1 w-full rounded'/>
                        <p className='text-red'>{errorMsg.nameError}</p>
                    </div>
                </div>

                <div className='flex gap-7'>
                    <h3 className="text-xl sm:text-xl font-medium w-56">Destinasi Wisata</h3>
                    <div className='mb-3 w-full'>
                        <input type="text" name="destinasi_wisata" value={form.destinasi_wisata} onChange={onChange} className='border border-gray-light p-1 w-full rounded'/>
                        <p className='text-red'>{errorMsg.destinasiError}</p>
                    </div>
                </div>

                <div className='flex gap-7'>
                    <h3 className="text-xl sm:text-xl font-medium w-56">Deskripsi</h3>
                    <div className='mb-3 w-full'>
                        <input type="text" name="deskripsi" value={form.deskripsi} onChange={onChange} className='border border-gray-light p-1 w-full rounded'/>
                        <p className='text-red'>{errorMsg.deskripsiError}</p>
                    </div>
                </div>

                <div className='flex gap-7'>
                    <h3 className="text-xl sm:text-xl font-medium w-56">Foto Wisata</h3>
                    <div className='mb-3 w-full'>
                        <input type="text" name="photo_wisata" value={form.photo_wisata} onChange={onChange} className='border border-gray-light p-1 w-full rounded'/>
                        <p className='text-red'>{errorMsg.fotoError}</p>
                    </div>
                </div>

                <div className='flex gap-7'>
                    <h3 className="text-xl sm:text-xl font-medium w-56">harga</h3>
                    <div className='mb-3 w-full'>
                        <input type="number" name="harga" value={form.harga} onChange={onChange} className='border border-gray-light p-1 w-full rounded'/>
                        <p className='text-red'>{errorMsg.hargaError}</p>
                    </div>
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