import React from 'react'
import ListCustomers from './ListCustomers'
import ManageComment from './ManageComment'

function ManageUser() {
  return (
    <div className='mt-10'>
        <ManageComment/>
        <ListCustomers/>
    </div>
  )
}

export default ManageUser