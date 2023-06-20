import { HomeIcon, UserCircleIcon, UserPlusIcon, UsersIcon, Cog6ToothIcon } from '@heroicons/react/24/outline'

const iconClasses = `h-6 w-6`
const submenuIconClasses = `h-5 w-5`

const navigation = [
	{
		path: '/',
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
				icon: <UserPlusIcon className={submenuIconClasses} />,
				name: 'Add User',
			},
			{
				path: '/user-list', //url
				icon: <UsersIcon className={submenuIconClasses} />, // icon component
				name: 'User List', // name that appear in Sidebar
			},
		]
	},
	{
		path: '/settings',
		icon: <Cog6ToothIcon className={iconClasses} />,
		name: 'Settings',
	}
]

export default navigation