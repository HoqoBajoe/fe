import React from 'react'
import Footer from './Components/Navigation/Footer';
import SignIn from './Components/SignIn/SignIn';
import Nav from './Components/Navigation/Nav';

function SignInPage(){
    return(
        <div>
            <Nav/>
            <div>
                <SignIn />               
            </div>
            <Footer />
        </div>
    )
}

export default SignInPage