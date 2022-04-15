import React from 'react'
import SideBarSuperAdmin from '../Components/Navigation/SideBarSuperAdmin'
import AddPackage from '../Components/TourPackage/AddPackage'
import AllPackage from '../Components/TourPackage/AllPackage'

function TourPackage() {
  return (
    <div className='flex'>
        {/* <div className='sticky top-0 h-screen'> */}
            <SideBarSuperAdmin/>
        {/* </div> */}
        <div className='w-4/6 mx-auto'>
            <AllPackage/>

            <AddPackage/>
        </div>
    </div>
  )
}

export default TourPackage