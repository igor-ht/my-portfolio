'use client';

import './style.scss';
import { montserrat, poiret_one } from '@/libs/fonts';
import { useRef } from 'react';
import WordleWorld, { WordleWorldProps } from './Project/WordleWorld';
import Orquia, { OrquiaProps } from './Project/Orquia';
import Link from 'next/link';
import Image from 'next/image';

export default function Projects() {
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
		<div id="projects">
			<h1 className={`${poiret_one.className} title`}>Projects</h1>

			<div className="projects-album">
				<button
					type="button"
					onClick={() => handleChangeProject('left')}>
					<p className={poiret_one.className}>&lt;</p>
				</button>

				<span>
					<WordleWorld props={{ ...WordleWorldProps, ref: currentProjectRef }} />
					<Orquia props={{ ...OrquiaProps }} />
				</span>

				<button
					type="button"
					onClick={() => handleChangeProject('right')}>
					<p className={poiret_one.className}>&gt;</p>
				</button>
			</div>
			<div className="download-cv">
				<Link
					href={'/documents/igor_hamburger_cv.pdf'}
					download="igor_hamburger_cv.pdf"
					target="_blank"
					rel="noreferrer">
					<Image
						src={'/pdf-icon.svg'}
						height={40}
						width={40}
						alt="pdf icon"
					/>
					<p className={montserrat.className}>DOWNLOAD CV </p>
				</Link>
			</div>
		</div>
	);
}
