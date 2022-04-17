import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ListAdmin from '../Components/ManageAdmin/ListAdmin'
import RegisAdmin from '../Components/ManageAdmin/RegisAdmin'
import Sidebar from '../Components/Navigation/Sidebar'

function ManageAdmin() {
  const user = useSelector((state) => state.admin)
  const navigate = useNavigate()

  useEffect(() => {
    if (user.id !== 0 ){
      if(user.role === 'user') (navigate('/'))
      if(user.role === 'admin') (navigate('/dashboard'))
    } else {
        navigate('/')
    }
  document.title = "Manage Admin"

  }, [user,navigate])
  
  return (
    <div className='flex'>
        <Sidebar/>
        <div className='w-4/6 mx-auto'>
            <ListAdmin/>
            <RegisAdmin/>
        </div>
    </div>
  )
}

export default ManageAdmin