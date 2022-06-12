import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { Axios } from '../../Helper/axios';
import UpdatedPackage from './UpdatedPackage';
import Swal from 'sweetalert2';

function Modal(props) {
    return(
        <div {...props} className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div className="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 className="text-2xl sm:text-4xl font-bold text-black" id="exampleModalScrollableLabel">
                    Update Package
                    </h5>
                    <button type="button"
                    className="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body relative p-4">
                    <UpdatedPackage id={props.id}/>
                </div>
                </div>
            </div>
        </div>
    )
    
}

function AllPackage(props) {
    const [tourPackage, setTourPackage] = useState([]);
    const [stateId, setStateId] = useState("");
    const [modalShow, setModalShow] = useState(false);
    const [filter, setFilter] = useState("")

    const onChange = (e) => {
        const value = e.target.value;
        setFilter(value);
    };

    const fetchTour = async (nama) => {
        await Axios.get(`/paket?nama_paket=${nama}`).then((resp) =>{
        setTourPackage(resp.data.data)
        })
    }

    const deleteTour = (id) => {
        Axios 
        .delete(`/paket/delete/${id}`)
            .then(() => {
                Swal.fire(
                    'Success!',
                    'Delete Tour Package success..',
                    'success'
                )
            })
            .catch((err) => {
                Swal.fire(
                    'Error!',
                    'Delete Tour Package error!',
                    'error'
                )
            })
    }

    useEffect(() =>{
        fetchTour('');
    }, [])

    return (
        <div className='w-full mx-auto mt-10'>
            <Modal show={modalShow} onHide={() => setModalShow(false)} id={stateId}/>
            <div className='flex justify-between  mb-8'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black">Tour Package</h1>

                <div className='flex'>
                    <input className='border-y border-l border-gray-light rounded-l-lg p-2 caret-pink' type="search" name='search' value={filter} onChange={onChange}/>
                    <button className='border-y border-r border-gray-light rounded-r-lg p-2 w-max inline-block align-middle' onClick={() => {(fetchTour(filter))}}>
                        <FiSearch className='mt-1'/>
                    </button>
                </div>
            </div>
            
            <div className='border border-gray-light mb-8'></div>


            {tourPackage?.map((item) => (
                <div key={item.id} className='flex items-center justify-between gap-12 bg-white text-[#495057] rounded-md drop-shadow-lg hover:drop-shadow-2xl p-3 border border-gray-light w-max mx-auto mb-8'>
                    
                     <div className='flex items-center gap-3'>
                        <div id="carouselExampleSlidesOnly" class="carousel slide relative" data-bs-ride="carousel">
                            <div class="carousel-inner relative w-56 overflow-hidden">
                                {item.photo_wisata?.map((i) =>(
                                <div class="carousel-item active relative float-left w-56">
                                <img
                                    src={i}
                                    class="block w-56 rounded-md "
                                    alt="Wild Landscape"
                                />
                                </div>
                                ))}

                               
                            </div>
                        </div>

                        <div className='w-64'>
                            <p className="text-3xl sm:text-lg font-semibold text-black">{item.nama_paket}</p>
                            <p className='sm:text-sm font-medium text-black italic'>{item.deskripsi.slice(0, 150)}</p>
                        </div>
                    </div>
                    <ul className='w-40'>
                        {item.destinasi_wisata?.map((i) =>(
                            <li className='list-disc'>{i}</li>
                        ))}
                    </ul>
                    <p className='sm:text-lg font-medium text-black w-28'> Rp. {item.harga}</p>
                    <button onClick={() => {setModalShow(true); setStateId(item.id)}} className='bg-gray p-2 rounded-md text-white' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                        Edit
                    </button>
                    <button onClick={()=>deleteTour(item.id)} className='bg-red p-2 rounded-md text-white'>Delete</button>
                </div>
            ))}
        </div>
    )
}

export default AllPackage