'use client';

import './style.scss';
import Image from 'next/image';
import { poiret_one } from '@/libs/fonts';
import useScrollInteraction from '@/libs/hooks/useScrollInteraction';

export default function Header() {
	const [scrollDirection] = useScrollInteraction();

	return (
		<header
			id="navbar"
			style={{ top: scrollDirection === 'down' ? '-25dvh' : '0' }}>
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
					<a href="#home">
						<p>Home</p>
					</a>
					<a href="#about-me">
						<p>About Me</p>
					</a>
					<a href="#projects">
						<p>Projects</p>
					</a>
					<a href="#contact-me">
						<p>Contact Me</p>
					</a>
				</div>
			</nav>
			<div className="line bottom-line" />
		</header>
	);
}
