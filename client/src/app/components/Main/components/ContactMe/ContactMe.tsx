import { montserrat, poiret_one } from '@/libs/fonts';
import './style.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactMe() {
	return (
		<div id="contact-me">
			<h1 className={`title ${poiret_one.className}`}>Contact Me</h1>
			<div className="resume">
				<p className={montserrat.className}>
					If you'd like to get in touch with me or have any inquiries, feel free to reach out! I'm always excited to connect and discuss new
					opportunities, collaborations, or simply have a chat about anything related to full-stack development.
				</p>
			</div>
			<div className="links">
				<Link href="mailto: idht07@gmail.com">
					<Image
						src={'/email.svg'}
						height={48}
						width={48}
						title="Email Me"
						alt="email"
					/>
				</Link>
				<Link
					href="https://www.linkedin.com/in/igor-hamburger/"
					target="_blank">
					<Image
						src={'/linkedin.svg'}
						height={48}
						width={48}
						alt="LinkedIn"
					/>
				</Link>
				<Link
					href="https://github.com/igor-ht"
					target="_blank">
					<Image
						src={'/techs/github.svg'}
						height={48}
						width={48}
						alt="GitHub"
					/>
				</Link>
			</div>
		</div>
	);
}
