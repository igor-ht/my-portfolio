import './style.scss';
import Image from 'next/image';
import { montserrat, poiret_one } from '@/libs/fonts';

export default function AboutMe() {
	return (
		<div id="about-me">
			<h1 className={`title ${poiret_one.className}`}>About Me:</h1>
			<div className="resume">
				<p className={`${montserrat.className}`}>
					I&apos;m a versatile Junior Developer with nearly a year of hands-on experience in Web Development. My skill set includes Python,
					Node.js, JavaScript, TypeScript, HTML, CSS/SCSS, React.js, Next.js, Postgres, Jest, Cypress, and more.
					<br />
					<br />
					I create robust and scalable E2E applications while prioritizing secure authentication, responsible design, and adhering to
					industry best practices.
					<br />
					<br />
					With a main focus on delivering high-quality results, I am actively seeking new opportunities and inquiries. Let&apos;s
					collaborate and build something amazing together!
				</p>
			</div>
			<div className="skills">
				<section className={`${montserrat.className} icons`}>
					<span>
						<Image
							src="/techs/python.svg"
							alt="Python Programming Language"
							height="48"
							width="48"
							title="Python"
						/>
						<p>Python</p>
					</span>
					<span>
						<Image
							src="/techs/html.svg"
							alt="HTML"
							height="48"
							width="48"
							title="HTML"
						/>
						<p>HTML</p>
					</span>
					<span>
						<Image
							src="/techs/css.svg"
							alt="CSS"
							height="48"
							width="48"
							title="CSS"
						/>
						<p>CSS</p>
					</span>
					<span>
						<Image
							src="/techs/scss.svg"
							alt="SCSS"
							height="48"
							width="48"
							title="SCSS"
						/>
						<p>SCSS</p>
					</span>
					<span>
						<Image
							src="/techs/javascript.svg"
							alt="JavaScript Programming Language"
							height="48"
							width="48"
							title="JavaScript"
						/>
						<p>JavaScript</p>
					</span>
					<span>
						<Image
							src="/techs/typescript.svg"
							alt="TypeScript"
							height="48"
							width="48"
							title="TypeScript"
						/>
						<p>TypeScript</p>
					</span>
					<span>
						<Image
							src="/techs/nodejs.svg"
							alt="Node.js"
							height="48"
							width="48"
							title="Node.js"
						/>
						<p>Node.js</p>
					</span>
					<span>
						<Image
							src="/techs/express-js.svg"
							alt="Express.js"
							height="48"
							width="48"
							title="Express.js"
						/>
						<p>Express.js</p>
					</span>
					<span>
						<Image
							src="/techs/react-js.svg"
							alt="React.js"
							height="48"
							width="48"
							title="React.js"
						/>
						<p>React.js</p>
					</span>
					<span>
						<Image
							src="/techs/next-js.svg"
							alt="Next.js"
							height="48"
							width="48"
							title="Next.js"
						/>
						<p>Next.js</p>
					</span>
					<span>
						<Image
							src="/techs/postgresql.svg"
							alt="PostgreSQL"
							height="48"
							width="48"
							title="PostgreSQL"
						/>
						<p>PostgreSQL</p>
					</span>
					<span>
						<Image
							src="/techs/mongodb.svg"
							alt="MongoDB"
							height="48"
							width="48"
							title="MongoDB"
						/>
						<p>MongoDB</p>
					</span>
					<span>
						<Image
							src="/techs/prisma.svg"
							alt="Prisma ORM"
							height="48"
							width="48"
							title="Prisma ORM"
						/>
						<p>Prisma</p>
					</span>
					<span>
						<Image
							src="/techs/jwt.svg"
							alt="JSON Web Token"
							height="48"
							width="48"
							title="JSON Web Token"
						/>
						<p>JWT</p>
					</span>
					<span>
						<Image
							src="/techs/git.svg"
							alt="Git"
							height="48"
							width="48"
							title="Git"
						/>
						<p>Git</p>
					</span>
					<span>
						<Image
							src="/techs/github.svg"
							alt="GitHub"
							height="48"
							width="48"
							title="GitHub"
						/>
						<p>GitHub</p>
					</span>
					<span>
						<Image
							src="/techs/bootstrap.svg"
							alt="Bootstrap"
							height="48"
							width="48"
							title="Bootstrap"
						/>
						<p>Bootstrap</p>
					</span>
				</section>
			</div>
		</div>
	);
}
