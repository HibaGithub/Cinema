import React from "react";

export default function SignUp(){
    return(
        <section class="SignUp">
            <div class="container d-flex justify-content-center align-items-center h-100">
                <div class="signUp-info text-center w-40 p-5">
                    <h2 class="text-center mb-5 fw-bold">Sign Up</h2>

                    <div class="input-group mt-3 mb-2">
                        {/* <!-- <span class="input-group-text"><i class="fas fa-user"></i></span> --> */}
                        <input type="text" class="form-control" id="name" placeholder="User Name"/>
                    </div>
                    <div class="alert alert-danger invalid w-100" role="alert" id="nameSignupAlert">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        Please enter a valid user name start with capital letter!
                    </div>


                    <div class="input-group mt-3 mb-2">
                        {/* <!-- <span class="input-group-text"><i class="fas fa-envelope"></i></span> --> */}
                        <input type="email" class="form-control" id="email" placeholder="Email"/>
                    </div>
                    <div class="alert alert-danger invalid " role="alert" id="emailSignupAlert">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        Please enter a valid email!
                    </div>


                    <div class="input-group mt-3 mb-2">
                        {/* <!-- <span class="input-group-text"><i class="fas fa-lock"></i></span> --> */}
                        <input type="password" class="form-control " id="password" placeholder="Password" required />
                            <div class="alert alert-danger invalid mt-1 w-100" role="alert" id="passwordSignupAlert">
                                <i class="fa-solid fa-circle-exclamation"></i>
                                Passowrd must contain 8 or more characters
                            </div>
                    </div>

                    <div class="alert alert-danger invalid mt-1 w-100" role="alert" id="invalidAlert">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        All inputs is required
                    </div>

                    <div class="alert alert-danger invalid mt-1 w-100" role="alert" id="correction">
                        <i class="fa-solid fa-circle-exclamation"></i>
                        incorrect email or password
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