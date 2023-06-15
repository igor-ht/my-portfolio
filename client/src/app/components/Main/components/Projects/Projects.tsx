'use client';

import './style.scss';
import { montserrat, poiret_one } from '@/libs/fonts';
import { useRef } from 'react';
import WordleWorld from './Project/WordleWorld';
import Orquia from './Project/Orquia';

type Projects = 'wordle-world' | 'orquia';

export default function Projects() {
	const currentProjectRef = useRef<HTMLDivElement | null>(null);

	const handleClickLeft = (): void => {
		if (!currentProjectRef.current) {
			currentProjectRef.current = document.getElementById('wordle-world') as HTMLDivElement;
		}
		let nextProject = currentProjectRef.current?.previousElementSibling as HTMLDivElement;
		if (!nextProject) {
			nextProject = currentProjectRef.current.parentElement?.lastElementChild as HTMLDivElement;
		}
		currentProjectRef.current.style.zIndex = '-9999';
		currentProjectRef.current = nextProject;
		currentProjectRef.current.style.zIndex = '1';
	};
	const handleClickRight = (): void => {
		if (!currentProjectRef.current) {
			currentProjectRef.current = document.getElementById('wordle-world') as HTMLDivElement;
		}
		let nextProject = currentProjectRef.current?.nextElementSibling as HTMLDivElement;
		if (!nextProject) {
			nextProject = currentProjectRef.current.parentElement?.firstElementChild as HTMLDivElement;
		}
		currentProjectRef.current.style.zIndex = '-9999';
		currentProjectRef.current = nextProject;
		currentProjectRef.current.style.zIndex = '1';
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
					<div
						ref={currentProjectRef}
						id="wordle-world"
						className="project">
						<WordleWorld />
					</div>
					<div
						id="orquia"
						className="project">
						<Orquia />
					</div>
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
