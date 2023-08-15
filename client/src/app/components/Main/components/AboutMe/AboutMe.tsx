import './AboutMe.scss';
import Image from 'next/image';
import { Skills } from '@prisma/client';

export default function AboutMe({ skills }: { skills: Skills[] }) {
	return (
		<div id="about-me">
			<h1 className="title">About Me:</h1>
			<div className="resume">
				<p>
					I am a very motivated <em>Junior Software Developer</em> with nearly a year of hands-on experience as a Full-Stack Developer
					focused on Web Development.
					<br />
					My skills and tech set vary and include{' '}
					<strong>
						Python, JavaScript, TypeScript, Node.js, HTML, CSS/SCSS, React.js, Next.js, Express.js, PostgreSQL, MongoDB, Prisma, Jest,
						Cypress,{' '}
					</strong>
					and many more.
					<br />
					<br />
					I love creating applications from end to end. Designing and developing them is extremely exciting, and coding is definitely the
					best part for me.
					<br />
					My previous experience includes creating everything from simple <abbr title="Single Page Application">SPAs</abbr> to robust and
					scalable <abbr title="end to end">E2E</abbr> projects, with my main focus on delivering high-quality results prioritizing{' '}
					<em>clean code</em>, and adhering to <em>industry and community best practices</em>.
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
