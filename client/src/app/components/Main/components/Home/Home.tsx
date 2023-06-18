import './style.scss';
import { montserrat, poiret_one } from '@/libs/fonts';
import Image from 'next/image';

export default function Home() {
	return (
		<div id="home">
			<div className="intro">
				<section className="greet">
					<span>
						<p className={`${montserrat.className}`}>Nice to meet you,</p>
						<h1 className={`${poiret_one.className}`}>I&apos;m Igor Hamburger,</h1>
					</span>
					<Image
						src={'/avatar.svg'}
						height={300}
						width={300}
						alt="avatar"
					/>
				</section>
				<section className="greet">
					<p className={`${montserrat.className}`}>
						A <mark>Junior Full-Stack Developer</mark> with a passion for <mark>Web Development</mark>.
					</p>
				</section>
			</div>
		</div>
	);
}
