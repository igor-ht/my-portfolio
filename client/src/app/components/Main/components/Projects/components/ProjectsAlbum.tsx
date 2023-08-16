'use client';

import { useLayoutEffect, useRef, useState } from 'react';
import { Projects } from '@prisma/client';
import Project from '../Project/Project';

export default function ProjectsAlbum({ projects }: { projects: Projects[] }) {
	const currentProjectRef = useRef<HTMLDivElement | null>(null);
	const [showDialog, setShowDialog] = useState(false);

	const handleChangeProject = (direction: 'left' | 'right') => {
		if (!currentProjectRef || !currentProjectRef.current) currentProjectRef.current = document.querySelector('.project') as HTMLDivElement;

		let nextProject;
		if (direction === 'right') {
			nextProject = currentProjectRef.current?.nextElementSibling as HTMLDivElement;
			if (!nextProject) nextProject = currentProjectRef.current.parentElement?.firstElementChild as HTMLDivElement;
		} else {
			nextProject = currentProjectRef.current?.previousElementSibling as HTMLDivElement;
			if (!nextProject) nextProject = currentProjectRef.current.parentElement?.lastElementChild as HTMLDivElement;
		}

		nextProject.style.animation = 'FadeIn 0.6s linear';
		currentProjectRef.current.style.display = 'none';
		nextProject.style.display = 'flex';
		currentProjectRef.current = nextProject;
	};

	useLayoutEffect(() => {
		const handleWindowResizeToFixDialogDisplay = () => {
			if (!showDialog) return;
			const projectsSection = document.getElementById('projects') as HTMLDivElement;
			const offset = projectsSection.getBoundingClientRect().top + window.scrollY;
			window.scrollTo({
				top: offset,
				behavior: 'smooth',
			});
		};

		window.addEventListener('resize', handleWindowResizeToFixDialogDisplay);
		return () => window.removeEventListener('resize', handleWindowResizeToFixDialogDisplay);
	}, [showDialog]);

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
								showDialog: showDialog,
								setShowDialog: setShowDialog,
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
