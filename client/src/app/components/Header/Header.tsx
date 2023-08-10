'use client';

import './Header.scss';
import Image from 'next/image';
import useScrollInteraction from '@/libs/hooks/useScrollInteraction';

export default function Header() {
	const [scrollDirection] = useScrollInteraction();

	return (
		<header
			id="navbar"
			style={{ transform: `translateY(${scrollDirection === 'down' ? '-25dvh' : '0'})` }}>
			<div className="line top-line" />
			<nav>
				<div className="logo">
					<Image
						src={'/logo.svg'}
						alt="logo"
						width={120}
						height={120}
						priority
						quality={1}
					/>
				</div>
				<div className="links">
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
