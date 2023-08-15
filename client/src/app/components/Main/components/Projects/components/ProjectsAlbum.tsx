'use client';

import { useRef } from 'react';
import { Projects } from '@prisma/client';
import Project from '../Project/Project';

export default function ProjectsAlbum({ projects }: { projects: Projects[] }) {
	const currentProjectRef = useRef<HTMLDivElement | null>(null);
	const handleChangeProject = (direction: 'left' | 'right') => {
		if (!currentProjectRef || !currentProjectRef.current) {
			currentProjectRef.current = document.querySelector('.project') as HTMLDivElement;
		}
		let nextProject;
		if (direction === 'right') {
			nextProject = currentProjectRef.current?.nextElementSibling as HTMLDivElement;
			if (!nextProject) {
				nextProject = currentProjectRef.current.parentElement?.firstElementChild as HTMLDivElement;
			}
		} else {
			nextProject = currentProjectRef.current?.previousElementSibling as HTMLDivElement;
			if (!nextProject) {
				nextProject = currentProjectRef.current.parentElement?.lastElementChild as HTMLDivElement;
			}
		}
		nextProject.style.animation = 'FadeIn 0.7s linear';
		nextProject.style.display = 'flex';
		currentProjectRef.current.style.display = 'none';
		currentProjectRef.current = nextProject;
	};
	return (
		<div className="projects-album">
			<button
				className="album-button left"
				type="button"
				onClick={() => handleChangeProject('left')}>
				&lt;
			</button>
			<span>
				{projects.map((project, i) => {
					return (
						<Project
							key={i}
							props={{
								name: project.name,
								ref: i === 0 ? currentProjectRef : null,
								cardUrl: project.cardUrl,
								cardText: project.cardText,
								videoUrl: project.videoUrl,
								picUrl: project.picUrl,
								techTags: project.techTags,
								text: project.text,
								linksUrl: {
									live: project.liveUrl,
									repo: project.repoUrl,
								},
							}}
						/>
					);
				})}
			</span>
			<button
				className="album-button right"
				onClick={() => handleChangeProject('right')}>
				&gt;
			</button>
		</div>
	);
}
