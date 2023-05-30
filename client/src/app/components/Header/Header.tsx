import './style.scss';
import Link from 'next/link';
import Image from 'next/image';

export default function Header() {
	return (
		<header>
			<div className="line top-line"></div>
			<nav>
				<div className="logo">
					<Image
						src={'/logo.svg'}
						alt="logo"
						width={120}
						height={120}
					/>
				</div>
				<div className="links">
					<Link href={'/'}>
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
			<div className="line bottom-line"></div>
		</header>
	);
}
