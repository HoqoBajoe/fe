import React from 'react'
import Sidebar from '../Components/Navigation/Sidebar'
import AddPackage from '../Components/TourPackage/AddPackage'
import AllPackage from '../Components/TourPackage/AllPackage'

function TourPackage() {
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