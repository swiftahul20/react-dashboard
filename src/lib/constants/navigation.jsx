import { HomeIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

export const DASHBOARD_SIDEBAR_LINKS = [
	{
		key: 'dashboard',
		label: 'Dashboard',
		path: '/',
		icon: <HomeIcon />
	},
	{
		key: 'user',
		label: 'User',
		path: '/user',
		icon: <UserCircleIcon />,
        submenu: [
            {
                key: 'add-user',
                label: 'Add User',
                path: '/add-user'
            },
            {
                key: 'user-list',
                label: 'User List',
                path: '/user-list'
            }
        ]
	},
	{
		key: 'settings',
		label: 'Settings',
		path: '/settings',
		icon: <Cog6ToothIcon />
	},
]