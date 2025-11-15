import { useState, useCallback } from "react";

interface useCounterProps {
	initialCount?: number
}

export const useCounter = ({initialCount = 0}: useCounterProps = {}) => {
	const [count, setCount] = useState(initialCount);

	const increment = useCallback(() => {
		setCount(prev => prev + 1)
	}, [])

	const decrement = useCallback(() => {
		setCount(prev => prev - 1)
	}, [])

	return { count, increment, decrement }
	
}
