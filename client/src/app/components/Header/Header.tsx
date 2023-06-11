import './style.scss';
import Image from 'next/image';
import { indie_flower } from '@/libs/fonts';

export default function Header() {
	return (
		<header>
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
