import React from 'react'
import { useLocation, Link } from 'react-router-dom';
import { HomeIcon } from '@heroicons/react/24/outline'

const Breadcrumbs = () => {

    let crumbLink = ''
    const location = useLocation()
    const crumbPath = location.pathname.split('/')
    .filter((path) => path !== '')
    .map((crumb) => {
        crumbLink += `/${crumb}`
        var newcrumb = crumb.replace(/-/g, " ");
        return <Link to={crumbLink} key={crumb}>
                {newcrumb}
            </Link>
        })
        
    return (
        <div className="text-sm breadcrumbs px-6 py-4">
            <ul>
                <li><span href='/'><HomeIcon className='w-4 h-4 stroke-current' /></span></li>
                <li><span href={crumbPath} className='capitalize '>{crumbPath}</span></li>
            </ul>
        </div>
    )
}

export default Breadcrumbs
