import React from 'react'
import Avatar from '../assets/img/avatar.jpg'
import Github from '../assets/github-mark.svg'

function Navbar() {
    return (
        <div className="navbar bg-base-100 shadow-sm">
            <div className="flex-1">
                {/* <a className="text-xl"> Dashboard </a> */}
            </div>
            <div className="flex-2 mr-2">
                <div className="w-10 rounded-full">
                    <a href='https://github.com/swiftahul20/react-dashboard' target='_blank'>
                        <img src={Github} alt='github' />
                    </a>
                </div>
            </div>
            <div className="flex-none gap-2">
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src={Avatar} />
                        </div>
                    </label>
                    <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        <li><a>Logout</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar