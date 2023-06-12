'use client';

import './style.scss';
import Image from 'next/image';
import { indie_flower } from '@/libs/fonts';
import { useEffect, useState } from 'react';
import debounce from '@/libs/debounce';

export default function Header() {
	// const [prevScrollPos, setPrevScrollPos] = useState(0);
	// const [visible, setVisible] = useState(true);

	// const handleScroll = debounce(() => {
	// 	const currentScrollPos = window.scrollY;

	// 	// set state based on location
	// 	setVisible((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10);

	// 	// set state to new scroll position
	// 	setPrevScrollPos(currentScrollPos);
	// });

	// useEffect(() => {
	// 	window?.addEventListener('scroll', handleScroll);

	// 	return () => window?.removeEventListener('scroll', handleScroll);
	// });
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
