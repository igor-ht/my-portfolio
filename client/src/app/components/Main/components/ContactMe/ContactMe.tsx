import './ContactMe.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function ContactMe() {
	return (
		<div id="contact-me">
			<h1 className="title">Contact Me</h1>
			<div className="content-summary-box">
				<p>
					I appreciate any contact or inquiries you may have! Whether you&apos;re interested in connecting, exploring new opportunities, or
					engaging in conversations about full-stack development, I&apos;m thrilled to hear from you.
					<br />
					Don&apos;t hesitate to reach out, as I&apos;m eager to connect and discuss potential collaborations.
				</p>
			</div>
			<div className="links">
				<Link
					href="mailto: idht07@gmail.com"
					rel="nofollow"
					title="Email me"
					target="_blank">
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
					title="LinkedIn"
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
					title="GitHub"
					target="_blank">
					<Image
						src="https://cjyntkhqgtdnmlhfkwab.supabase.co/storage/v1/object/sign/skills/github.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJza2lsbHMvZ2l0aHViLnN2ZyIsImlhdCI6MTY4OTUwMTA2OSwiZXhwIjoxNzIxMDM3MDY5fQ.a3hgcDcnFKfJLg_1oS2DXZadLZZmBP-lOyI36c4Mpl0&t=2023-07-16T09%3A51%3A09.848Z"
						height={48}
						width={48}
						alt="GitHub"
					/>
				</Link>
				<Link
					href="https://codepen.io/igor-ht/pens/popular"
					title="CodePen"
					target="_blank">
					<Image
						src="/codepen-icon.svg"
						height={48}
						width={48}
						alt="CodePen"
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
					<p>DOWNLOAD CV</p>
				</Link>
			</div>
			<div className="footer">
				<p>Ⓒiht 2023</p>
			</div>
		</div>
	);
}
