import React from 'react'
import Nav from '../Components/Navigation/Nav'
import Footer from '../Components/Navigation/Footer'
import Login from '../Components/Form/Login'

function Loginpage(){
    return(
        <div>
            <Nav/>
            <div>
                <Login />
            </div>

            <Footer />
        </div>
    )
}

export default Loginpage