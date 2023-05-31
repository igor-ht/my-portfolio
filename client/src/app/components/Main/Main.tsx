import './style.scss';
import Image from 'next/image';

export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<div id="home">
				<div className="intro-banner">
					<Image
						src={'/logo_animated.gif'}
						alt="logo"
						width={320}
						height={320}
						unoptimized={true}
					/>
				</div>
			</div>
			{children}
		</main>
	);
}
