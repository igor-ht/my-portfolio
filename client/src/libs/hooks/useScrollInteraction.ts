import { useEffect, useState } from 'react';
import debounce from '../debounce';

export default function useScrollInteraction() {
	const [scrollDirection, setScrollDirection] = useState('');
	const [anchorTrigger, setAnchorTrigger] = useState(false);

	useEffect(() => {
		let lastScrollY = window.scrollY;

		const onScroll = debounce(() => {
			const htmlDocument = document.firstElementChild as HTMLElement;
			if (htmlDocument.style.overflowY === 'hidden') return;
			htmlDocument.classList.add('on-scrollbar');
			const scrollY = window.scrollY;
			const direction = anchorTrigger === false && scrollY > lastScrollY ? 'down' : 'up';
			if (direction !== scrollDirection && (scrollY - lastScrollY > 10 || scrollY - lastScrollY < -10)) setScrollDirection(direction);
			lastScrollY = scrollY > 0 ? scrollY : 0;
			debounce(() => setTimeout(() => htmlDocument.classList.remove('on-scrollbar'), 2000), 2000)();
		}, 2000);

		const onAnchorTrigger = () => {
			setAnchorTrigger(true);
			setTimeout(() => setAnchorTrigger(false), 1000);
		};

		window.addEventListener('scroll', onScroll);
		const navbar = document.getElementById('navbar') as HTMLHeadingElement;
		const anchorTags = navbar.querySelectorAll('a') as NodeListOf<HTMLAnchorElement>;
		anchorTags.forEach((anchor) => anchor.addEventListener('click', onAnchorTrigger));

		return () => {
			window.removeEventListener('scroll', onScroll);
			anchorTags.forEach((anchor) => anchor.removeEventListener('click', onAnchorTrigger));
		};
	});

	return [scrollDirection];
}
