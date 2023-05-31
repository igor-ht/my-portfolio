import './style.scss';
import Link from 'next/link';
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
					<Link href={'#home'}>
						<p>Home</p>
					</Link>
					<Link href={'/'}>
						<p>About Me</p>
					</Link>
					<Link href={'/'}>
						<p>Projects</p>
					</Link>
					<Link href={'/'}>
						<p>Contact Me</p>
					</Link>
				</div>
			</nav>
			<div className="line bottom-line" />
		</header>
	);
}
