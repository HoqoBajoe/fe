import React from "react";
import Login from "../Components/Form/Login";
import Footer from "../Components/Navigation/Footer";
import Nav from "../Components/Navigation/Nav";

function LoginPage(){
    return(
        <div>
            <Nav/>
            <div>
                <Login/>
            </div>
            <Footer/>
        </div>
    )
}

export default LoginPage