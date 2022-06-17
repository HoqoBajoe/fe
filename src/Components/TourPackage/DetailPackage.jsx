import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Axios } from '../../Helper/axios';
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import { FaPlus } from 'react-icons/fa';
import { FaMinus } from 'react-icons/fa';
import { AiFillStar } from 'react-icons/ai';
import moment from "moment";
import Nav from '../Navigation/Nav';
import Footer from '../Navigation/Footer';
import Swal from 'sweetalert2';
import Rating from 'react-rating';
import { useSelector } from 'react-redux';


function DetailPackage() {
    const { id } = useParams()
    const navigate = useNavigate();
    const user = useSelector((state) => state.admin)
    console.log("user: ", user.id)

    const initialValue = {
        nama_paket: "",
        destinasi_wisata: [],
        deskripsi: "",
        photo_wisata: [],
        harga: 0,
    }

    const [form, setForm] = useState({
        stars: 0,
        review: "",
    })

    const [transaction, setTransaction] = useState({
        metode: "",
        pax: "",
    })

    const [tourPackage, setTourPackage] = useState(initialValue);
    const [review, setReview] = useState([])

    const [amount, setAmount] = useState({
        click: 0,
    });

    const increment = () => {
        setAmount({
        click: amount.click + 1,
        });
    };

    const decrement = () => {
        if (amount.click > 0) {
        setAmount({
            click: amount.click - 1,
        });
        } else {
        alert("Masukkan jumlah yang valid");
        }
    };

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setForm({ ...form, [name]: value });
    };

    const onChangeTrans = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        setTransaction({ ...transaction, [name]: value });
    };


    const fetchData = (id) => {
        Axios.get(`/paket/${id}`).then((resp) =>{
            setTourPackage(resp.data.data)
        })
    }
    
    const fetchReview = () => {
        Axios.get(`/review/paket/${id}`).then((resp) =>{
            setReview(resp.data.data)
        })
    }

    const onSubmit = (e, id) => {
        e.preventDefault();

        console.log('form: ',form)
        // masih bermasalah di post karena req data tidak sesuai yg seharusnya int tapi diterima string atau ada masalah lain
        if (user.id !== 0) {
            Axios.post(`/review/paket/${id}`, {...form})
            .then((resp) => {
                console.log(resp)
                console.log("berhasil")
                Swal.fire(
                    'Add review success!',
                    'Register new review successfully..',
                    'success'
                )
                setForm({
                    stars: 0,
                    review: ""
                })
            })
            .catch((error) => {
                console.log(error)
                console.log('ISI: ',form)
                Swal.fire(
                    'Add review error!',
                    'Add new review error..',
                    'error'
                )
            })
        } else {
            Swal.fire(
                'Anda belum melakukan login!',
                'Silahkan masuk terlebih dahulu.',
            )
            navigate("/login")
        }
        
    }

    const onSubmitTransaction = (e) => {
        e.preventDefault();

        const jumlah = amount.click.toString();

        if (user.id !== 0) {
            Axios.post(`/transaction/paket/${id}`, {...transaction, pax: jumlah})
            .then((resp) => {
                console.log(resp)
                console.log("berhasil")
                Swal.fire(
                    'Add transaction success!',
                    'Register new transaction successfully..',
                    'success'
                )
                setTransaction({
                    metode: "",
                    pax: ""
                })
                setAmount({
                    click: 0
                })
            })
            .catch((error) => {
                console.log(error)
                Swal.fire(
                    'Add transaction error!',
                    'Add new transaction error..',
                    'error'
                )
            })
        } else {
            Swal.fire(
                'Anda belum melakukan login!',
                'Silahkan masuk terlebih dahulu.',
            )
            navigate("/login")
        }
        
    }

    const initStars = (star) =>{
        console.log('star: ',star)
        form.stars = star
        
    }



    useEffect(() => {
        fetchData(id);
        fetchReview();
        initStars();
    }, [setTourPackage,setReview, setForm])

    // console.log('tour: ',tourPackage)
    // console.log('review: ',review)
    // console.log('transaksi: ',transaction)
    // console.log('bintang: ',form)
    console.log('id: ',id)
    return (
        <div>
            <Nav/>
            <div className='mb-20 mt-10 text-blue-text'>
                <div className="slide-container w-1/2 h-1/6 mx-auto mb-10 drop-shadow-2xl">
                    <Zoom scale={0.4}>
                    {
                        tourPackage?.photo_wisata.map((each, index) => <img key={index} src={each} className="h-full w-full rounded-lg z-[-1]" />)
                    }
                    </Zoom>
                </div>
                
                <div className='w-1/2 mx-auto'>
                    <h1 className='text-4xl font-bold mb-2'>{tourPackage.nama_paket}</h1>
                    <p className='text-2xl font-bold mb-10'>Rp. {tourPackage.harga}</p>
                    
                    <div className='border-t-2 border-gray-light mb-10'>
                        <p className='text-xl font-bold mb-2 mt-3'>Deskripsi</p>
                        <p className='font-medium'>{tourPackage.deskripsi}</p>
                    </div>
                    
                    <div className='border-t-2 border-gray-light mb-10'>
                        <p className='text-xl font-bold mb-2 mt-3'>Wisata</p>
                        {tourPackage?.destinasi_wisata.map((item, i) =><p key={i}>{item}</p>)}
                    </div>

                    <div className='border-t-2 border-gray-light'>
                        <p className='text-xl font-bold mb-2  mt-3'>Review</p>
                        {review?.map((item) => (
                            <div key={item.id} className='flex items-center justify-between gap-12 bg-white text-[#495057] rounded-md drop-shadow p-3 w-full mx-auto mb-8'>
                                <div>
                                    <p>{item.nama}</p>
                                    <p className='text-sm italic text-[#adb5bd]'>{moment(item.created_at, "YYYYMMDD").fromNow()}</p>
                                </div>

                                <div>
                                    <div className='flex items-center gap-2'>
                                        <AiFillStar className='fill-[#ffd43b]'/>
                                        <p>{item.stars}</p>
                                    </div>
                                    
                                    <p>{item.review}</p>
                                </div>
                                
                                
                            </div>
                        ))}
                    </div>

                     {/* <Rating
                        emptySymbol={<AiFillStar className='fill-gray-light'/>}
                        fullSymbol={<AiFillStar className='fill-[#ffd43b]'/>}
                        onChange={(star) => initStars(star)}
                        initialRating={form.rating}
                    /> */}

                    <div className='bg-white rounded-md drop-shadow p-3 w-full mx-auto mb-8'>
                        
                        
                        
                        <form method='POST' action='#'>
                            <div className='flex items-center gap-16 mb-5'>
                                <p className="text-lg font-medium">Rating</p>
                                <Rating
                                    emptySymbol={<AiFillStar className='fill-gray-light'/>}
                                    fullSymbol={<AiFillStar className='fill-[#ffd43b]'/>}
                                    onChange={(star) => initStars(star)}
                                    initialRating={form.stars}
                                />
                            </div>
                            <p className="text-lg font-medium mb-1">Comment</p>
                            <textarea 
                                rows={6} 
                                className='border w-full rounded-md border-gray-light'
                                name="review" 
                                value={form.review}
                                onChange={onChange}>
                            </textarea>
                            <div className='flex justify-end'>
                                <button type='submit' onClick={onSubmit} className='text-white bg-blue p-2 rounded-lg w-40 mt-5'>Add Review</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

           

            {/* <div className='bg-white rounded-md drop-shadow-lg  p-7 border border-gray-light w-3/5 mx-auto mb-16 mt-20'>                
                <form method='POST' action='#'>
                    <div className='flex justify-between'>
                        <p className="text-xl font-medium">Stars</p>
                        <div className='mb-3'>
                            <input 
                                type="number" 
                                name="stars" 
                                value={form.stars} 
                                onChange={onChange}
                                className='border border-gray-light p-1 w-96 rounded'/>
                                
                        </div>
                    </div>
                    <div className='flex justify-between'>
                        <p className="text-xl font-medium">Review</p>
                        <div className='mb-3'>
                            <input  
                            type="text" 
                            name="feedback" 
                            value={form.feedback}
                            onChange={onChange}
                            className='border border-gray-light p-2 w-full rounded'/>
                        </div>
                        
                    </div>
                    <div className='flex justify-center'>
                        <button type='submit' onClick={onSubmit} className='text-white bg-gray p-2 rounded-lg w-72 mt-5'>Add Review</button>
                    </div>
                </form>
            </div> */}

            <div className='relative'>
                <div className='bg-white rounded-md drop-shadow-md p-3 border border-gray-light w-1/5 right-5 top-24 fixed'>                
                    <h1 className="text-xl font-bold mb-3 border-b-2 border-gray-light pb-3">Transaction</h1>
                    <form method='POST' action='#'>
                        <div className='flex justify-between mb-4 border p-2 border-gray-light rounded-md'>
                            {amount.click <= 0 ? <FaMinus className="fill-gray-light"/> : <FaMinus onClick={decrement} className="fill-btn"/>}
                            <div className='text-[#495057]'>{amount.click}</div>
                            <FaPlus onClick={increment} className="fill-btn"/>
                        </div>
                        <div className=''>
                            <p className="text-lg font-medium mb-1 text-[#495057]">Payment Method</p>
                            <div className='mb-3'>
                                <select name="metode"  value={transaction.metode} onChange={onChangeTrans} className='border border-gray-light rounded-md w-full p-2 text-[#495057]'>
                                    <option></option>
                                    <option value='Virtual Account BNI'>BNI</option>
                                    <option value='Virtual Account BRI'>BRI</option>
                                    <option value='Virtual Account BCA'>BCA</option>
                                </select>
                            </div>
                        </div>
                        <div className='flex justify-between mt-6'>
                            <p className="text-lg font-medium text-[#adb5bd]">Subtotal</p>
                            <p className="text-xl font-medium text-[#495057]">Rp. {tourPackage.harga * amount.click}</p>
                        </div>
                        
                        <div className='flex justify-center'>
                            <button type='submit' onClick={onSubmitTransaction} className='text-white bg-blue hover:bg-blue-dark p-2 rounded-lg w-72 mt-3'>Buy</button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer/>
        </div>
    )
}

export default DetailPackage