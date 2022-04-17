import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import Sidebar from '../Components/Navigation/Sidebar'
import AddPackage from '../Components/TourPackage/AddPackage'
import AllPackage from '../Components/TourPackage/AllPackage'

function TourPackage() {
  const user = useSelector((state) => state.admin)
  const navigate = useNavigate()

  useEffect(() => {
    if (user.id !== 0 ){
        if(user.role === 'user') (navigate('/'))
        if(user.role === 'admin') (navigate('/dashboard'))
    } else {
        navigate('/')
    }
    document.title = 'Manage Tour Package'
}, [user,navigate])
  return (
    <div className='flex'>
            <Sidebar/>
        <div className='w-4/6 mx-auto'>
            <AllPackage/>
            <AddPackage/>
        </div>
    </div>
  )
}

export default TourPackage