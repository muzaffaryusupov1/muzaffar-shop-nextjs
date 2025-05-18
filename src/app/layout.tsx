'use client'

import Footer from '@/components/footer'
import Navbar from '@/components/navbar'
import { Montserrat } from 'next/font/google'
import { usePathname } from 'next/navigation'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { useEffect, useRef } from 'react'
import { Toaster } from 'sonner'
import './globals.css'

const montserrat = Montserrat({ subsets: ['latin'], display: 'swap' })

NProgress.configure({ showSpinner: false, speed: 400, minimum: 0.2 })

export default function RootLayout({ children }: { children: React.ReactNode }) {
	const pathname = usePathname()
	const previousPath = useRef(pathname)

	useEffect(() => {
		if (previousPath.current !== pathname) {
			NProgress.start()
		}

		previousPath.current = pathname

		const handleComplete = () => {
			NProgress.done()
		}

		handleComplete()

		return () => {
			handleComplete()
		}
	}, [pathname])

	return (
		<html lang='en'>
			<body className={montserrat.className}>
				<div className='wrapper'>
					<Navbar />
					<main className='main'>
						<Toaster />
						{children}
					</main>
					<Footer />
				</div>
			</body>
		</html>
	)
}
