import './style.scss';
import Image from 'next/image';

export default function Header() {
	return (
		<header>
			<nav>
				<div className="line top-line"></div>
				<div className="logo">
					<Image
						src={'/logo.svg'}
						alt="logo"
						width={140}
						height={120}
					/>
				</div>
				<div className="navbar"></div>
				<div className="line bottom-line"></div>
			</nav>
		</header>
	);
}
