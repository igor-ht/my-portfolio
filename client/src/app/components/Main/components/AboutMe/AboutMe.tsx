import './AboutMe.scss';
import Image from 'next/image';
import { Skills } from '@prisma/client';

export default function AboutMe({ skills }: { skills: Skills[] }) {
	return (
		<div id="about-me">
			<h1 className="title">About Me:</h1>
			<div className="resume">
				<p>
					I am a very motivated Junior SW Developer with nearly a year of hands-on experience as a Full-Stack Developer focused on Web
					Development.
					<br />
					My skills and tech set vary and include Python, JavaScript, TypeScript, Node.js, HTML, CSS/SCSS, React.js, Next.js, Express.js,
					PostgreSQL, MongoDB, Prisma ORM, Jest, Cypress, and many more.
					<br />
					<br />
					I love creating applications from end to end. Designing and developing them is extremely exciting, and coding is definitely the
					best part for me.
					<br />
					My previous experience includes creating everything from simple SPAs to robust and scalable E2E projects, with my main focus on
					delivering high-quality results prioritizing clean code, and adhering to industry and community best practices.
					{/* I&apos;m a very motivated Software Engineer with nearly a year of hands-on experience in Full-Stack Development. My skill set
					includes Python, Node.js, JavaScript, TypeScript, HTML5, CSS/SCSS, React.js, Next.js, Postgres, MongoDB, Prisma, Jest, Cypress,
					and more.
					<br />
					<br />I create from simple SPA to robust and scalable E2E Applications. Prioritizing responsible design, secure authentication,
					and adhering to industry best practices, with the best focus on delivering high-quality results. */}
				</p>
			</div>
			<div className="skills">
				<section className="icons">
					{skills?.map((skill, i) => {
						return (
							<span key={i}>
								<Image
									src={skill.src}
									alt={skill.alt}
									title={skill.title}
									height="40"
									width="40"
									priority
									quality={1}
								/>
								<p>{skill.name}</p>
							</span>
						);
					})}
				</section>
			</div>
		</div>
	);
}
