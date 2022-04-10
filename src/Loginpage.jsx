import React from 'react'
import Footer from './Components/Navigation/Footer'
import Login from './Components/Login/Login'
import Nav from './Components/Navigation/Nav'

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