import React from 'react'
import Sidebar from '../Components/Navigation/Sidebar';
import AllTransactions from '../Components/Transactions/AllTransactions';

function Transactions() {
    
    return (
        <div className='flex'>
            <Sidebar/>
        <div className='w-4/6 mx-auto'>
            <AllTransactions/>
        </div>
    </div>
    )
}

export default Transactions