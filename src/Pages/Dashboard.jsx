import React from 'react'
import ManageUser from '../Components/ManageUser/ManageUser'
import Sidebar from '../Components/Navigation/Sidebar'

function Dashboard() {
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