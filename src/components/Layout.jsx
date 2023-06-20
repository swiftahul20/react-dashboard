import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from "./Navbar";
import Sidebar from "./Sidebar";
import Breadcrumbs from './Breadcrumbs';
import DaisySidebar from './DaisySidebar';
import DaisyContent from './DaisyContent';

export default function Layout() {
  return (
    <div>
      {/* <div><Navbar /></div> */}
      {/* <div className="w-full pl-64"><Breadcrumbs /></div> */}
      {/* <div><Sidebar /></div> */}
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <DaisySidebar />
        {/* <div className="w-full pl-72 p-10">{<Outlet />}</div> */}
        <DaisyContent />
      </div>
    </div>
  )
}
