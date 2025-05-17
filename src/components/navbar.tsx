import Image from 'next/image'
import Link from 'next/link'
import Button from './ui/button'

const Navbar = () => {
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
				<nav className='md:ml-auto flex flex-wrap items-center text-base justify-center'>
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
		</header>
	)
}

export default Navbar
