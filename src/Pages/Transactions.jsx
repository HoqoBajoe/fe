import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Sidebar from '../Components/Navigation/Sidebar';
import AllTransactions from '../Components/Transactions/AllTransactions';

function Transactions() {
    const user = useSelector((state) => state.admin)
    const navigate = useNavigate()
  
    useEffect(() => {
        if (user.id !== 0 ){
            if(user.role === 'user') (navigate('/'))
            if(user.role === 'admin') (navigate('/dashboard'))
        } else {
            navigate('/')
        }
        document.title = 'Manage Transaction'
    }, [user,navigate])

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