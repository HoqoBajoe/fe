import React, { useEffect } from "react";
import RegisUser from "../Components/Form/RegisUser";
import Nav from "../Components/Navigation/Nav";
import Footer from "../Components/Navigation/Footer";

function RegisterPage(){
    useEffect(() => {
        document.title = "Register Page - HoqoBajoe"
      }, [])
    return(
        <div>
            <Nav/>
            <div>
                <RegisUser/>
            </div>
            <Footer/>
        </div>
    )
}

export default RegisterPage