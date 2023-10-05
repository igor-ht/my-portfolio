import { useEffect, useState } from 'react';
import debounce from '../debounce';

export default function useScrollInteraction() {
	const [scrollDirection, setScrollDirection] = useState('');

	useEffect(() => {
		let isAnchorClick = false;
		let lastScrollY = window.scrollY;
		const htmlDocument = document.firstElementChild as HTMLElement;
		const navbar = document.getElementById('navbar');
		htmlDocument.style.overflowY = 'auto';

		const handleScroll = debounce(() => {
			if (htmlDocument.style.overflowY === 'hidden') return;
			if (isAnchorClick) return;
			htmlDocument.classList.add('on-scrollbar');
			const scrollY = window.scrollY;
			const direction = scrollY > lastScrollY ? 'down' : 'up';
			if (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10) setScrollDirection(direction);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			debounce(() => setTimeout(() => htmlDocument.classList.remove('on-scrollbar'), 2000), 2000)();
		}, 300);

		let anchorTimeoutId: NodeJS.Timeout | null = null;
		const handleAnchorClick = () => {
			isAnchorClick = true;
			if (anchorTimeoutId !== null) clearTimeout(anchorTimeoutId), (anchorTimeoutId = null);
			anchorTimeoutId = setTimeout(() => {
				isAnchorClick = false;
			}, 1200);
		};

		window.addEventListener('scroll', handleScroll);

		const anchorTags = navbar?.querySelectorAll('a');
		anchorTags?.forEach((anchor) => anchor.addEventListener('click', handleAnchorClick));

		return () => {
			window.removeEventListener('scroll', handleScroll);
			anchorTags?.forEach((anchor) => anchor.removeEventListener('click', handleAnchorClick));
		};
	}, []);

	return [scrollDirection];
}
