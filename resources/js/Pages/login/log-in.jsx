import { faArrowLeft, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function SignUp() {
    const { data, setData, post, errors } = useForm({
        email: "",
        password: "",
    });

    const handelSubmit = (e) => {
        e.preventDefault();
        post("login", data);
    };
    return (
        <section class="SignUp">
            <div class="d-flex justify-content-center align-items-center h-screen">
                <form
                    onSubmit={handelSubmit}
                    class="signUp-info flex flex-col text-center w-full p-5 gap-3 relative"
                >
                    <Link
                        className="text-sm absolute left-7 top-6"
                        href="/"
                        id="back"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} /> Back to home
                    </Link>
                    <h2 class="text-center mb-5 fw-bold text-5xl">Login</h2>

                    {errors.email && !errors.password && (
                        <div className="warning-messsage"><FontAwesomeIcon icon={faExclamationCircle} className='mr-2' />
                            Your email and password combination is incorrect.
                            Please try again
                        </div>
                    )}
                    <div className="input-container text-start space-y-3">
                        <input
                            type="email"
                            class="form-control rounded-md h-12"
                            id="email"
                            value={data.email}
                            placeholder="Email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {(errors.email && errors.password )&& (
                            <div className="warning-messsage"><FontAwesomeIcon icon={faExclamationCircle} className='mr-2' />{ errors.email }</div>
                        )}
                    </div>
                    <div className="input-container text-start space-y-3">
                        <input
                            type="password"
                            class="form-control rounded-md h-12"
                            id="password"
                            name="password"
                            autocomplete="current-password"
                            value={data.password}
                            placeholder="Password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password && (
                            <div className="warning-messsage"><FontAwesomeIcon icon={faExclamationCircle} className='mr-2' />
                                {errors.password}
                            </div>
                        )}
                    </div>
                    <button className="btn main-bg mt-3 p-2" type="submit">
                        Sign In
                    </button>
                    <div className="mt-4 mb-2 w-75 m-auto">
                        <span className="font-style">
                            Don’t have an account?
                        </span>
                        <br />
                        <Link href="/signup" class="main-color sign-link">
                            Sign Up Now!
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}
