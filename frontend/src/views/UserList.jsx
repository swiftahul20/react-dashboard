import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

export default function UserList() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        try {
            const response = await axios.get('http://localhost:8000/users');
            setUsers(response.data);
        } catch (error) {
            console.log(error);
        }
    }

    const deleteUser = async (id) => {
        try {
            await axios.delete(`http://localhost:5000/users/${id}`);
            getUsers();
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <div className="overflow-x-auto bg-white rounded-xl px-6 py-4">
            <div className='py-4'>
                <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
                <p className="mt-1 text-sm leading-6 text-gray-600">Use a permanent address where you can receive mail.</p>
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
                        <th> Address </th>
                        <th className='text-center'> Option </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <th> {index + 1} </th>
                            <th> {user.first_name} </th>
                            <th> {user.last_name} </th>
                            <td> {user.email} </td>
                            <td> {user.gender} </td>
                            <td> {user.age} </td>
                            <td> - </td>
                            <td className='flex justify-center gap-2'>
                                <Link 
                                to={`/edit-user/${user._id}`}
                                className='btn btn-sm btn-warning'> Edit </Link>
                                <button onClick={() => deleteUser(user._id)} className='btn btn-sm btn-error'> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}
