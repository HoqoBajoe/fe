import React from 'react'
import ListAdmin from '../Components/ManageAdmin/ListAdmin'
import RegisAdmin from '../Components/ManageAdmin/RegisAdmin'
import SideBarSuperAdmin from '../Components/Navigation/SideBarSuperAdmin'

function MangeAdmin() {
  return (
    <div className='flex'>
        <SideBarSuperAdmin/>
        <div className='w-4/6 mx-auto'>
            <ListAdmin/>
            <RegisAdmin/>
        </div>
    </div>
  )
}

export default MangeAdmin