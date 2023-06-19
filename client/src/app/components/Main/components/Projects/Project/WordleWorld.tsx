import Project, { ProjectPropsType } from './Project';

export const WordleWorldProps: ProjectPropsType = {
	name: 'WordleWorld',
	ref: null,
	videoUrl: '/wordleworld-video.mp4',
	picUrl: '/wordleworld-pic.png',
	techTags: [
		'typescript',
		'react.js',
		'next.js',
		'sass',
		'node.js',
		'express.js',
		'prisma',
		'postgresql',
		'jwt',
		'next-auth',
		'axios',
		'bcrypt',
		'formik',
		'yup',
	],
	text: `WordleWorld is an interactive word-guessing game built as an end-to-end project. Developed using TypeScript, React.js, Next.js, and Sass, the game provides an amazing user experience with its server-side rendering capabilities and efficient routing. The project leverages Node.js and Express.js for API development, along with Prisma and PostgreSQL for database interaction.`,
	linksUrl: { live: 'https://wordle-world.vercel.app/', repo: 'https://github.com/igor-ht/Wordle-World' },
};

export default function WordleWorld({ props }: { props: ProjectPropsType }) {
	return <Project props={props} />;
}
