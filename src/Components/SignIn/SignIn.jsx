import React from "react";

function SignIn() {
    return(
        <div className="container mb-5 ">
        <div className="container mb-5 ">
            <div className="row mx-auto px-3 py-5 mt-5 w-50 bg-white shadow align-items-center border" style={{maxHeight: "700px", minWidth: "330px", borderRadius: "10px"}}>
                <form action="">
                    <h1 className="text-center mb-5" style={{fontWeight: "bolder"}} >Hoqo Bajoe</h1>
                    <div className="mb-3">
                        <label for="Username" className="form-label" style={{fontWeight: "bold"}}>Username</label>
                        <input type="text" className="form-control" style={{borderRadius: "10px"}} id="Username" ></input>
                    </div>
                    <div className="mb-3">
                        <label for="Email" className="form-label" style={{fontWeight: "bold"}}>Email</label>
                        <input type="text" className="form-control" style={{borderRadius: "10px"}} id="Email" ></input>
                    </div>
                    <div className="mb-3">
                        <label for="password" className="form-label" style={{fontWeight: "bold"}} >Password</label>
                        <input type="password" className="form-control" style={{borderRadius: "10px"}} id="password"></input>
                    </div>
                    <div className="row">
                        <div className="col text-center">
                            <button className="btn btn-default text-white w-50 " style={{backgroundColor: "#091426", borderRadius: "20px", fontWeight: "bold", fontSize: "large",marginTop:"100px",height: "50px"}}>Sign In</button>
                        </div>
                    </div>
                    <div className="mt-4 text-center">
                        <a className="btn text-black" style={{textDecoration: "none", fontWeight: "bold"}}>Back To Login</a>
                    </div>  
                </form>
            </div>
        </div>    
        </div>     
    )
}

export default SignIn