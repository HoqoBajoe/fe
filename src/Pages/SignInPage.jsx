import React from 'react'
import Footer from '../Components/Navigation/Footer';
import Signin from '../Components/Form/Signin';
import Nav from '../Components/Navigation/Nav';

function SignInPage(){
    return(
        <div>
            <Nav/>
            <div>
                <Signin />               
            </div>           
            <Footer /> 
        </div>
    )
}

export default SignInPage