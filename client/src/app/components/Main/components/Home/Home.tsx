import './Home.scss';
import Image from 'next/image';

export default function Home() {
	return (
		<div id="home">
			<div className="intro">
				<section className="greet">
					<span>
						<p>Nice to meet you,</p>
						<h1>
							I&apos;m Igor <i title="yep, that's my last name 🍔">Hamburger</i>,
						</h1>
					</span>
					<Image
						src={'/avatar.svg'}
						height={200}
						width={150}
						alt="avatar"
						priority
						quality={1}
					/>
				</section>
				<section className="greet">
					<p>
						A <mark>Software Engineer</mark> with a passion for <mark>Web Development</mark>.
					</p>
				</section>
			</div>
		</div>
	);
}
