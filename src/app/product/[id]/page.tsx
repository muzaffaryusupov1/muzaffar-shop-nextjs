import CustomImage from '@/components/image'
import { StarIcon as StarIconOutline } from '@heroicons/react/24/outline'
import { StarIcon } from '@heroicons/react/24/solid'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'

interface Props {
	params: {
		id: number
	}
}

export const metadata: Metadata = {
	title: 'Product Overview',
	description: 'muzaffar shop generated by create next app',
	authors: { name: 'muzaffar' },
	keywords: ['nextjs', 'ecommerce', 'vercel'],
	icons: {
		icon: '/site-icon.png',
	},
}

const ProductDetailedPage = async ({ params: { id } }: Props) => {
	try {
		const res = await fetch(`https://fakestoreapi.com/products/${id}`)
		const product = await res.json()

		return (
			<section className='text-gray-600 body-font overflow-hidden flex items-center justify-center p-10'>
				<div className='container px-5 py-24 mx-auto'>
					<div className='lg:w-4/5 mx-auto flex w-full px-6'>
						<CustomImage product={product} />
						<div className='lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0'>
							<h2 className='text-sm title-font text-gray-500 tracking-widest'>
								{product.category}
							</h2>
							<h1 className='text-gray-900 text-3xl title-font font-medium mb-1'>
								{product.title}
							</h1>
							<span className='title-font font-medium text-xl text-gray-900 mt-4'>
								{product.price.toLocaleString('en-US', {
									style: 'currency',
									currency: 'usd',
								})}
							</span>
							<div className='flex mb-4'>
								<div className='flex items-center text-sm my-4'>
									<p>{product?.rating.rate}</p>
									{product?.rating.rate && (
										<div className='flex items-center ml-2 mr-6'>
											{Array.from({ length: Math.floor(product.rating.rate) }, (_, i) => (
												<StarIcon key={i} className='h-4 w-4 text-yellow-500' />
											))}
											{Array.from({ length: 5 - Math.floor(product.rating.rate) }, (_, i) => (
												<StarIconOutline key={i} className='h-4 w-4 text-yellow-500' />
											))}
										</div>
									)}
									<p className='text-gray-600 text-xs'>{product?.rating.count} reviews</p>
								</div>
							</div>
							<p className='leading-relaxed'>{product.description}</p>
						</div>
					</div>
				</div>
			</section>
		)
	} catch (error) {
		notFound()
	}
}

export default ProductDetailedPage
