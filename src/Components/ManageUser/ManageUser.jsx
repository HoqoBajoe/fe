import React from 'react'
import ListCustomers from './ListCustomers'
import ManageComment from './ManageComment'

function ManageUser() {
  return (
    <div>
        <ManageComment/>
        <ListCustomers/>
    </div>
  )
}

export default ManageUser