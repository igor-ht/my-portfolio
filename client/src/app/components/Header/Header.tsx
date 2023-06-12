'use client';

import './style.scss';
import Image from 'next/image';
import { useEffect } from 'react';
import { indie_flower } from '@/libs/fonts';
import useScrollDirection from '@/libs/hooks/useScrollDirection';

export default function Header() {
	const [scrollDirection] = useScrollDirection();

	useEffect(() => {
		const navbar = document?.getElementById('navbar');
		if (navbar && scrollDirection) {
			scrollDirection === 'up' ? (navbar.style.top = '0') : (navbar.style.top = '-22dvh');
		}
	}, [scrollDirection]);

	return (
		<header id="navbar">
			<div className="line top-line" />
			<nav>
				<div className="logo">
					<Image
						src={'/logo.svg'}
						alt="logo"
						width={120}
						height={120}
					/>
				</div>
				<div className={`links ${indie_flower.className}`}>
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
