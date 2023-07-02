'use client';

import { poiret_one } from '@/libs/fonts';
import { useRef } from 'react';
import WordleWorld, { WordleWorldProps } from '../Project/MyProjects/WordleWorld';
import Orquia, { OrquiaProps } from '../Project/MyProjects/Orquia';
import Portfolio, { PortfolioProps } from '../Project/MyProjects/Portfolio';

export default function ProjectsAlbum() {
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
				className="album-button"
				type="button"
				onClick={() => handleChangeProject('left')}>
				<p className={poiret_one.className}>&lt;</p>
			</button>

			<span>
				<WordleWorld props={{ ...WordleWorldProps, ref: currentProjectRef }} />
				<Orquia props={{ ...OrquiaProps }} />
				<Portfolio props={{ ...PortfolioProps }} />
			</span>

			<button
				className="album-button"
				type="button"
				onClick={() => handleChangeProject('right')}>
				<p className={poiret_one.className}>&gt;</p>
			</button>
		</div>
	);
}