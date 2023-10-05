import { useEffect } from 'react';

export default function useSkillsScroller() {
	useEffect(() => {
		function addAnimation() {
			const scroller = document.querySelector('.skills');
			scroller?.setAttribute('data-animated', 'true');
			
			const scrollerInner = scroller?.querySelector('.icons');
			const scrollerContent = Array.from(scrollerInner?.children || []);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true) as HTMLElement;
				duplicatedItem.setAttribute('aria-hidden', 'true');
				scrollerInner?.appendChild(duplicatedItem);
			});
		}

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) addAnimation();
	}, []);
}
