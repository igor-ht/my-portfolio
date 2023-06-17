import { useEffect, useState } from 'react';
import debounce from '../debounce';

export default function useScrollInteraction() {
	const [scrollDirection, setScrollDirection] = useState('up');

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const onScroll = debounce(() => {
			const htmlDocument = document.firstElementChild as HTMLElement;
			htmlDocument.classList.add('on-scrollbar');
			const scrollY = window.scrollY;
			const direction = scrollY > lastScrollY ? 'down' : 'up';
			if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) setScrollDirection(direction);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			debounce(() => setTimeout(() => htmlDocument.classList.remove('on-scrollbar'), 2000), 2000)();
		}, 2000);

		window.addEventListener('scroll', onScroll);
		return () => {
			window.removeEventListener('scroll', onScroll);
		};
	});

	return [scrollDirection];
}
