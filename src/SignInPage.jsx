import React from 'react'
import Footer from './Components/Navigation/Footer';
import SignIn from './Components/SignIn/SignIn';

function SignInPage(){
    return(
        <div>
            <div>
                <SignIn />
            </div>
            <Footer />
        </div>
    )
}

export default SignInPage