import { useState, useEffect } from 'react';
import debounce from '../debounce';

export default function useScrollDirection() {
	const [scrollDirection, setScrollDirection] = useState('up');

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const updateScrollDirection = debounce(() => {
			const scrollY = window.scrollY;
			const direction = scrollY > lastScrollY ? 'down' : 'up';
			if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) {
				setScrollDirection(direction);
			}
			lastScrollY = scrollY > 0 ? scrollY : 0;
		}, 500);

		window.addEventListener('scroll', updateScrollDirection);
		return () => {
			window.removeEventListener('scroll', updateScrollDirection);
		};
	}, [scrollDirection]);

	return [scrollDirection, setScrollDirection];
}
