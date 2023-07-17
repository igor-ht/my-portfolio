import './style.scss';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import prisma from '@/libs/prisma';
import { use } from 'react';
import { Skills, Projects as Project } from '@prisma/client';

const getData = async () => {
	await prisma.$connect();
	const skills = await prisma.skills.findMany({
		orderBy: {
			id: 'asc',
		},
	});
	const projects = await prisma.projects.findMany({
		orderBy: {
			id: 'asc',
		},
	});
	await prisma.$disconnect();
	return { skills, projects } as { skills: Skills[]; projects: Project[] };
};

export default function Main() {
	const { skills, projects } = use(getData());
	return (
		<main id="main">
			<Home />
			<AboutMe skills={skills} />
			<Projects projects={projects} />
			<ContactMe />
		</main>
	);
}
