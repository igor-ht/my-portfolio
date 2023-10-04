'use client';

import './Scroller.scss';
import Image from 'next/image';
import { useEffect } from 'react';

type Props = {
	skills: {
		id: number;
		src: string;
		alt: string;
		title: string;
		name: string;
	}[];
};

export default function Scroller({ skills }: Props) {
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

		if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
			addAnimation();
		}
	}, []);

	return (
		<div className="skills">
			<section className="icons">
				{skills?.map((skill, i) => {
					return (
						<span
							key={i}
							aria-hidden="false">
							<Image
								src={skill.src}
								alt={skill.alt}
								title={skill.title}
								height="40"
								width="40"
								priority
								quality={1}
							/>
							<p>{skill.name}</p>
						</span>
					);
				})}
			</section>
		</div>
	);
}
