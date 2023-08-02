import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { ModalDetail } from '../components/Modal.jsx';
import { toastSuccess, toastError } from "../components/Toast.jsx";

const serverURI = 'https://express-api-vercel-rosy.vercel.app';


const UserList = (props) => {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState("");
    const [loading, setloading] = useState(false);

    useEffect(() => {
        getUsers();
    }, []);

    const getUsers = async () => {
        console.log(serverURI);
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

    const getID = async (e) => {
        e.preventDefault();
        const ids = e.target.id;
        setloading(true);
        console.log(ids);
        try {
            const response = await axios.get(`${serverURI}/users/${ids}`);
            window.modal_detail.showModal();
            setUser(response.data)
            setloading(false);
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
            <dialog id="modal_detail" className="modal">
                <ModalDetail {...user} {...loading} />
            </dialog>
            <table className="table">
                {/* head */}
                <thead className='bg-blue-100'>
                    <tr>
                        <th> No </th>
                        <th> First Name </th>
                        <th> last Name </th>
                        <th> Email </th>
                        <th> Gender </th>
                        <th className='text-center'> Option </th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user, index) => (
                        <tr key={index}>
                            <th> {index + 1} </th>
                            <th>
                                <button id={user.id} className='hover:text-info' onClick={getID}>
                                    {user.first_name}
                                </button>
                            </th>
                            <th> {user.last_name} </th>
                            <td> {user.email ? user.email : "-"} </td>
                            <td> {user.gender ? user.gender : "-"} </td>
                            <td className='flex justify-center gap-2'>
                                <Link
                                    to={`/edit-user/${user.id}`}
                                    className='btn btn-xs bg-blue-400 hover:bg-blue-500'> Edit </Link>
                                <button onClick={() => deleteUser(user.id)} className='btn btn-xs bg-red-400 hover:bg-red-500'> Delete </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList;