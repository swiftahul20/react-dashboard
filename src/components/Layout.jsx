import React from 'react'
import { Sidebar } from 'flowbite-react';
import { SidebarItemGroup } from 'flowbite-react/lib/esm/components/Sidebar/SidebarItemGroup';
import { Link } from "react-router-dom";
import TailwindIcon from '../assets/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg';
import Navbar from './Navbar';
import Content from './Content';
import Sidebarr from "./Sidebar";


const Layout = () => {
    return (
        <div>
            <Navbar />
            <Sidebarr />
            <Content />
        </div>
    )
}

export default Layout