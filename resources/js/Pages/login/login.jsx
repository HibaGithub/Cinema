import React from "react";
export default function Login(){
    return (
        <section class="login">

            <div class="container d-flex justify-content-center align-items-center h-100">
                <div class="login-info text-center w-40 p-4">
                    <h2 class="text-center mb-5 fw-bold">Login</h2>

                    <div class="input-group my-3">
                        {/* <!-- <span class="input-group-text"><i class="fas fa-envelope"></i></span> --> */}
                        <input type="email" class="form-control" id="loginEmail" placeholder="Email"/>
                    </div>

                    <div class="input-group mb-4">
                        {/* <!-- <span class="input-group-text"><i class="fas fa-lock"></i></span> --> */}
                        <input type="password" class="form-control" id="loginPassword" placeholder="Password"/>
                    </div>

                    <div class="alert alert-danger invalid mt-1 w-100" role="alert" id="invalidAlert">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        All inputs is required
                    </div>
                    <div class="alert alert-danger invalid mt-1 w-100" role="alert" id="correction">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        incorrect email or password!
                    </div>



                    <button class="btn main-bg" id="loginBtn">Login</button>

                    <div class="mt-4 mb-2 w-75 m-auto">
                        <span class="font-style">Don’t have an account?</span>
                        <a href="signup.html" class="main-color sign-link">Sign Up Now!</a>
                    </div>

                    <a class="p-5" href="../index.html" id="back"><i class="fa-solid fa-house"></i></a>
                </div>
            </div>

        </section>
  
    )
}