'use client'

import { ProductType } from '@/interface'
import Image from 'next/image'
import { FC, useState } from 'react'

interface Props {
	product: ProductType
	fill?: boolean
}

const CustomImage: FC<Props> = ({ product, fill }) => {
	const [isLoading, setIsLoading] = useState(true)

	return (
		<>
			{fill ? (
				<Image
					src={product.image}
					alt={product.title}
					fill
					className={`object-contain duration-700 ease-in-out group-hover:opacity-75 ${
						isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
					}`}
					onLoadingComplete={() => setIsLoading(false)}
					sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
				/>
			) : (
				<Image
					src={product.image}
					alt={product.title}
					width={400}
					height={350}
					className={`lg:w-1/2 w-full lg:h-auto h-64 object-contain object-center rounded duration-700 ease-in-out group-hover:opacity-75 ${
						isLoading ? 'scale-110 blur-2xl grayscale' : 'scale-100 blur-0 grayscale-0'
					}`}
					onLoadingComplete={() => setIsLoading(false)}
					style={{ width: 'auto', height: 'auto' }}
					priority={false}
				/>
			)}
		</>
	)
}

export default CustomImage
