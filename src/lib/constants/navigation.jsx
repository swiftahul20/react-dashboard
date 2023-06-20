import { HomeIcon, UserCircleIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

// export const DASHBOARD_SIDEBAR_LINKS = [
// 	{
// 		key: 'dashboard',
// 		label: 'Dashboard',
// 		path: '/',
// 		icon: <HomeIcon />
// 	},
// 	{
// 		key: 'user',
// 		label: 'User',
// 		path: '/user',
// 		icon: <UserCircleIcon />,
//         submenu: [
//             {
//                 key: 'add-user',
//                 label: 'Add User',
//                 path: '/add-user'
//             },
//             {
//                 key: 'user-list',
//                 label: 'User List',
//                 path: '/user-list'
//             }
//         ]
// 	},
// 	{
// 		key: 'settings',
// 		label: 'Settings',
// 		path: '/settings',
// 		icon: <Cog6ToothIcon />
// 	},
// ]

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const navigation = [
	{
		path: '/app/dashboard',
		icon: <HomeIcon className={iconClasses} />,
		name: 'Dashboard',
	},
	{
		path: '', 
		icon: <UserCircleIcon className={`${iconClasses} inline`} />, 
		name: 'User',
		submenu: [
			{ 
				path: '/add-user',
				icon: <UserCircleIcon className={submenuIconClasses} />,
				name: 'Add User',
			},
			{
				path: '/user-list', //url
				icon: <UserCircleIcon className={submenuIconClasses} />, // icon component
				name: 'User List', // name that appear in Sidebar
			},
		]
	},
	{
		path: '/app/settings',
		icon: <Cog6ToothIcon className={iconClasses} />,
		name: 'Settings',
	}
]

export default navigation