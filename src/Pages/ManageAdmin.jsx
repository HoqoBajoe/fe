import React from 'react'
import ListAdmin from '../Components/ManageAdmin/ListAdmin'
import RegisAdmin from '../Components/ManageAdmin/RegisAdmin'
import Sidebar from '../Components/Navigation/Sidebar'

function ManageAdmin() {
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