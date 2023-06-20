import React from 'react'
import { Breadcrumb } from 'flowbite-react';
import { useLocation, Link } from 'react-router-dom';
import { HiHome } from 'react-icons/hi';

const Breadcrumbs = () => {

    let crumbLink = ''
    const location = useLocation()
    const crumbPath = location.pathname.split('/')
        .filter((path) => path !== '')
        .map((crumb) => {
            crumbLink += `/${crumb}`
            return <Link to={crumbLink} key={crumb}>
                {crumb}
            </Link>
        })

    return (
        // <Breadcrumb
        //     aria-label="Solid background breadcrumb example"
        //     className="bg-gray-50 px-5 py-3 dark:bg-gray-900"
        // >
        //     <Breadcrumb.Item
        //         href="/"
        //         icon={HiHome}
        //     >
        //         <p>
        //             Home
        //         </p>
        //     </Breadcrumb.Item>
        //     <Breadcrumb.Item href={crumbPath}>
        //         {crumbPath}
        //     </Breadcrumb.Item>
        // </Breadcrumb>
        <div className="text-sm breadcrumbs px-7">
            <ul>
                <li><span href='/'>Home</span></li>
                <li><span href={crumbPath}>{crumbPath}</span></li>
            </ul>
        </div>
    )
}

export default Breadcrumbs
