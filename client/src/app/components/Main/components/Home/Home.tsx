import './style.scss';
import Image from 'next/image';
import { roboto_mono } from '@/libs/fonts';

export default function Home() {
	return (
		<div id="home">
			<div className="intro">
				<div className="intro-avatar" />
				<div className={`intro-text ${roboto_mono.className}`}>
					<span>
						<p>Hi there!</p>
					</span>
					<span>
						<p>
							My name is <mark>Igor Hamburger</mark>.
						</p>
					</span>
					<span>
						<p>
							And I am a <mark>Junior Full Stack Web Developer</mark>.
						</p>
					</span>
				</div>
			</div>
		</div>
	);
}
