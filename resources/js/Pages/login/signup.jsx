import React from "react";

export default function SignUp(){
    return(
        <section class="SignUp">
            <div class="container d-flex justify-content-center align-items-center h-100">
                <div class="signUp-info text-center w-40 p-5">
                    <h2 class="text-center mb-5 fw-bold">Sign Up</h2>

                    <div class="input-group mt-3 mb-2">
                      
                        <input type="text" class="form-control" id="name" placeholder="User Name"/>
                    </div>
                  


                    <div class="input-group mt-3 mb-2">
                       
                        <input type="email" class="form-control" id="email" placeholder="Email"/>
                    </div>
                 


                    <div class="input-group mt-3 mb-2">

                        <input type="password" class="form-control " id="password" placeholder="Password" required />
                           
                    </div>

                   

                  


                    <button class="btn main-bg mt-3" id="signup">Confirm</button>

                    <div class="mt-4">
                        <span class="font-style">you have an account?</span>
                        <a href="index.html" class="main-color sign-link">Sign In</a>
                    </div>
                </div>


            </div>

        </section>
    )
}