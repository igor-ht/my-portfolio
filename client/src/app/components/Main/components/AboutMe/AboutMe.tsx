import './style.scss';
import { montserrat, poiret_one } from '@/libs/fonts';
import Image from 'next/image';

export default function AboutMe() {
	return (
		<div id="about-me">
			<h1 className={`title ${poiret_one.className}`}>About Me:</h1>
			<div className="resume">
				<div>
					<p className={`${montserrat.className}`}>
						A passionate Full-Stack Developer with main focus in Web Development.
						<br />
						<br />
						With almost a year of hands-on experience in creating websites and web applications, my goal is to leverage my skills and
						knowledge to contribute to innovative projects and continuously grow professionally.
					</p>
				</div>
				<Image
					src={'/me.svg'}
					height={300}
					width={300}
					alt="me"
				/>
			</div>
		</div>
	);
}

{
	/* <section className="skills">
					During my journey as a Junior FullStack Web Developer, I have had the opportunity to work on various projects that involved
					implementing responsive designs, optimizing website performance, integrating APIs and more. This experience has equipped me with
					a solid foundation in web development principles and best practices.
					As a lifelong learner, I am committed to staying up-to-date with the latest technologies and industry trends. I aim to continually
					enhance my skills by exploring new frameworks and tools that empower me to create cutting-edge web solutions. My goal is to
					contribute to a collaborative team where I can apply my knowledge and grow professionally.
					<h1>Technologies:</h1>
					<section className="icons">
						<Image
							src="/techs/python.svg"
							alt="Python Programming Language"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/html.svg"
							alt="HTML"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/css.svg"
							alt="CSS"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/scss.svg"
							alt="SCSS"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/nodejs.svg"
							alt="Node.js"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/javascript.svg"
							alt="JavaScript Programming Language"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/typescript.svg"
							alt="TypeScript"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/react-js.svg"
							alt="React.js"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/next-js.svg"
							alt="Next.js"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/express-js.svg"
							alt="Express.js"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/jwt.svg"
							alt="JSON Web Token"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/postgresql.svg"
							alt="PostgreSQL"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/mongodb.svg"
							alt="MongoDB"
							height="48"
							width="48"
						/>
						<Image
							src="/techs/prisma.svg"
							alt="Prisma ORM"
							height="48"
							width="48"
						/>
					</section>
				</section> */
}
