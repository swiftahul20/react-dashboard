import React from 'react'
import { Sidebar } from 'flowbite-react';
import { HomeIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'
import TailwindIcon from '../assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg'
import { SidebarCollapse } from 'flowbite-react/lib/esm/components/Sidebar/SidebarCollapse';
import { SidebarItemGroup } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup';


const TesSidebar = () => {

    const menus = [
        {
            name: 'Home', url: '/home', icon: ''
        },
        {
            name: 'User', url: '/user', icon: '',
            submenu: [
                {
                    title: 'Add User', url: '/add-user',
                },
                {
                    title: 'User List', url: 'user-list'
                }
            ]
        },
        { name: 'Settings', url: 'settings', icon: '' },
    ]

    return (
        // <Sidebar className='fixed top-0 left-0 z-40 w-64 h-screen bg-white'>
        //     <div className="h-full flex flex-col gap-y-2 overflow-y-auto">
        //         <div className='h-12 w-12 ml-3 mb-6'>
        //             <img src={TailwindIcon} className='h-full w-full' />
        //         </div>
        //         {menus.map((menu, index) => (
        //             <Sidebar.Items key={index}>
        //                 <Sidebar.ItemGroup>
        //                     {menu.submenu ? (
        //                         <SidebarCollapse label={menu.name} icon={UserCircleIcon}>
        //                             <>
        //                                 {menu.submenu.map((submen, index) => (
        //                                     <Sidebar.Item key={index}>
        //                                         <div href="" className="flex">
        //                                             <svg aria-hidden="true" className='h-6 w-6 text-gray-500'> {submen.icon} </svg>
        //                                             <span className="flex-1 whitespace-nowrap text-gray-500"> {submen.title} </span>
        //                                         </div>
        //                                     </Sidebar.Item>
        //                                 ))}
        //                             </>
        //                         </SidebarCollapse>
        //                     ) : (
        //                         <Sidebar.Item>
        //                                 <p className='flex'>
        //                                     <svg aria-hidden="true" className='h-6 w-6 text-gray-500'> {menu.icon} </svg>
        //                                     <span className="flex-1 ml-3 whitespace-nowrap text-gray-500"> {menu.name} </span>
        //                                 </p>
        //                         </Sidebar.Item>
        //                     )}
        //                 </Sidebar.ItemGroup>
        //             </Sidebar.Items>
        //         ))}
        //     </div>
        // </Sidebar>
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
                                            {submen.title}
                                        </Sidebar.Item>
                                    ))}
                                </Sidebar.Collapse>
                            ) : (
                                <Sidebar.Item
                                    href={menu.url}
                                    icon={menu.icon}
                                    className='hover:text-blue-400'
                                >
                                    <p>
                                        {menu.name}
                                    </p>
                                </Sidebar.Item>
                            )}
                        </SidebarItemGroup>
                    </Sidebar.Items>
                ))}
            </div>
        </Sidebar>
    )
}

export default TesSidebar