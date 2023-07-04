import React, { useState } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { useForm, useFieldArray, SubmitHandler, Controller } from "react-hook-form"
import { useEffect } from 'react';

const AddUser = () => {
    // const [state, setState] = useState({
    //     firstname: "",
    //     lastname: "",
    //     email: "",
    //     age: "",
    //     gender: "",
    //     telp: "",
    //     address: "",
    //     province: "",
    //     regencies: "",
    //     district: ""
    // });

    const [select, setSelected] = useState('');
    const [regency, setRegency] = useState('');
    const [district, setDistrict] = useState('');

    const [provinceList, setProvinceList] = useState([]);
    const [regenciesList, setRegenciesList] = useState([]);
    const [districtList, setDistrictList] = useState([]);

    const getProvince = async () => {
        await axios
            .get('https://www.emsifa.com/api-wilayah-indonesia/api/provinces.json')
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    setProvinceList(data)
                } else {
                    alert("Error")
                }
            })
            .catch((error) => console.log(error));
    };

    const getRegencies = async (provinceId) => {
        await axios
            .get(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/${provinceId}.json`)
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    setRegenciesList(data)
                    document.getElementById('regency').disabled = false;
                } else {
                    alert("Error")
                }
            })
            .catch((error) => console.log(error))
    }

    const getDistricts = async (regencyId) => {
        await axios
            .get(`https://www.emsifa.com/api-wilayah-indonesia/api/districts/${regencyId}.json`)
            .then((response) => {
                const { data } = response;
                if (response.status === 200) {
                    setDistrictList(data)
                    document.getElementById('district').disabled = false;
                } else {
                    alert("Error")
                }
            })
            .catch((error) => console.log(error))
    }

    const handleChange = (e) => {
        const provinceId = e.target.options[e.target.selectedIndex].id;
        setRegency(e.target.value);
        getRegencies(provinceId)
    }

    const handleChangeRegencies = (e) => {
        const regencyId = e.target.options[e.target.selectedIndex].id;
        setDistrict(e.target.value);
        getDistricts(regencyId)
    }

    useEffect(() => {
        getProvince();
    }, [])

    // const saveUser = async (e) => {
    //     e.preventDefault();
    //     try {
    //         await axios.post('http://localhost:5000/users', {
    //             firstname,
    //             lastname,
    //             email,
    //             age,
    //             gender,
    //             telp,
    //             address,
    //             city,
    //             state,
    //             zip
    //         });
    //         navigate("/user-list")
    //     } catch (error) {
    //         console.log(error);
    //     }
    // }



    // const handleInputChange = (event) => {
    //     console.log("");
    // };

    const { register,
        formState: { errors },
        handleSubmit } = useForm();
    const onSubmit = (data) => console.log(data);

    return (
        <div className='bg-white rounded-lg px-6 py-4'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="space-y-12">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className='py-4 border-b-2'>
                            <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information Form </h2>
                            <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
                        </div>
                        <div className="mt-10 grid grid-cols-2 gap-4">
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text font-semibold"> First Name</span>
                                </label>
                                <input
                                    type="text"
                                    name='firstname'
                                    placeholder="First Name"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("first_name", { required: true, minLength: 3 })}
                                    aria-invalid={errors.first_name ? "true" : "false"}
                                />
                                {errors.first_name?.type === "required" && (
                                    <p className='text-red-500 text-xs' role="alert">* First name is required</p>
                                )}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> Last Name </span>
                                </label>
                                <input
                                    type="text"
                                    name='lastname'
                                    placeholder="Last Name"
                                    className="input input-bordered input-sm w-full max-w-xs"
                                    {...register("last_name", { required: true, minLength: 3 })}
                                    aria-invalid={errors.last_name ? "true" : "false"}
                                />
                                {errors.last_name?.type === "required" && "minLength" (
                                    <p className='text-red-500 text-xs' role="alert">* Last name is required</p>
                                )}
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> Email Address </span>
                                </label>
                                <input
                                    type="email"
                                    name='email'
                                    placeholder="Email Address"
                                    {...register("email")}
                                    className="input input-bordered input-sm w-full max-w-xs" />
                            </div>
                            <div className='flex gap-8'>
                                <div className="form-control flex-initial w-32 max-w-xs">
                                    <label className="label">
                                        <span className="label-text"> Age </span>
                                    </label>
                                    <input
                                        type="number"
                                        name='age'
                                        placeholder="Age"
                                        {...register("age")}
                                        className="input input-bordered input-sm w-full max-w-xs" />
                                </div>
                                <div className="form-control flex-initial w-32 max-w-xs">
                                    <label className="label">
                                        <span className="label-text"> Gender </span>
                                    </label>
                                    <select
                                        name='gender'
                                        className="select select-sm w-full max-w-xs"
                                        {...register("gender")}
                                    >
                                        <option> Male </option>
                                        <option> Female </option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> Address   </span>
                                </label>
                                <textarea
                                    name='address'
                                    placeholder="Address"
                                    {...register("address")}
                                    className='textarea textarea-bordered h-24 textarea-sm'></textarea>
                            </div>
                            <div className="form-control w-full max-w-xs">
                                <label className="label">
                                    <span className="label-text"> Telephone Number    </span>
                                </label>
                                <input
                                    type="text"
                                    name='telp'
                                    placeholder="No. Telp"
                                    {...register("phone")}
                                    className="input input-bordered input-sm w-full max-w-xs" />
                            </div>
                        </div>
                        <div className="mt-5 grid grid-cols-1 gap-4">
                            <div className='flex gap-10'>
                                <div className="form-control w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text"> Province </span>
                                    </label>
                                    <select
                                        name='province'
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        required
                                        {...register("province")}
                                        onChange={e => {
                                            handleChange(e);
                                        }}
                                    >
                                        {provinceList.map((province, index) => (
                                            <option key={index} value={province.name} id={province.id}>
                                                {province.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-control flex-initial w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text"> Regency </span>
                                    </label>
                                    <select
                                        name='regency'
                                        id='regency'
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        {...register("regency")}
                                        onChange={e => {
                                            handleChangeRegencies(e);
                                        }}
                                        disabled
                                    >
                                        {regenciesList.map((regency, index) => (
                                            <option key={index} value={regency.name} id={regency.id}>
                                                {regency.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
                                <div className="form-control flex-initial w-full max-w-xs">
                                    <label className="label">
                                        <span className="label-text"> District </span>
                                    </label>
                                    <select
                                        name='district'
                                        id='district'
                                        {...register("district")}
                                        className="input input-bordered input-sm w-full max-w-xs"
                                        disabled
                                    >
                                        {districtList.map((district, index) => (
                                            <option key={index} value={district.name}>
                                                {district.name}
                                            </option>
                                        ))}
                                    </select>
                                </div>
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
                        Save
                    </button>
                </div>
            </form>
        </div>
    )
}

export default AddUser

