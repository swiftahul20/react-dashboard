import React from 'react'
import navigation from '../lib/constants/navigation';
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import TailwindIcon from '../assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg';

const DaisySidebar = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu bg-base-100 w-72 rounded-box h-screen">
                <div className='h-12 w-12 ml-3 mb-6'>
                    <img src={TailwindIcon} className='h-full w-full' />
                </div>
                <li>
                    <a>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Item 2
                    </a>
                </li>
            </ul>
        </div>
    )
}

export default DaisySidebar