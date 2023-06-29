import Project, { ProjectPropsType } from './Project';

const projectText = `Designed as a frontend-only project, Orquia demonstrates the power of modern web technologies in creating visually appealing and user-friendly experiences.
Utilizing TypeScript, React.js, SCSS, Bootstrap, and React-Bootstrap, I developed Orquia to showcase the brand's exceptional range of products on the web. These tools provided a solid foundation for efficient and rapid development, allowing for a seamless presentation of Orquia's offerings.

SCSS and Bootstrap played a pivotal role in shaping the website's aesthetics and responsiveness. By utilizing the flexibility and customization options offered by SCSS and Bootstrap together, I crafted visually appealing stylesheets that captured the essence of Orquia's brand identity. The integration of Bootstrap and React-Bootstrap facilitated the development of a responsive layout, ensuring that the website seamlessly adapts to different screen sizes and devices.`;

export const OrquiaProps: ProjectPropsType = {
	name: 'Orquia',
	ref: null,
	cardUrl: '/projects/orquia-card.png',
	cardText: 'Orquia is a portfolio website built with React.js showcasing a cosmetic brand from Brazil. ',
	videoUrl: '/projects/orquia-video.mp4',
	picUrl: '/projects/orquia-pic.png',
	techTags: ['vite', 'typescript', 'react.js', 'scss', 'bootstrap', 'react-bootstrap', 'formspree'],
	text: projectText,
	linksUrl: { live: 'https://orquia.netlify.app/', repo: 'https://github.com/igor-ht/orquia' },
};

export default function Orquia({ props }: { props: ProjectPropsType }) {
	return <Project props={props} />;
}
