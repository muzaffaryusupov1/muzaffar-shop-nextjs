'use client'

import { useState } from 'react'

function useLocalStorage<T>(key: string, initialValue: T) {
	const [storedVakue, setStoredVakue] = useState<T>(() => {
		if (typeof window !== 'undefined') {
			const item = localStorage.getItem(key)
			return item ? JSON.parse(item) : initialValue
		}
		return initialValue
	})

	const setValue = (value: T) => {
		setStoredVakue(value)
		if (typeof window !== 'undefined') {
			localStorage.setItem(key, JSON.stringify(value))
		}
	}

	return [storedVakue, setValue] as const
}

export default useLocalStorage
