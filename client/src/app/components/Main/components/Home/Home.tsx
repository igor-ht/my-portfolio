import './style.scss';
import { montserrat, poiret_one } from '@/libs/fonts';
import Image from 'next/image';

export default function Home() {
	return (
		<div id="home">
			<div className="intro">
				<section className="greet">
					<h1 className={`${poiret_one.className}`}>I&apos;m Igor Hamburger Tambellini.</h1>
					<Image
						src={'/me.svg'}
						height={300}
						width={300}
						alt="me"
					/>
				</section>
				<p className={`${montserrat.className}`}>
					A <mark>Full-Stack Developer</mark> based in Israel.
					<br />
					With main focus in <mark>Web Development</mark>, my goal is to leverage my skills and knowledge to contribute to innovative
					projects and continuously grow professionally.
				</p>
			</div>
		</div>
	);
}
