import {
    faArrowLeft,
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function ResetPassword({ token, email, status }) {
    const { data, setData, processing, errors, post } = useForm({
        token: token,
        email: email,
        password: "",
        password_confirmation: "",
    });

    const handelSubmit = (e) => {
        e.preventDefault();
        post("/reset-password", data);
    };
    return (
        <section class="relative ForgetPassword">
            {status ? (
                <div
                    class="absolute left-1/2 -translate-x-1/2 w-full max-w-max text-center p-4 mt-3 text-base text-white font-semibold rounded-lg bg-green-500"
                    role="alert"
                >
                    Your password has been reset successfully
                </div>
            ) : null}
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
                    <h2 class="text-center mb-3 fw-bold text-3xl mt-4">
                        Change your password
                    </h2>
                    <div className="input-container text-start space-y-3">
                        <input
                            type="email"
                            class="form-control rounded-md h-12"
                            id="email"
                            value={data.email}
                            placeholder="Email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email ? (
                            <div className="warning-messsage">
                                <FontAwesomeIcon
                                    icon={faExclamationCircle}
                                    className="mr-2"
                                />
                                {errors.email}
                            </div>
                        ) : null}
                    </div>
                    <div className="input-container text-start space-y-3">
                        <input
                            type="password"
                            class="form-control rounded-md h-12"
                            id="password"
                            name="password"
                            autocomplete="current-password"
                            value={data.password}
                            placeholder="New Password"
                            onChange={(e) =>
                                setData("password", e.target.value)
                            }
                        />
                        {errors.password ? (
                            <div className="warning-messsage">
                                <FontAwesomeIcon
                                    icon={faExclamationCircle}
                                    className="mr-2"
                                />
                                {errors.password}
                            </div>
                        ) : null}
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
                        {errors.password_confirmation && (
                            <div className="warning-messsage">
                                <FontAwesomeIcon
                                    icon={faExclamationCircle}
                                    className="mr-2"
                                />
                                {errors.password_confirmation}
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="btn main-bg mt-3 p-3" type="submit">
                        Reset Password
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
