import React, { useState } from "react";
import axios from "axios";
import { GETProvince, GETRegency } from "../api/provinceAPI.jsx";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { DevTool } from "@hookform/devtools";
import { toastSuccess, toastError } from "../components/Toast.jsx";

const AddUser = () => {
    const [regency, setRegency] = useState("");
    const [district, setDistrict] = useState("");

    const [provinceList, setProvinceList] = useState([]);
    const [regenciesList, setRegenciesList] = useState([]);
    const [districtList, setDistrictList] = useState([]);

    const [loading, setloading] = useState(false);

    const getRegencies = async (provinceId) => {
        await axios
            .get(
                `https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`
            )
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    setRegenciesList(data);
                    document.getElementById("regency").disabled = false;
                } else {
                    alert("Error");
                }
            })
            .catch((error) => console.log(error));
    };

    const getDistricts = async (regencyId) => {
        await axios
            .get(
                `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`
            )
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    setDistrictList(data);
                    document.getElementById("district").disabled = false;
                } else {
                    alert("Error");
                }
            })
            .catch((error) => console.log(error));
    };

    const handleChange = (e) => {
        if (e.target.id === "province") {
            const provinceId = e.target.options[e.target.selectedIndex].id;
            document.getElementById("district").selectedIndex = 0;
            getRegencies(provinceId);
        } else {
            const regencyId = e.target.options[e.target.selectedIndex].id;
            getDistricts(regencyId);
        }
    };

    // const onSubmit = async (data) => {
    //     // setloading(true);
    //     try {
    //         const response = await axios.post("http://localhost:8000/users", data);
    //         // setloading(false);
    //         console.log(response.data);
    //     } catch (error) {
    //         console.log(error);
    //     }
    // };

    const handleClick = async (apiEndpoint) => {
        const data = await GETProvince(apiEndpoint)
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    setProvinceList(data);
                } else {
                    alert("Error");
                }
            })
            .catch((error) => console.log(error));
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

    const submitSuccess = () => {
        toastSuccess("Form is Submitted");
    }

    const onSubmit = (data) => {
        submitSuccess();
        console.log('Form Submitted', data);
    }
    


    return (
        <div className="bg-white rounded-lg px-6 py-4">
            <form onSubmit={handleSubmit(onSubmit)} noValidate>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="py-4 border-b-2">
                            <h2 className="text-base font-semibold leading-7 text-gray-900">
                                Personal Information Form{" "}
                            </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">
                                Use a permanent address where you can receive mail.
                            </p>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <div className="form-control w-full max-w-xs">
                                <label htmlFor="first_name" className="label">
                                    <span className="label-text font-semibold"> First Name</span>
                                </label>
                                <input
                                    type="text"
                                    id="first_name"
                                    placeholder="First Name"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("first_name", {
                                        required: {
                                            value: true,
                                            message: 'First Name is required'
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
                                    placeholder="Last Name"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("last_name", {
                                        required: {
                                            value: true,
                                            message: 'Last Name is required'
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
                                    placeholder="Email Address"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("email", {
                                        required: '* Email is required',
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
                                    placeholder="Address"
                                    className="textarea textarea-bordered h-24 textarea-sm"
                                    {...register("address.street_name", {
                                        required: '* Address is required'
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
                        <div className="mt-5 grid grid-cols-1 gap-4">
                            <div className="flex gap-10">
                                <div className="form-control w-full max-w-xs">
                                    <label htmlFor="province" className="label">
                                        <span className="label-text font-semibold"> Province </span>
                                    </label>
                                    <select
                                        id="province"
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        {...register("address.province", {
                                            required: '* Select a Province'
                                        })}
                                        onClick={handleClick}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    >
                                        <option hidden value="">
                                            Select a Province
                                        </option>
                                        {provinceList.map((province, index) => (
                                            <option
                                                key={index}
                                                value={province.name}
                                                id={province.id}
                                            >
                                                {province.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.address?.province?.message && (
                                        <p className="text-red-500 text-xs" role="alert">
                                            {errors.address.province.message}
                                        </p>
                                    )}
                                </div>
                                <div className="form-control flex-initial w-full max-w-xs">
                                    <label htmlFor="regency" className="label">
                                        <span className="label-text font-semibold"> Regency </span>
                                    </label>
                                    <select
                                        id="regency"
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        disabled
                                        {...register("address.regency", {
                                            required: '* Select a Regency',
                                        })}
                                        onChange={(e) => {
                                            handleChange(e);
                                        }}
                                    >
                                        <option hidden value="">
                                            Select a Regency
                                        </option>
                                        {regenciesList.map((regency, index) => (
                                            <option key={index} value={regency.name} id={regency.id}>
                                                {regency.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.address?.regency?.message && (
                                        <p className="text-red-500 text-xs" role="alert">
                                            {errors.address.regency.message}
                                        </p>
                                    )}
                                </div>
                                <div className="form-control flex-initial w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text font-semibold ">
                                            {" "}
                                            District{" "}
                                        </span>
                                    </label>
                                    <select
                                        id="district"
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        {...register("address.district", {
                                            required: '* Select a District'
                                        })}
                                        onChange={(e) => setDistrict(e.target.value)}
                                        disabled
                                    >
                                        <option hidden value="">
                                            Select a District
                                        </option>
                                        {districtList.map((district, index) => (
                                            <option key={index} value={district.name}>
                                                {district.name}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.address?.district?.message && (
                                        <p className="text-red-500 text-xs" role="alert">
                                            {errors.address.district.message}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="float-left mt-6 flex items-center justify-end gap-x-6">
                    <button
                        type="button"
                        onClick={() => reset()}
                        className="text-sm rounded-md bg-accent px-4 py-2 font-semibold text-white shadow-sm"
                    >
                        Reset
                    </button>
                    <button
                        type="submit"
                        className={
                            loading
                                ? "loading loading-spinner text-secondary"
                                : "rounded-md bg-primary px-4 py-2 text-sm font-semibold text-white shadow-sm"
                        }
                    >
                        Save
                    </button>
                </div>
            </form>
            <DevTool control={control} />
        </div>
    );
};

export default AddUser;
