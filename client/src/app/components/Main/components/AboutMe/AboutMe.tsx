import { cormorant_garamond } from '@/libs/fonts';
import './style.scss';

export default function AboutMe() {
	return (
		<div id="about-me">
			<h1 className="title">About Me:</h1>

			<div className="resume">
				<p className={`${cormorant_garamond.className}`}>
					A passionate Junior FullStack Developer with main focus in <mark> Web Development</mark>.
					<br />
					With a year of hands-on experience in creating websites and web applications, my goal is to leverage my skills and knowledge to
					contribute to innovative projects and continuously grow as a developer.
					<br />
					<br />
					During my journey as a Junior FullStack Web Developer, I have had the opportunity to work on various projects that involved
					implementing responsive designs, optimizing website performance, integrating APIs, authentication and authorization, Database .
					This experience has equipped me with a solid foundation in web development principles and best practices.
					<br />
					As a lifelong learner, I am committed to staying up-to-date with the latest technologies and industry trends. I aim to continually
					enhance my skills by exploring new frameworks and tools that empower me to create cutting-edge web solutions. My goal is to
					contribute to a collaborative team where I can apply my knowledge and grow professionally.
				</p>

				<section className="skills">
					<h1>Technologies:</h1>
				</section>
			</div>
		</div>
	);
}
