import { faArrowLeft, faExclamationCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function SignUp() {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
    });

    const handelSubmit = (e) => {
        e.preventDefault();
        post("signup", data);
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
                    <h2 class="text-center my-5 fw-bold text-5xl">Sign Up</h2>
                    <div className="input-container text-start space-y-3">
                        <input
                            type="text"
                            class="form-control rounded-md h-12"
                            id="name"
                            value={data.name}
                            placeholder="Username"
                            onChange={(e) => setData("name", e.target.value)}
                        />
                        {errors.name && (
                            <div className="warning-messsage"><FontAwesomeIcon icon={faExclamationCircle} className='mr-2' />{errors.name}</div>
                        )}
                    </div>
                    <div className="input-container text-start space-y-3">
                        <input
                            type="email"
                            class="form-control rounded-md h-12"
                            id="email"
                            value={data.email}
                            placeholder="Email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email && (
                            <div className="warning-messsage"><FontAwesomeIcon icon={faExclamationCircle} className='mr-2' />{errors.email}</div>
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
                            <div className="warning-messsage"><FontAwesomeIcon icon={faExclamationCircle} className='mr-2' />{errors.password}</div>
                        )}
                    </div>
                    <div className="input-container text-start">
                        <input
                            type="password"
                            class="form-control rounded-md h-12"
                            id="password_confirmation"
                            name="password_confirmation"
                            autocomplete="current-password"
                            placeholder="Comfirm password"
                            onChange={(e) =>
                                setData("password_confirmation", e.target.value)
                            }
                        />
                    </div>
                    <button class="btn main-bg mt-3 p-3" type="submit">
                        Create account
                    </button>
                    <div class="mt-4">
                        <span class="font-style">You have an account? </span>
                        <Link href="/login" className="text-secondary-light">
                            login
                        </Link>
                    </div>
                </form>
            </div>
        </section>
    );
}
