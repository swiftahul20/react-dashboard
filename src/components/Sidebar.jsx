import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { Sidebar } from 'flowbite-react';
import TailwindIcon from '../assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg'
import { SidebarItemGroup } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup';

const Sidebarr = () => {

    const menus = [
        {
            name: 'Home', path: '/', icon: ''
        },
        {
            name: 'User', path: '/user', icon: '',
            submenu: [
                {
                    title: 'Add User', path: '/add-user',
                },
                {
                    title: 'User List', path: 'user-list'
                }
            ]
        },
        { name: 'Settings', path: 'settings', icon: '' },
    ]

    return (
        <Router>

            <Sidebar className='fixed top-0 left-0 z-40 w-64 pr-0 border-r'>
                <div className='font-semibold'>
                    <div className='h-12 w-12 ml-3 mb-6'>
                        <img src={TailwindIcon} className='h-full w-full' />
                    </div>
                    {menus.map((menu, index) => (
                        <Sidebar.Items key={index}>
                            <SidebarItemGroup>
                                {menu.submenu ? (
                                    <Sidebar.Collapse
                                        className='text-left hover:text-blue-400'
                                        label={menu.name}
                                        icon={menu.icon}
                                    >
                                        {menu.submenu.map((submen, index) => (
                                            <Sidebar.Item key={index} className='hover:text-blue-400 px-6' href={submen.url}>
                                                <Link to={submen.path}>
                                                    {submen.title}
                                                </Link>
                                            </Sidebar.Item>
                                        ))}
                                    </Sidebar.Collapse>
                                ) : (
                                    <Sidebar.Item
                                        href={menu.path}
                                        icon={menu.icon}
                                        className='hover:text-blue-400'
                                    >
                                        <Link to={menu.path}>
                                            <p>
                                                {menu.name}
                                            </p>
                                        </Link>
                                    </Sidebar.Item>
                                )}
                            </SidebarItemGroup>
                        </Sidebar.Items>
                    ))}
                </div>
            </Sidebar>
        </Router>
    )
}

export default Sidebarr