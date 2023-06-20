import React from 'react'
import { useLocation, Link } from 'react-router-dom';

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
        <div className="text-sm breadcrumbs px-7">
            <ul>
                <li><span href='/'>Home</span></li>
                <li><span href={crumbPath}>{crumbPath}</span></li>
            </ul>
        </div>
    )
}

export default Breadcrumbs
