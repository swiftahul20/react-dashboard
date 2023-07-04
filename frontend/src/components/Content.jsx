import React from 'react'
import { Outlet } from 'react-router-dom'
import Breadcrumbs from './Breadcrumbs'
import Navbar from './Navbar'

function Content() {
    return (
        <div className="drawer-content flex flex-col ">
            <Navbar />
            <Breadcrumbs />
            <main className="flex-1 overflow-y-auto pt-8 px-6 bg-base-200">
                {<Outlet />}
            </main>
        </div>
    )
}

export default Content