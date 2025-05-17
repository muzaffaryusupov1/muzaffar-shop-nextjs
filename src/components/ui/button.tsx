import React from 'react'

const Button = ({ children, className }: { children: React.ReactNode; className?: string }) => {
	return (
		<button
			className={`button bg-blue-600 text-white border-transparent hover:border-blue-600 hover:bg-transparent hover:text-blue-600 ${className}`}
		>
			{children}
		</button>
	)
}

export default Button
