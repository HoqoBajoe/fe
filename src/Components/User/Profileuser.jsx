import React, { useEffect, useState } from 'react'
import { Axios } from '../../Helper/axios'
import Swal from 'sweetalert2';
import moment from "moment";
import Gambar from "../../Images/profile.svg"
import Nav from '../Navigation/Nav';
import Footer from '../Navigation/Footer';

function Profileuser() {
    const [userProfile, setUserProfile] = useState({
        id: "",
        nama: "",
        email: "",
        created_at: "",
    });

    const [edit, setEdit] = useState(false)

    // const [form, setForm] = useState({
    //     nama: "",
    //     email: ""
    // })

    const id  = userProfile.id

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setUserProfile({ ...userProfile, [name]: value });
    };

    const [historyTrans, setHistoryTrans] = useState([])

    // const fetchHistoryTrans = () => {
    //     Axios.get(`/history`).then((resp) =>{
    //         setHistoryTrans({
    //             nama_paket: resp.data.data.nama_paket,
    //             metode: resp.data.data.metode,
    //             pax: resp.data.data.pax,
    //             total: resp.data.data.total,
    //             status: resp.data.data.status,
    //             created_at: resp.data.data.created_at,
    //         })
    //     })
    // }

     const fetchHistoryTrans = () => {
        Axios.get(`/history`).then((resp) =>{
            setHistoryTrans(resp.data.data)
        })
    }

    const fetchData = () => {
        Axios.get(`/account`).then((resp) =>{
            setUserProfile({
                id: resp.data.data.id,
                nama: resp.data.data.nama,
                email: resp.data.data.email,
                created_at: resp.data.data.created_at,
            })
        })
    }
    console.log("id", id)

    const onClickEdit = (e) => {
        e.preventDefault();

        setEdit(true)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        
        Axios
            .put(`/user/update/${id}`,{...userProfile})
            .then((response) => {
                console.log(response);
                Swal.fire(
                    'Success!',
                    'Update Profile success..',
                    'success'
                )
                setEdit(false)
            })
            .catch((error) => {
                console.log(error)
                setEdit(false)
                Swal.fire(
                    'Failed!',
                    'Update Profile failed..',
                    'error'
                )
            })
    }

    useEffect(() => {
        fetchData();
        fetchHistoryTrans();
    }, [setUserProfile,setHistoryTrans])

    console.log("data", userProfile)
    return (
        <div>
            <Nav/>
            <div className='w-1/2 mx-auto my-20'>
                <img src={Gambar} className='w-2/5 mx-auto mb-10'/>
                <div className='border border-gray-light rounded-lg p-3'>
                    <h1 className='text-xl font-bold mb-2 mt-3 text-blue-text'>My Profile</h1>
                    <div className='flex justify-end'>
                        <button onClick={onClickEdit} className='text-white bg-btn p-2 rounded-lg w-32 mb-5'>Edit Profile</button>
                    </div>
                    {edit === false ? 
                        <form method='PUT' action='#'>
                            <div className='flex items-center mb-5'>
                                <h3 className="text-lg sm:text-base font-medium text-black w-1/2">Nama paket</h3>
                                <input disabled type="text" name="nama" value={userProfile.nama} onChange={onChange} className='border border-gray-light p-2 w-full rounded-md bg-[#e9ecef] text-blue-text'/><br/>
                            </div>
                            <div className='flex items-center'>
                                <h3 className="text-lg sm:text-base font-medium text-black w-1/2">Destinasi Wisata</h3>
                                <input disabled type="text" name="email" value={userProfile.email} onChange={onChange} className='border border-gray-light p-2 w-full rounded-md bg-[#e9ecef] text-blue-text'/><br/>
                            </div>

                            <div className='flex justify-center'>
                                <button type='submit' onClick={onSubmit} disabled className='text-white bg-[#ff6b6b] p-2 rounded-md w-32 mt-5'>Save</button>
                            </div>
                        </form>
                        :
                        <form method='PUT' action='#'>
                            <div className='flex items-center mb-5'>
                                <h3 className="text-lg sm:text-base font-medium text-black w-1/2">Nama paket</h3>
                                <input type="text" name="nama" value={userProfile.nama} onChange={onChange} className='border border-gray-light p-2 w-full rounded-md'/><br/>
                            </div>

                            <div className='flex items-center'>
                                <h3 className="text-lg sm:text-base font-medium text-black w-1/2">Destinasi Wisata</h3>
                                <input type="text" name="email" value={userProfile.email} onChange={onChange} className='border border-gray-light p-2 w-full rounded-md'/><br/>
                            </div>

                            <div className='flex justify-center'>
                                <button type='submit' onClick={onSubmit} className='text-white bg-btn p-2 rounded-md w-32 mt-5'>Save</button>
                            </div>
                        </form>
                    }
                    

                    {/* <p>{userProfile.nama}</p>
                    <p>{userProfile.email}</p> */}
                    {/* <p>{userProfile.created_at}</p> */}
                    <div className='border-t-2 border-gray-light mt-10'>
                    <h1 className='text-xl font-bold mb-8 mt-5 text-blue-text'>History Transaction</h1>
                    {historyTrans?.map((item) => (
                        <div className='bg-white p-2 flex rounded-lg drop-shadow-md border border-gray-light mb-3'>
                            <div className='w-2/5'>
                                <p>{item.nama_paket}</p>
                                <div className='flex'>
                                    <p className='mr-1'>{item.pax}</p>
                                    <p className='mr-1'>x</p>
                                    <p>Rp. {item.harga}</p>
                                </div>
                                
                            </div>
                            
                            <div className='w-2/5'>
                                <p>{item.metode}</p>
                                <p>{moment(item.created_at).format('LL')}</p>
                            </div>
                            
                            <div className=''>
                                <p>Total</p>
                                <p>{item.total}</p>
                            </div>
                            
                            
                        </div>
                    ))}
                    </div>
                </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Profileuser