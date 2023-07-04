import React from 'react'
import navigation from '../lib/constants/navigation';
import { NavLink, Routes, Link, useLocation } from 'react-router-dom'
import TailwindIcon from '../assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg';

const Sidebar = () => {
    return (
        <div className="drawer-side">
            <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
            <ul className="menu w-72 rounded-box h-screen">
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
                                                    <NavLink to={submen.path}>
                                                        <span className='inline-block align-bottom mr-2'>{submen.icon}</span>
                                                        <span className=''>{submen.name}</span>
                                                    </NavLink >
                                                </summary>
                                            </li>
                                        ))}
                                        <summary>{item.icon}{item.name}</summary>
                                    </details>
                                ) : <NavLink to={item.path} >
                                    {item.icon}
                                    {item.name}
                                </NavLink >
                                }
                            </li>
                        )
                    })
                }

            </ul>
        </div>
    )
}

export default Sidebar