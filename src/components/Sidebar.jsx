import React from 'react'
import {
    BrowserRouter as Router,
    Link
} from "react-router-dom";
import { Sidebar } from 'flowbite-react';
import { SidebarItemGroup } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup';
import TailwindIcon from '../assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg';
import Content from './Content';
import { DASHBOARD_SIDEBAR_LINKS } from '../lib/constants/navigation';
import { SidebarItem } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItem';

const Sidebarr = () => {
    return (
        <div>
            <Sidebar className='fixed top-0 left-0 z-40 w-64 pr-0 border-r'>
                <div>
                    <div className='h-12 w-12 ml-3 mb-6'>
                        <img src={TailwindIcon} className='h-full w-full' />
                    </div>
                    {/* {DASHBOARD_SIDEBAR_LINKS.map((item, index) => (
                        <Sidebar.Items>
                            <SidebarItemGroup key={index}>
                                {item.submenu ? (
                                    <Sidebar.Collapse
                                        className='text-left hover:text-blue-400'
                                        label={item.label}
                                    >
                                        {item.submenu.map((submen, index) => (
                                            <Link to={submen.path}>
                                                <Sidebar.Item key={index} className='hover:text-blue-400 px-6'>
                                                    {submen.label}
                                                </Sidebar.Item>
                                            </Link>
                                        ))}
                                    </Sidebar.Collapse>
                                ) : (
                                    <Link to={item.path}>
                                        <SidebarItem
                                            className='hover:text-blue-400'
                                        >
                                            {item.label}
                                        </SidebarItem>
                                    </Link>
                                )}
                            </SidebarItemGroup>
                        </Sidebar.Items>
                    ))} */}
                </div>
            </Sidebar>
        </div>
    )
}

export default Sidebarr