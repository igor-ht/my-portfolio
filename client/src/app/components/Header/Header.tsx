'use client';

import './style.scss';
import Image from 'next/image';
import { poiret_one } from '@/libs/fonts';
import { useEffect } from 'react';
import useScrollInteraction from '@/libs/hooks/useScrollInteraction';

export default function Header() {
	const [scrollDirection, setScrollDirection] = useScrollInteraction();

	useEffect(() => {
		const navbar = document.getElementById('navbar');
		const navbarHeight = navbar?.offsetHeight;
		if (navbar && navbarHeight) document.documentElement.style.setProperty('--scroll-padding', navbarHeight + 'px');
	}, []);

	return (
		<header
			id="navbar"
			style={{ top: scrollDirection && scrollDirection === 'up' ? '0' : '-25dvh' }}>
			<div className="line top-line" />
			<nav>
				<div className="logo">
					<Image
						src={'/logo.svg'}
						alt="logo"
						width={120}
						height={120}
						priority
					/>
				</div>
				<div className={`links ${poiret_one.className}`}>
					<a href={'#home'}>
						<p>Home</p>
					</a>
					<a href={'#about-me'}>
						<p>About Me</p>
					</a>
					<a href={'#projects'}>
						<p>Projects</p>
					</a>
					<a href={'#contact-me'}>
						<p>Contact Me</p>
					</a>
				</div>
			</nav>
			<div className="line bottom-line" />
		</header>
	);
}
