import React from "react";
export default function Login() {
    return (
        <section class="logIn">
            <div class="container d-flex justify-content-center align-items-center h-100">
                <div class="login-info text-center w-40 p-4">
                    <h2 class="text-center mb-5 fw-bold">Login</h2>
                    <div class="input-group my-3">
                        <input type="email" class="form-control" id="loginEmail" placeholder="Email" />
                    </div>
                    <div class="input-group mb-4">
                        <input type="password" class="form-control" id="loginPassword" placeholder="Password" />
                    </div>
                    <button class="btn main-bg" id="loginBtn">Login</button>
                    <div class="mt-4 mb-2 w-75 m-auto">
                        <span class="font-style">Don’t have an account?</span>
                        <a href="signup.html" class="main-color sign-link">Sign Up Now!</a>
                    </div>

                    <a class="p-5" href="#" id="back"><i class="fa-solid fa-house"></i></a>
                </div>
            </div>

        </section>

    )
}