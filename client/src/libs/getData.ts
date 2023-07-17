import { Skills, Projects as Project } from '@prisma/client';
import { cache } from 'react';
import prisma from './prisma';

const getData = cache(async () => {
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
});

export default getData;
