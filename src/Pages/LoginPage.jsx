import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Login from "../Components/Form/Login";
import Footer from "../Components/Navigation/Footer";
import Nav from "../Components/Navigation/Nav";

function LoginPage(){
    const user = useSelector((state) => state.admin)
    const navigate = useNavigate()

    useEffect(() => {
        if (user.id !== 0){
            navigate('/')
        }
        document.title = "Login Page - HoqoBajoe"
    }, [user,navigate])
    
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