import {
    faArrowLeft,
    faExclamationCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Head, Link, useForm } from "@inertiajs/react";
import React, { useState } from "react";

export default function ForgetPassword({ status }) {
    const { data, setData, processing, errors, post } = useForm({
        email: "",
    });

    const handelSubmit = (e) => {
        e.preventDefault();
        post("forgetPassword", data);
    };

    const pageHistory = () => {
        window.history.back();
    }

    return (
        <section className="ForgetPassword relative">
            {status ? (
                <div
                    class="absolute left-1/2 -translate-x-1/2 w-full max-w-max text-center p-4 mt-3 text-base text-white font-semibold rounded-lg bg-green-500"
                    role="alert"
                >
                    <span class="font-medium">Email Sent!</span> We've sent an
                    email with reset link
                </div>
            ) : null}
            <div className="d-flex justify-content-center align-items-center h-screen">
                <form
                    onSubmit={handelSubmit}
                    className="signUp-info flex flex-col text-center w-full p-5 gap-3 relative"
                >
                    <Link
                        className="text-sm absolute left-7 top-6"
                        // href="/"
                        onClick={pageHistory}
                        id="back"
                    >
                        <FontAwesomeIcon icon={faArrowLeft} /> Back to home
                    </Link>
                    <h2 className="text-center mb-3 fw-bold text-3xl mt-4">
                        We Will send a reset link to this email
                    </h2>
                    <div className="input-container text-start space-y-3">
                        <input
                            type="email"
                            className="form-control rounded-md h-12"
                            id="email"
                            name="email"
                            value={data.email}
                            placeholder="Email"
                            onChange={(e) => setData("email", e.target.value)}
                        />
                        {errors.email ?(
                            <div className="warning-messsage">
                                <FontAwesomeIcon
                                    icon={faExclamationCircle}
                                    className="mr-2"
                                />
                                {errors.email}
                            </div>
                        ) : null}
                    </div>

                    <div className="flex flex-col gap-2">
                        <button className="btn main-bg mt-3 p-3" type="submit">
                        Send Reset Link
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
