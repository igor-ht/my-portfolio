import Project, { ProjectPropsType } from './Project';

export const OrquiaProps: ProjectPropsType = {
	name: 'Orquia',
	ref: null,
	cardUrl: '/projects/orquia-card.png',
	cardText: 'Orquia is a portfolio website built with React.js showcasing a cosmetic brand from Brazil. ',
	videoUrl: '/projects/orquia-video.mp4',
	picUrl: '/projects/orquia-pic.png',
	techTags: ['vite', 'typescript', 'react.js', 'sass', 'bootstrap', 'react-bootstrap', 'formspree'],
	text: 'Orquia is a stunning portfolio website showcasing a cosmetic brand from Brazil. This severless project utilizes TypeScript, React.js, Sass, Bootstrap and React-Bootstrap to create a visually appealing and user-friendly experience.',
	linksUrl: { live: 'https://orquia.netlify.app/', repo: 'https://github.com/igor-ht/orquia' },
};

export default function Orquia({ props }: { props: ProjectPropsType }) {
	return <Project props={props} />;
}
