import React from 'react'
import SideBarSuperAdmin from '../Components/Navigation/SideBarSuperAdmin';
import AllTransactions from '../Components/Transactions/AllTransactions';

function Transactions() {
    
    return (
        <div className='flex'>
            <SideBarSuperAdmin/>
        <div className='w-4/6 mx-auto'>
            <AllTransactions/>
        </div>
    </div>
    )
}

export default Transactions