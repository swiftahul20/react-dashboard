import { HomeIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

export const menuItems = [
    { id: 1, name: 'Home', url: '/home', icon: <HomeIcon /> },
    {
        id: 2, name: 'User', url: '/user', icon: <UserCircleIcon />,
        submenu: [
            {
                title: 'Add User', url: '/add-user',
            },
            {
                title: 'User List', url: 'user-list'
            }
        ]
    },
    { id: 3, name: 'Settings', url: '/settings', icon: <Cog6ToothIcon /> },
]