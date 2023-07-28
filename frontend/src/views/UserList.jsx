import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { toastSuccess, toastError } from "../components/Toast.jsx";

const serverURI = 'http://ec2-3-27-95-22.ap-southeast-2.compute.amazonaws.com:8000';

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get(`${serverURI}/users`);
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async (id) => {
        console.log(id);
        try {
            const response = await axios.delete(`${serverURI}/users/${id}`);
            console.log('Success', response.data);
            toastSuccess("Profile deleted")
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="overflow-x-auto bg-white rounded-xl px-6 py-4">
            <div className='py-4'>
                <h2 className="text-base font-semibold leading-7 text-gray-900"> Profile Information </h2>
                <p className="mt-1 text-sm leading-6 text-gray-600"> List of all profile and their details. </p>
            </div>
            <table className="table">
                {/* head */}
                <thead className='bg-blue-100'>
                    <tr>
                        <th> No </th>
                        <th> First Name </th>
                        <th> last Name </th>
                        <th> Email </th>
                        <th> Gender </th>
                        <th> Age </th>
                        <th className='text-center'> Option </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <th> {index + 1} </th>
                            <th> {user.first_name} </th>
                            <th> {user.last_name} </th>
                            <td> {user.email? user.email : "-"} </td>
                            <td> {user.gender} </td>
                            <td> {user.age} </td>
                            <td className='flex justify-center gap-2'>
                                <Link
                                    to={`/edit-user/${user.id}`}
                                    className='btn btn-sm btn-warning'> Edit </Link>
                                <button onClick={() => deleteUser(user.id)} className='btn btn-sm btn-error'> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
