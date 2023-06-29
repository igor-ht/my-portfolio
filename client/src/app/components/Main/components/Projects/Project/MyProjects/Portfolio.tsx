import Project, { ProjectPropsType } from '../Project';

const projectText = `Introducing My Portfolio, a captivating personal portfolio project that highlights the power of modern web technologies in creating visually appealing and user-friendly experiences. Designed as a frontend-only endeavor, My Portfolio utilizes TypeScript, React.js, Next.js, and SCSS to showcase my skills and projects on the web.

By employing TypeScript, this project benefits from static typing and enhanced code quality, resulting in a robust and maintainable codebase. The React.js library forms the foundation of the project, offering a component-based architecture that enables reusable and modular code, boosting development efficiency.

Next.js, a feature-rich framework built on top of React.js, brings server-side rendering and optimized performance to it. This ensures swift page loading times and superior search engine optimization (SEO) capabilities.`;

export const PortfolioProps: ProjectPropsType = {
	name: 'Portfolio',
	ref: null,
	cardUrl: '/projects/portfolio-card.png',
	cardText: 'This project is a personal portfolio website built with Next.js. ',
	videoUrl: '/projects/portfolio-video.mp4',
	picUrl: '/projects/portfolio-pic.png',
	techTags: ['typescript', 'react.js', 'next.js', 'scss'],
	text: projectText,
	linksUrl: { live: 'https://iht-me.vercel.app/', repo: 'https://github.com/igor-ht/my-portfolio' },
};

export default function Portfolio({ props }: { props: ProjectPropsType }) {
	return <Project props={props} />;
}
