import React, { useState, useEffect } from 'react';
import axios from 'axios'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";

const EditUser = () => {
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastname] = useState("");
    const [email, setEmail] = useState("");
    const [dob, setDob] = useState();
    const [gender, setGender] = useState("");
    const [streetname, setStreetName] = useState("");
    const [phone, setPhone] = useState("");
    const navigate = useNavigate();
    const { id } = useParams();

    useEffect(() => {
        getUserById();
    }, []);

    const getUserById = async () => {
        try {
            const response = await axios.get(`http://localhost:8000/users/${id}`);
            const newdob = response.data.dob;
            const isodob = new Date(newdob)
            const year = isodob.getFullYear();
            const month = isodob.getMonth() + 1;
            const day = isodob.getDate();
            const formattedDob = `${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}-${year}`

            setFirstName(response.data.first_name);
            setLastname(response.data.last_name);
            setEmail(response.data.email);
            setDob(response.data.formattedDob);
            setGender(response.data.gender);
            setStreetName(response.data.address.street_name);
            setPhone(response.data.phone);
            console.log(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const updateUser = async (e) => {
        e.preventDefault();
        try {
            await axios.patch(`http://localhost:5000/users/${id}`, {
                firstname,
                email,
                gender
            });
            navigate("/user-list")
        } catch (error) {
            console.log(error);
        }
    }

    const form = useForm();
    const {
        register,
        control,
        formState,
        handleSubmit,
        reset
    } = form;

    const { errors } = formState;


    return (
        <div className='bg-white rounded-lg px-6 py-4'>
            <form onSubmit={updateUser}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className='py-4 border-b-2'>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information Form </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <div className="form-control w-full max-w-xs">
                                <label htmlFor="first_name" className="label">
                                    <span className="label-text font-semibold"> First Name</span>
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    value={firstname}
                                    onChange={e => setFirstName(e.target.value)}
                                    placeholder="First Name"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("first_name", {
                                        required: {
                                            value: true,
                                            message: '* First Name is required'
                                        },
                                        minLength: {
                                            value: 2,
                                            message: '* First name must be at least 2 characters long'
                                        }
                                    })}
                                />
                                <p className="text-error text-xs py-1 px-1">
                                    {errors.first_name?.message}
                                </p>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label htmlFor="last_name" className="label">
                                    <span className="label-text font-semibold"> Last Name </span>
                                </label>
                                <input
                                    type="text"
                                    id="last_name"
                                    onChange={e => setLastname(e.target.value)}
                                    value={lastname}
                                    placeholder="Last Name"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("last_name", {
                                        required: {
                                            value: true,
                                            message: '* Last Name is required'
                                        },
                                        minLength: {
                                            value: 2,
                                            message: '* Last name must be at least 2 characters long'
                                        }
                                    })}
                                />
                                <p className="text-error text-xs py-1 px-1">
                                    {errors.last_name?.message}
                                </p>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label htmlFor="email" className="label">
                                    <span className="label-text font-semibold">
                                        {" "}
                                        Email Address{" "}
                                    </span>
                                </label>
                                <input
                                    type="text"
                                    id="email"
                                    onChange={e => setEmail(e.target.value)}
                                    value={email}
                                    placeholder="Email Address"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("email", {
                                        required: {
                                            value: true,
                                            message: '* Email is required'
                                        },
                                        pattern: {
                                            value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/,
                                            message: '* Invalid email format',
                                        }
                                    })}
                                />
                                <p className="text-error text-xs py-1 px-1">
                                    {errors.email?.message}
                                </p>
                            </div>
                            <div className="flex flex-row gap-8">
                                <div className="form-control basis-1/2">
                                    <label htmlFor="dob" className="label">
                                        <span className="label-text font-semibold"> Date of Birth </span>
                                    </label>
                                    <input
                                        type="date"
                                        id="dob"
                                        defaultValue={dob}
                                        onChange={e => setDob(e.target.value)}
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        {...register("dob", {
                                            valueAsDate: true,
                                            required: {
                                                value: true,
                                                message: '* Date of Birth is required'
                                            }
                                        })}
                                    />
                                    <p className="text-error text-xs py-1 px-1">
                                        {errors.dob?.message}
                                    </p>
                                </div>
                                <div className="form-control basis-1/2">
                                    <label htmlFor="gender" className="label">
                                        <span className="label-text font-semibold"> Gender </span>
                                    </label>
                                    <select
                                        id="gender"
                                        onChange={e => setGender(e.target.value)}
                                        value={gender}
                                        className="select select-sm w-full max-w-xs"
                                        {...register("gender")}
                                    >
                                        <option> Male </option>
                                        <option> Female </option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label htmlFor="street_name" className="label">
                                    <span className="label-text font-semibold"> Address </span>
                                </label>
                                <textarea
                                    id="street_name"
                                    onChange={e => setStreetName(e.target.value)}
                                    value={streetname}
                                    placeholder="Address"
                                    className="textarea textarea-bordered h-24 textarea-sm"
                                    {...register("address.street_name", {
                                        required: {
                                            value: true,
                                            message: "* Address is required"
                                        }
                                    })}
                                ></textarea>
                                <p className="text-error text-xs py-1 px-1">
                                    {errors.address?.street_name?.message}
                                </p>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold">
                                        {" "}
                                        Telephone Number{" "}
                                    </span>
                                </label>
                                <input
                                    type="number"
                                    id="phone"
                                    onChange={e => setPhone(e.target.value)}
                                    value={phone}
                                    placeholder="Phone Number"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("phone", {
                                        required: '* Phone is required',
                                        pattern: /^[0-9\b]+$/i,
                                    })}
                                />
                                <p className="text-error text-xs py-1 px-1">
                                    {errors.phone?.message}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mt-6 flex items-center justify-end gap-x-6">
                    <button type="button" className="text-sm font-semibold leading-6 text-gray-900">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="rounded-md bg-primary px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                    >
                        Update
                    </button>
                </div>
            </form>
        </div>
    )
}

export default EditUser

