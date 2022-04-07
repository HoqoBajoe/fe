import React from "react";
import '../loginstyle.css'



function Login(){
    return(
        
        <div className="container mb-5 ">
            <div className="m-auto px-5 py-5 mt-5" id="div1">
                <form action="">
                    <h1 className="text-center mb-5" style={{fontWeight: "bold"}} >Hoqo Bajoe</h1>
                    <div className="mb-3">
                        <label for="Username" className="form-label">Username</label>
                        <input type="text" className="form-control" style={{borderRadius: "10px"}} id="Username" ></input>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label" >Password</label>
                        <input type="password" className="form-control" style={{borderRadius: "10px"}} id="password"></input>
                    </div>
                    <div className="mx-4">
                        <button type="submit" className="mx-5 p-1 text-white" id="divb" >Login</button>
                    </div>
                    <div className="mt-3 text-center">
                        <a className="btn text-black" style={{textDecoration: "none", fontWeight: "bold"}}>Create Account</a>
                    </div>  
                </form>
            </div>
        </div>       
    )
}

export default Login