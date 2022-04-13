import React from 'react'
import ListCustomers from './Components/ManageUser/ListCustomers'
import ManageComment from './Components/ManageUser/ManageComment'
import ManageUser from './Components/ManageUser/ManageUser'
import SideBarSuperAdmin from './Components/Navigation/SideBarSuperAdmin'

function DashboardSuperAdmin() {
  return (
    <div className='grid-rows-2'>
        <SideBarSuperAdmin/>
        {/* <div className='w-full'> */}
          {/* <ManageComment/> */}
          {/* <ListCustomers/> */}
        {/* </div> */}
        <ManageUser/>
    </div>
  )
}

export default DashboardSuperAdmin