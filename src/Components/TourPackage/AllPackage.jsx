import React, { useEffect, useState } from 'react'
import { FiSearch } from "react-icons/fi";
import { FaTrashAlt } from "react-icons/fa";
import UserProfile from '../../Images/man.png'
import { Axios } from '../../Helper/axios';
import moment from "moment";
import UpdatedPackage from './UpdatedPackage';
// import AddPackage from './AddPackage';


function Modal(props) {
    return(
        <div {...props} class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
            <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
                    <h5 class="text-2xl sm:text-4xl font-bold text-black" id="exampleModalScrollableLabel">
                    Update Package
                    </h5>
                    <button type="button"
                    class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                    data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body relative p-4">
                    <UpdatedPackage id={props.id}/>
                </div>
                {/* <div
                    class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
                    <button type="button"
                    class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                    data-bs-dismiss="modal">
                    Close
                    </button>
                    <button type="button"
                    class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
                    Save changes
                    </button>
                </div> */}
                </div>
            </div>
        </div>
    )
    
}

// function ModalAddPackage(props) {
//     return(
//         <div {...props} class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto" id="exampleModalCenter" tabindex="-1" aria-labelledby="exampleModalCenterTitle" aria-modal="true" role="dialog">
//             <div class="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
//                 <div class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
//                 <div class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
//                     <h5 class="text-2xl sm:text-4xl font-bold text-black" id="exampleModalScrollableLabel">
//                     Add Package
//                     </h5>
//                     <button type="button"
//                     class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
//                     data-bs-dismiss="modal" aria-label="Close"></button>
//                 </div>
//                 <div class="modal-body relative p-4">
//                     <AddPackage/>
//                 </div>
//                 {/* <div
//                     class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
//                     <button type="button"
//                     class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
//                     data-bs-dismiss="modal">
//                     Close
//                     </button>
//                     <button type="button"
//                     class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">
//                     Save changes
//                     </button>
//                 </div> */}
//                 </div>
//             </div>
//         </div>
//     )  
// }

// function formatRupiah(angka, prefix){
//     var number_string = angka.replace(/[^,\d]/g, '').toString(),
//     split   		= number_string.split(','),
//     sisa     		= split[0].length % 3,
//     rupiah     		= split[0].substr(0, sisa),
//     ribuan     		= split[0].substr(sisa).match(/\d{3}/gi);

//     // tambahkan titik jika yang di input sudah menjadi angka ribuan
//     if(ribuan){
//         var separator = sisa ? '.' : '';
//         rupiah += separator + ribuan.join('.');
//     }

//     rupiah = split[1] != undefined ? rupiah + ',' + split[1] : rupiah;
//     return prefix == undefined ? rupiah : (rupiah ? 'Rp. ' + rupiah : '');
// }

function AllPackage(props) {
  const [tourPackage, setTourPackage] = useState([]);
  const [stateId, setStateId] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [modalShowAdd, setModalShowAdd] = useState(false);

    const fetchTour = async () => {
        try {
            await Axios.get(`/paket`).then((resp) =>{
            setTourPackage(resp.data.data)
        })
        } catch (error) {
            console.log(error)
        }  
    }

    useEffect(() =>{
        fetchTour();
    }, [])

    console.log(tourPackage)
    // console.log(tourPackage.photo_wisata)
    // console.log(stateId)
    // console.log("add", modalShowAdd)
    return (
        <div className='w-full mx-auto'>
            <Modal show={modalShow} onHide={() => setModalShow(false)} id={stateId}/>
            {/* <ModalAddPackage show={modalShowAdd} onHide={() => setModalShowAdd(false)}/> */}
            <div className='flex justify-between  mb-8'>
                <h1 className="text-3xl sm:text-4xl font-bold text-black">Tour Package</h1>

                <div className='flex'>
                    <input className='border-y border-l border-gray-light rounded-l-lg p-2 caret-pink'/>
                    <div className='border-y border-r border-gray-light rounded-r-lg p-2 w-max inline-block align-middle '>
                        <FiSearch className='mt-1'/>
                    </div>
                </div>
            </div>
            
            <div className='border border-gray-light mb-8'></div>
            {/* <div className='flex justify-end mb-10'>
                <button onClick={() => setModalShowAdd(true)} className='bg-gray rounded-md text-white text-xl p-2 font-medium' >Add Package</button>
            </div> */}

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
                    <ul className='w-48'>
                        {item.destinasi_wisata?.map((i) =>(
                            <li className='list-disc'>{i}</li>
                        ))}
                    </ul>
                    <p className='sm:text-lg font-medium text-black w-28'> Rp. {item.harga}</p>
                    <button onClick={() => {setModalShow(true); setStateId(item.id)}} className='bg-gray p-2 rounded-md text-white' data-bs-toggle="modal" data-bs-target="#exampleModalCenter">
                        Edit
                    </button>
                </div>
            ))}
        </div>
    )
}

export default AllPackage