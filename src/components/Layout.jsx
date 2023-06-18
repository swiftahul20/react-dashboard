import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";

export default function Layout() {
  return (
    <div> 
      <div><Navbar /></div>
      <div><Sidebar /></div>
      <div className="w-full pl-72 p-10">{<Outlet />}</div>
    </div>
  )
}
