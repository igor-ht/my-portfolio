import './style.scss';
import { montserrat, poiret_one } from '@/libs/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactMe() {
	return (
		<div id="contact-me">
			<h1 className={`title ${poiret_one.className}`}>Contact Me</h1>
			<div className="resume">
				<p className={montserrat.className}>
					I appreciate any contact or inquiries you may have! Whether you&apos;re interested in connecting, exploring new opportunities, or
					engaging in conversations about full-stack development, I&apos;m thrilled to hear from you.
					<br />
					Don&apos;t hesitate to reach out, as I&apos;m eager to connect and discuss potential collaborations.
				</p>
			</div>
			<div className="links">
				<Link href="mailto: idht07@gmail.com">
					<Image
						src={'/email-icon.svg'}
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
						src={'/linkedin-icon.svg'}
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
			<div className="download-cv">
				<Link
					href={'/documents/igor_hamburger_cv.pdf'}
					download="igor_hamburger_cv.pdf"
					target="_blank"
					rel="noreferrer">
					<Image
						src={'/pdf-icon.svg'}
						height={40}
						width={40}
						alt="pdf icon"
					/>
					<p className={montserrat.className}>DOWNLOAD CV</p>
				</Link>
			</div>
			<div className="footer">
				<Image
					src={'/burger-icon.svg'}
					alt="burger"
					height={35}
					width={35}
				/>
				<p className={montserrat.className}>Ⓒiht 2023</p>
			</div>
		</div>
	);
}
