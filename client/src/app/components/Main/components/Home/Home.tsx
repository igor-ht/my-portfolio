import './style.scss';
import Image from 'next/image';
import { roboto_mono } from '@/libs/fonts';

export default function Home() {
	return (
		<div id="home">
			<div className="intro">
				<div className="intro-avatar">
					<Image
						id="pic1"
						src={'/mr.svg'}
						alt="Mr."
						height={450}
						width={450}
						priority
					/>
					<Image
						id="pic2"
						src={'/mr-burger.svg'}
						alt="Mr. Burger"
						height={450}
						width={450}
						priority
					/>
					<Image
						id="pic3"
						src={'/mr-burger-developer.svg'}
						alt="Mr. Burger Developer"
						height={450}
						width={450}
						priority
					/>
				</div>
				<div className={`intro-text ${roboto_mono.className}`}>
					<p id="phrase1">Hi there!</p>
					<p id="phrase2">My name is Igor Hamburger.</p>
					<p id="phrase3">And I am a Junior Full Stack Web Developer.</p>
				</div>
			</div>
		</div>
	);
}
