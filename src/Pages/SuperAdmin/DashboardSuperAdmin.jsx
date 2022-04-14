import React from 'react'
import ListCustomers from '../../Components/ManageUser/ListCustomers'
import ManageComment from '../../Components/ManageUser/ManageComment'
import ManageUser from '../../Components/ManageUser/ManageUser'
import SideBarSuperAdmin from '../../Components/Navigation/SideBarSuperAdmin'

function DashboardSuperAdmin() {
  return (
    <div className='flex'>
        <SideBarSuperAdmin/>
        <div className='w-4/6 mx-auto'>
          {/* <ManageComment/> */}
          {/* <ListCustomers/> */}
          <ManageUser/>

        </div>
    </div>
  )
}

export default DashboardSuperAdmin