import './style.scss';
import Image from 'next/image';
import { roboto_mono } from '@/libs/fonts';

export default function Home() {
	return (
		<div id="home">
			<div className="intro">
				<div className="intro-avatar" />
				<div className={`intro-text ${roboto_mono.className}`}>
					<p id="phrase1">Hi there!</p>
					<p id="phrase2">My name is Igor Hamburger.</p>
					<p id="phrase3">And I am a Junior Full Stack Web Developer.</p>
				</div>
			</div>
		</div>
	);
}
