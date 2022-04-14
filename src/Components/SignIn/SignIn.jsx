import React from "react";

function SignIn() {
    return(
        <div>
            <div className="bg-home h-screen bg-cover bg-no-repeat flex">
                <div className="container mb-10">
                    <div className="w-1/3 m-auto mt-36 p-2 border-solid rounded-xl shadow-2xl mb-20 bg-ivory min-w-fit ">               
                        <form>
                            <h1 className="text-center my-9 xl:text-4xl font-extrabold sm:text-xl md:text-2xl ">Hoqo Bajoe</h1>
                            <div className="mb-4 mt-10 lg:mx-10 sm:mx-5 md:mx-5">
                                <label className="block mb-2 font-semibold sm:text-sm" for="username">Username</label>
                                <input className="w-full rounded-lg p-4 h-10 shadow-md leading-tight hover:shadow-lg " type="text" name="username" id="" placeholder=""></input>
                            </div>
                            <div className="mb-4 lg:mx-10 sm:mx-5 md:mx-5">
                                <label className="block mb-2 font-semibold sm:text-sm " for="email">Email</label>
                                <input className="w-full rounded-lg p-4 h-10 shadow-md leading-tight hover:shadow-lg transition" type="text" name="email" id="" placeholder=""></input>
                            </div>
                            <div className="lg:mx-10 sm:mx-5 md:mx-5">
                                <label className="block mb-2 font-semibold sm:text-sm" for="password">Password</label>
                                <input className="w-full rounded-lg p-4 h-10 shadow-md hover:shadow-lg transition" type="password" name="password" id="" placeholder=""></input>
                            </div>
                            <div className="flex justify-center mt-10">
                                <button type="submit" className="bg-gray px-6 py-2.5 leading-tight uppercase text-white rounded-xl font-semibold shadow-md hover:bg-gray-green w-56 transition">Sign In</button>   
                            </div>
                            <div className="flex justify-center mt-5 mb-5">
                                <a href="#" className="font-bold shadow-sm hover:shadow-lg hover:border-b-2 transition">Back To Login</a>
                            </div>
                        </form>                 
                    </div>
                </div>
            </div>
    </div>    
    )
}

export default SignIn