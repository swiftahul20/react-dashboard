import React, { useState } from 'react'
import { menuItems } from './MenuItems'
import TailwindIcon from '../assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg'
import { HomeIcon, UserCircleIcon, Cog6ToothIcon, ChevronDownIcon } from '@heroicons/react/24/outline'

const Sidebar = () => {

    const menus = [
        { name: 'Home', url: '/home', icon: <HomeIcon /> },
        {
            name: 'User', url: '/user', icon: <UserCircleIcon />,
            submenu: [
                {
                    title: 'Add User', url: '/add-user',
                },
                {
                    title: 'User List', url: 'user-list'
                }
            ]
        },
        { name: 'Settings', url: '/settings', icon: <Cog6ToothIcon />, },
    ]


    return (
        <aside className="fixed top-0 left-0 z-40 w-64 h-screen" aria-label="Sidebar">
            <div className="h-full px-3 py-4 bg-white border-r-2 flex flex-col gap-y-2 overflow-y-auto">
                <div className='h-12 w-12 ml-3'>
                    <img src={TailwindIcon} className='h-full w-full' />
                </div>
                <div>
                    <ul className="space-y-2 font-medium">
                        {menus.map((item, index) => (
                            <li className='mt-4' key={index}>
                                {item.submenu ? (
                                    <>
                                        <a href='' className='flex items-center p-2 rounded-md text-black hover:text-blue-400 hover:bg-gray-100'>
                                            <button type="button" className="inline-flex items-center gap-x-3 text-md font-semibold leading-6" aria-expanded="false">
                                                <svg className='h-6 w-6 text-blue-500'> {item.icon} </svg>
                                                <span> {item.name} </span>
                                                <svg className="h-3 w-3" viewBox="0 0 20 20" aria-hidden="true">
                                                    <ChevronDownIcon />
                                                </svg>
                                            </button>
                                        </a>
                                    </>
                                ) : (
                                    <a href='' className='flex items-center p-2 rounded-md text-black hover:text-blue-400 hover:bg-gray-100'>
                                        <svg className='h-6 w-6 text-blue-500'>{item.icon}</svg>
                                        <span className='ml-3'>{item.name}</span>
                                    </a>
                                )}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </aside>
    )
}

export default Sidebar