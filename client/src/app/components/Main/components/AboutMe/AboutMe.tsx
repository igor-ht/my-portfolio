import './style.scss';
import Image from 'next/image';
import { montserrat, poiret_one } from '@/libs/fonts';
import { Skills } from '@prisma/client';


export default function AboutMe({ skills }: { skills: Skills[] }) {
	return (
		<div id="about-me">
			<h1 className={`title ${poiret_one.className}`}>About Me:</h1>
			<div className="resume">
				<p className={`${montserrat.className}`}>
					I&apos;m a very motivated Junior Developer with nearly a year of hands-on experience in Full-Stack Development. My skill set
					includes Python, Node.js, JavaScript, TypeScript, HTML5, CSS/SCSS, React.js, Next.js, Postgres, MongoDB, Prisma, Jest, Cypress,
					and more.
					<br />
					<br />I create from simple SPA to robust and scalable E2E Applications. Prioritizing responsible design, secure authentication,
					and adhering to industry best practices, with the best focus on delivering high-quality results.
				</p>
			</div>
			<div className="skills">
				<section className={`${montserrat.className} icons`}>
					{skills?.map((skill, i) => {
						return (
							<span key={i}>
								<Image
									src={skill.src}
									alt={skill.alt}
									title={skill.title}
									height="48"
									width="48"
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
