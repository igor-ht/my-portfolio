import Project, { ProjectPropsType } from './Project';

const projectText = `WordleWorld is an end-to-end interactive word-guessing game.

The front end leverages the power of Next.js, a server-side rendering framework, to provide optimal performance and seamless gameplay experiences with server-side rendering and static website generation.

At the backend development, I utilized Node.js and Express.js to create a scalable and robust API infrastructure. This combination ensures smooth and secure communication between the client and server, facilitating real-time data exchanges and enhancing the overall gameplay experience.

The integration of Prisma, a modern database toolkit, along with PostgreSQL, enables efficient data interactions, ensuring the integrity and security of player information.

Authentication is a crucial aspect of WordleWorld, and I implemented a robust authentication system using next-auth and JWT. These technologies ensure secure user account management, allowing players to register, log in, and maintain their profiles.`;

export const WordleWorldProps: ProjectPropsType = {
	name: 'WordleWorld',
	ref: null,
	cardUrl: '/projects/wordleworld-card.png',
	cardText: 'WordleWorld is an interactive word-guessing game built as an end-to-end project with Next.js and Node.js. ',
	videoUrl: '/projects/wordleworld-video.mp4',
	picUrl: '/projects/wordleworld-pic.png',
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
	text: projectText,
	linksUrl: { live: 'https://wordle-world.vercel.app/', repo: 'https://github.com/igor-ht/Wordle-World' },
};

export default function WordleWorld({ props }: { props: ProjectPropsType }) {
	return <Project props={props} />;
}
