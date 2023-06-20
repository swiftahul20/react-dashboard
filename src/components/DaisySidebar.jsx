import React from 'react'
import navigation from '../lib/constants/navigation';
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import TailwindIcon from '../assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg';

const DaisySidebar = () => {
    return (
        <div className="drawer-side text-5xl">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu bg-base-100 w-72 rounded-box h-screen">
                <div className='h-12 w-12 ml-3 mb-6'>
                    <img src={TailwindIcon} className='h-full w-full' />
                </div>
                {
                    navigation.map((item, key) => {
                        return (
                            <li key={key}>
                                {item.submenu ? (
                                    <details open>
                                        {item.submenu.map((submen, index) => (
                                            <li key={index} className='px-4 flex flex-row'>
                                                <summary className='w-full'>
                                                    <Link to={submen.path}>
                                                    <span className='inline-block align-bottom mr-2'>{submen.icon}</span>
                                                    <span className=''>{submen.name}</span>
                                                    </Link>
                                                </summary>
                                            </li>
                                        ))}
                                        <summary>{item.icon}{item.name}</summary>
                                    </details>
                                ) : <Link to={item.path}>
                                    {item.icon}
                                    {item.name}
                                </Link>
                                }
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default DaisySidebar