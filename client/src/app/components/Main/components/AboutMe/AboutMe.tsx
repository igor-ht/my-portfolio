import './style.scss';
import { montserrat, poiret_one } from '@/libs/fonts';

export default function AboutMe() {
	return (
		<div id="about-me">
			<h1 className={`title ${poiret_one.className}`}>About Me:</h1>
			<div className="resume">
				<p className={`${montserrat.className}`}>
					<br />I am a versatile full stack developer with almost a year of hands-on experience on web development. With expertise in
					Python, JavaScript, TypeScript, Node.js, HTML, CSS/SCSS, React.js, Next.js and other technologies, I bring your digital projects
					to life from end to end. I excel in creating robust and scalable applications, implementing secure authentication, responsible
					design and ensuring others best practices.
					<br />
					Let's collaborate and turn your ideas into exceptional web experiences!
				</p>
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
