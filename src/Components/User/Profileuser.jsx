import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { Axios } from '../../Helper/axios'
import Swal from 'sweetalert2';
import moment from "moment";
import Gambar from "../../Images/profile.svg"
import Nav from '../Navigation/Nav';
import Footer from '../Navigation/Footer';
import { useNavigate } from 'react-router-dom';
import { FiLogOut } from "react-icons/fi";
import { logout } from '../../Redux/AdminSlice';

function Profileuser() {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const [userProfile, setUserProfile] = useState({
        id: "",
        nama: "",
        email: "",
        created_at: "",
    });

    const [active, setActive] = useState({
        show: "Accepted",
    })

    const [edit, setEdit] = useState(false)

    // const [form, setForm] = useState({
    //     nama: "",
    //     email: ""
    // })

    const id  = userProfile.id

    const onPending = (e) => {
        setActive({ show : "Pending" });
    };
    const onSuccess = (e) => {
        setActive({ show : "Accepted" });
    };
    const onReject = (e) => {
        setActive({ show : "Reject" });
    };

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

    const onClick = () => {
        dispatch(logout());
        sessionStorage.removeItem('token');
        Swal.fire(
        "Logout success!",
        "Redirecting to Homepage..",
        'success'
        )
        if (window.location.pathname) {
        navigate("/");
        } else {
        window.location.reload();
        }
    };

    useEffect(() => {
        fetchData();
        fetchHistoryTrans();
    }, [setUserProfile,setHistoryTrans])

    console.log("data", userProfile)
    console.log("transaksi: ", historyTrans)
    return (
        <div>
            <Nav/>
            <div className='w-1/2 mx-auto my-20 text-blue-text'>
                <img src={Gambar} className='w-2/5 mx-auto mb-10'/>
                <div className='border border-gray-light rounded-lg p-3'>
                    <h1 className='text-xl font-bold mb-2 mt-3 text-blue-text'>My Profile</h1>
                    <div className='flex justify-end'>
                        <button onClick={onClickEdit} className='text-white bg-blue hover:bg-blue-dark p-2 rounded-lg w-32 mb-5'>Edit Profile</button>
                    </div>
                    {edit === false ? 
                        <form method='PUT' action='#'>
                            <div className='flex items-center mb-5'>
                                <h3 className="text-lg sm:text-base font-medium text-black w-1/2">Nama</h3>
                                <input disabled type="text" name="nama" value={userProfile.nama} onChange={onChange} className='border border-gray-light p-2 w-full rounded-md bg-[#e9ecef] text-blue-text'/><br/>
                            </div>
                            <div className='flex items-center'>
                                <h3 className="text-lg sm:text-base font-medium text-black w-1/2">Email</h3>
                                <input disabled type="text" name="email" value={userProfile.email} onChange={onChange} className='border border-gray-light p-2 w-full rounded-md bg-[#e9ecef] text-blue-text'/><br/>
                            </div>

                            <div className='flex justify-center'>
                                <button type='submit' onClick={onSubmit} disabled className='text-white bg-blue-light p-2 rounded-md w-32 mt-5'>Save</button>
                            </div>
                        </form>
                        :
                        <form method='PUT' action='#'>
                            <div className='flex items-center mb-5'>
                                <h3 className="text-lg sm:text-base font-medium text-black w-1/2">Nama</h3>
                                <input type="text" name="nama" value={userProfile.nama} onChange={onChange} className='border border-gray-light p-2 w-full rounded-md'/><br/>
                            </div>

                            <div className='flex items-center'>
                                <h3 className="text-lg sm:text-base font-medium text-black w-1/2">Email</h3>
                                <input type="text" name="email" value={userProfile.email} onChange={onChange} className='border border-gray-light p-2 w-full rounded-md'/><br/>
                            </div>

                            <div className='flex justify-center'>
                                <button type='submit' onClick={onSubmit} className='text-white bg-blue hover:bg-blue-dark p-2 rounded-md w-32 mt-5'>Save</button>
                            </div>
                        </form>
                    }
                    

                    {/* <p>{userProfile.nama}</p>
                    <p>{userProfile.email}</p> */}
                    {/* <p>{userProfile.created_at}</p> */}
                    <div className='border-t-2 border-gray-light mt-10'>
                    <h1 className='text-xl font-bold mb-8 mt-5 text-blue-text'>History Transaction</h1>
                    
                    <div className='flex border-b mb-3 border-gray-light'>
                        {active.show == "Pending" ? <p className='p-2 border-x border-t rounded-t border-gray-light cursor-pointer'>Pending</p> : <p onClick={onPending} className='p-2 cursor-pointer'>Pending</p>}
                        {active.show == "Accepted" ?  <p className='p-2 border-x border-t rounded-t border-gray-light cursor-pointer'>Success</p> : <p onClick={onSuccess}  className='p-2 cursor-pointer'>Success</p>}
                        {active.show == "Reject" ? <p className='p-2 border-x border-t rounded-t border-gray-light cursor-pointer'>Reject</p> : <p onClick={onReject} className='p-2 cursor-pointer'>Reject</p>}
                        
                       
                        
                    </div>
                    {/* {} */}
                    {historyTrans?.map((item) => (
                        <div>
                            {item.status == active.show ?
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
                                :
                                <div className='flex justify-center'>
                                    <p className='p-5'>Belum ada transaksi</p>
                                </div>
                            }
                        </div>
                        
                    ))}
                    </div>
                </div>
                <div className='flex justify-end'>
                    <button className='text-white flex bg-blue hover:bg-blue-dark w-48 p-3 gap-3 justify-center rounded-md mt-10' onClick={onClick}> 
                        <FiLogOut className='stroke-white w-6 h-6'/>Logout
                    </button>
                </div>
                
            </div>
            <Footer/>
        </div>
    )
}

export default Profileuser