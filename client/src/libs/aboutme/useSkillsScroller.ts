import { useEffect } from 'react';

export default function useSkillsScroller() {
	useEffect(() => {
		const scroller = document.querySelector('.skills');
		const scrollerInner = scroller?.querySelector('.icons');
		const scrollerContent = Array.from(scrollerInner?.children || []);

		function addAnimation() {
			scroller?.setAttribute('data-animated', 'true');

			scrollerContent.forEach((item) => {
				const computedStyle = getComputedStyle(item);
				console.log(computedStyle);
				const duplicatedItem = item.cloneNode(true) as HTMLElement;
				duplicatedItem.setAttribute('aria-hidden', 'true');
				scrollerInner?.appendChild(duplicatedItem);
			});
		}

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) addAnimation();
	}, []);
}
