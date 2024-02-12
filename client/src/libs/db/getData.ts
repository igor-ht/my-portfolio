import { Skills as Skill, Projects as Project } from '@prisma/client';
import { cache } from 'react';
import prisma from './prisma';

export const getSkills = cache(async () => {
	await prisma.$connect();
	const skills = await prisma.skills.findMany({
		orderBy: {
			id: 'asc',
		},
	});
	await prisma.$disconnect();
	return { skills } as { skills: Skill[] };
});

export const getProjects = cache(async () => {
	await prisma.$connect();
	const projects = await prisma.projects.findMany({
		orderBy: {
			id: 'asc',
		},
	});
	await prisma.$disconnect();
	return { projects } as { projects: Project[] };
});
