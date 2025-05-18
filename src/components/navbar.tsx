'use client'

import {
	Bars4Icon,
	HomeIcon,
	InboxIcon,
	PhoneIcon,
	ShoppingBagIcon,
	XMarkIcon,
} from '@heroicons/react/24/outline'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

import Button from './ui/button'

const Navbar = () => {
	const [modal, setModal] = useState(false)

	const modalNavList = [
		{
			label: 'Home Page',
			route: '/',
			icon: <HomeIcon className='w-5 h-5' />,
		},
		{
			label: 'All products',
			route: '/products',
			icon: <InboxIcon className='w-5 h-5' />,
		},
		{
			label: 'Contacts',
			route: '/contacts',
			icon: <PhoneIcon className='w-5 h-5' />,
		},
		{
			label: 'My bag',
			route: '/shopping-cart',
			icon: <ShoppingBagIcon className='w-5 h-5' />,
		},
	]

	return (
		<header className='flex items-center px-4 md:px-12 py-2 justify-between fixed top-0 w-full z-50 shadow bg-white'>
			<Link href={'/'}>
				<Image
					src={'/site-logo.png'}
					alt='site logo'
					width={150}
					height={40}
					style={{ width: 'auto', height: 'auto' }}
				/>
			</Link>

			<div className='flex items-center space-x-2.5 text-sm'>
				<button onClick={() => setModal(true)} className='hidden max-md:block'>
					<Bars4Icon className='w-5 h-5' />
				</button>

				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center max-md:hidden'>
					<Link href={'/'} className='mr-5 hover:text-gray-900'>
						Home page
					</Link>
					<Link href={'/products'} className='mr-5 hover:text-gray-900'>
						All products
					</Link>
					<Link href={'/contacts'} className='mr-5 hover:text-gray-900'>
						Contacts
					</Link>
				</nav>
				<Link href={'/shopping-cart'}>
					<Button>My bag</Button>
				</Link>
			</div>
			{modal && (
				<div className='fixed inset-0'>
					<div
						className='fixed inset-0 bg-black/30'
						aria-hidden='true'
						onClick={() => setModal(false)}
					/>

					<div className='w-96 h-full bg-white text-black absolute z-50 top-0 -right-0 p-4'>
						<h5
							id='drawer-navigation-label'
							className='text-base font-semibold text-gray-500 uppercase dark:text-gray-400'
						>
							Menu
						</h5>
						<button
							type='button'
							data-drawer-hide='drawer-navigation'
							aria-controls='drawer-navigation'
							className='text-gray-400 bg-transparent rounded-lg text-sm w-8 h-8 absolute top-2.5 end-2.5 inline-flex items-center justify-center'
							onClick={() => setModal(false)}
						>
							<XMarkIcon />
						</button>
						{modalNavList.map(navItem => (
							<Link
								key={navItem.label}
								href={navItem.route}
								className='flex items-center gap-x-1.5 py-1 px-3 text-gray-800 font-medium text-base mt-7 first:mt-0'
								onClick={() => setModal(false)}
							>
								<span>{navItem.icon}</span>
								{navItem.label}
							</Link>
						))}
					</div>
				</div>
			)}
		</header>
	)
}

export default Navbar
