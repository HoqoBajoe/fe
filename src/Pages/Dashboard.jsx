import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import ManageUser from '../Components/ManageUser/ManageUser'
import Sidebar from '../Components/Navigation/Sidebar'

function Dashboard() {
  const user = useSelector((state) => state.admin)
  const navigate = useNavigate()

  useEffect(() => {
      if (user.id !== 0 ) {
        if(user.role === 'user')
          navigate('/')
      }
      document.title = "Manage Review and User"

  }, [user,navigate])

  return (
    <div className='flex'>
        <Sidebar/>
        <div className='w-9/12 mx-auto'>
          <ManageUser/>
        </div>
    </div>
  )
}

export default Dashboard