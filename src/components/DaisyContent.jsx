import React from 'react'
import DaisyNavbar from './DaisyNavbar'
import { Outlet } from 'react-router-dom'
import { Breadcrumb } from 'flowbite-react'
import Breadcrumbs from './Breadcrumbs'

function DaisyContent() {
    return (
        <div className="drawer-content flex flex-col ">
            <DaisyNavbar />
            <Breadcrumbs />
            <main className="flex-1 overflow-y-auto pt-8 px-6 bg-base-200">
                {<Outlet />}
            </main>
        </div>
    )
}

export default DaisyContent