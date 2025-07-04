'use client'

import { ProductType } from '@/interface'
import Link from 'next/link'
import { FC } from 'react'
import CustomImage from './image'

const Product: FC<{ product: ProductType }> = ({ product }) => {
	return (
		<Link
			href={`/product/${product.id}`}
			className='h-96 flex flex-col p-6 rounded-lg group hover:scale-105 transition-transform ease-out duration-200'
			scroll={false}
		>
			<div className='relative max-h-80 flex-1 border'>
				<CustomImage product={product} fill />
			</div>
			<h3 className='tracking-widest text-indigo-500 text-xs font-medium title-font'>
				{product.category}
			</h3>
			<div className='font-semibold flex items-center justify-between mt-4 mb-1'>
				<p className='w-44 truncate'>{product.title}</p>
				<p>
					{product.price.toLocaleString('en-US', {
						style: 'currency',
						currency: 'usd',
					})}
				</p>
			</div>
			<p className='leading-relaxed text-base line-clamp-2 '>{product.description}</p>
		</Link>
	)
}

export default Product
