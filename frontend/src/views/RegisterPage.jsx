import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import axios from 'axios';

const RegisterPage = () => {
    

    const form = useForm();
    const {
        register,
        control,
        formState,
        handleSubmit,
    } = form;
    const { errors } = formState;

    const onSubmit = async (data) => {
        console.log(data);

    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-8 shadow-md rounded-md w-3/6">
                <h1 className="lg:text-2xl md:text-xl sm:text-lg font-semibold mb-4"> Create an Account </h1>
                <form onSubmit={handleSubmit(onSubmit)} noValidate>
                    <div className="grid lg:grid-cols-2 lg:gap-4 lg:mb-4 sm:grid-cols-1">
                        <div>
                            <label htmlFor='firstname' className="label">
                                <span className="label-text font-semibold">First Name</span>
                            </label>
                            <input
                                type="text"
                                id="firstname"
                                name="firstname"
                                className="input input-bordered input-md w-full"
                                placeholder="Enter your first name"
                                {...register("firstname", {
                                    required: {
                                        value: true,
                                        message: "* First Name is required"
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "* Your firstname must be at least two characters long."
                                    }
                                })}
                            />
                            <p className="text-error text-xs py-1 px-1">
                                {errors.firstname?.message}
                            </p>
                        </div>
                        <div>
                            <label htmlFor='lastname' className="label">
                                <span className="label-text font-semibold">Last Name</span>
                            </label>
                            <input
                                type="text"
                                id="lastname"
                                name="lastname"
                                className="input input-bordered input-md w-full"
                                placeholder="Enter your last name"
                                {...register("lastname", {
                                    required: {
                                        value: true,
                                        message: '* Last Name is Required.'
                                    },
                                    minLength: {
                                        value: 2,
                                        message: "* Your lastname must be at least two characters long."
                                    }
                                })}
                            />
                            <p className="text-error text-xs py-1 px-1">
                                {errors.lastname?.message}
                            </p>
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor='email' className="label">
                            <span className="label-text font-semibold"> Email Address </span>
                        </label>
                        <input
                            type="text"
                            id="email"
                            name="email"
                            className="input input-bordered input-md w-full"
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
                            <span className="label-text font-semibold"> Password </span>
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="input input-bordered input-md w-full max-w"
                            placeholder="Enter your password"
                            {...register("password", {
                                required: {
                                    value: true,
                                    message: "* Please enter the password."
                                },
                                minLength: {
                                    value: 3,
                                    message: "* Your password must be at least three characters long."
                                }
                            })}
                        />
                        <p className="text-error text-xs py-1 px-1">
                            {errors.password?.message}
                        </p>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-primary text-white font-medium py-2 rounded-md hover:bg-primary-focus"
                    >
                        Register
                    </button>
                </form>
                <DevTool control={control} />
                <div className='mt-4'>
                    <p className='text-sm'> Already have an account?
                        <a className='text-accent hover:text-accent-focus' href='/login'> Login now.</a>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default RegisterPage;
