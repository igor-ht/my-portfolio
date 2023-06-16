'use client';

import './style.scss';
import { montserrat, poiret_one } from '@/libs/fonts';
import { useRef } from 'react';
import WordleWorld, { WordleWorldProps } from './Project/WordleWorld';
import Orquia, { OrquiaProps } from './Project/Orquia';

export default function Projects() {
	const currentProjectRef = useRef<HTMLDivElement | null>(null);

	const handleClickLeft = (): void => {
		if (!currentProjectRef.current) {
			currentProjectRef.current = document.querySelector('.project') as HTMLDivElement;
		}
		let nextProject = currentProjectRef.current?.previousElementSibling as HTMLDivElement;
		if (!nextProject) {
			nextProject = currentProjectRef.current.parentElement?.lastElementChild as HTMLDivElement;
		}
		currentProjectRef.current.style.animation = 'SlideLeft 1s linear';
		nextProject.style.zIndex = '1';
		currentProjectRef.current = nextProject;
	};

	const handleClickRight = (): void => {
		if (!currentProjectRef.current) {
			currentProjectRef.current = document.querySelector('.project') as HTMLDivElement;
		}
		let nextProject = currentProjectRef.current?.nextElementSibling as HTMLDivElement;
		if (!nextProject) {
			nextProject = currentProjectRef.current.parentElement?.firstElementChild as HTMLDivElement;
		}
		currentProjectRef.current.style.animation = 'SlideRight 1s linear';
		nextProject.style.zIndex = '1';
		currentProjectRef.current = nextProject;
	};

	return (
		<div id="projects">
			<h1 className={`${poiret_one.className} title`}>Projects</h1>

			<div className="projects-album">
				<button
					type="button"
					onClick={handleClickLeft}>
					<p className={poiret_one.className}>&lt;</p>
				</button>

				<span>
					<WordleWorld props={{ ...WordleWorldProps, ref: currentProjectRef }} />
					<Orquia props={{ ...OrquiaProps }} />
				</span>

				<button
					type="button"
					onClick={handleClickRight}>
					<p className={poiret_one.className}>&gt;</p>
				</button>
			</div>
		</div>
	);
}
