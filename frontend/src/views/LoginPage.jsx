import React, { useState, useHistory } from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from "axios";

const LOGIN_URL = 'http://localhost:8080/login';

const LoginPage = ({ setLoginUser }) => {
    const [loading, setloading] = useState(false)
    const [disabled, setDisabled] = useState(false)

    const form = useForm();
    const {
        register,
        control,
        formState,
        handleSubmit,
    } = form;
    const { errors } = formState;

    // const onSubmit = async (data) => {
    //     // setloading(true);
    //     // setDisabled(prev => !prev)
    //     // console.log(data);
    //     try {
    //         const response = await axios.post(LOGIN_URL, data)
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }

    const onSubmit = async (data) => {

        try {
            const response = await axios.post(LOGIN_URL,
                data,
                {
                    headers: { 'Content-Type': 'application/json'}
                }
            );
            console.log(response.data);
            console.log(response.token);
        } catch (error) {
            if (!error.response) {
                console.log("No server response");
            } else if (error.response?.status === 400) {
                console.log("email not found");
            } else {
                console.log("login failed");
            }
            console.log(error);
            console.log(error.response.status);
            console.log(error.response.data.message);
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-96">
                <h1 className="text-2xl font-semibold mb-4"> Login </h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <fieldset disabled={disabled}>
                        <div className="mb-4">
                            <label htmlFor='email' className="label">
                                <span className="label-text font-semibold">Email</span>
                            </label>
                            <input
                                type="text"
                                id="email"
                                name="email"
                                className="input input-bordered input-md w-full max-w-xs"
                                placeholder="Enter your email"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: "* Enter an email"
                                    },
                                    pattern: {
                                        value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                        message: '* Enter a valid email format',
                                    }
                                })}
                            />
                            <p className="text-error text-xs py-1 px-1">
                                {errors.email?.message}
                            </p>
                        </div>
                        <div className="mb-4">
                            <label htmlFor='password' className="label">
                                <span className="label-text font-semibold">Password</span>
                            </label>
                            <input
                                type="password"
                                id="password"
                                name="password"
                                className="input input-bordered input-md w-full max-w-xs"
                                placeholder="Enter your password"
                                {...register("password", {
                                    required: {
                                        value: true,
                                        message: "* Enter a password"
                                    },
                                    minLength: {
                                        value: 3,
                                        message: "* Password must be at least 3 characters long"
                                    }
                                })}
                            />
                            <p className="text-error text-xs py-1 px-1">
                                {errors.password?.message}
                            </p>
                        </div>
                    </fieldset>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-medium py-2 rounded-md hover:bg-primary-focus"
                    >
                        {loading ? <span className="loading loading-spinner loading-sm"></span> : "Submit"}
                    </button>
                </form>
                <div className='mt-4'>
                    <p className='text-sm'> Doesnt't have an account?
                        <a className='text-accent hover:text-accent-focus' href='/register'> Register now.</a>
                    </p>
                </div>
                <DevTool control={control} />
            </div>
        </div>
    );
};

export default LoginPage;
