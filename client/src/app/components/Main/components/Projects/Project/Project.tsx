'use client';

import './Project.scss';
import { MutableRefObject, useEffect, useLayoutEffect, useRef, useState } from 'react';
import VideoPlayer from './components/VideoPlayer';
import TechTag from './components/TechTag';
import Description from './components/Description';
import Links from './components/Links';
import Image from 'next/image';

export type ProjectPropsType = {
	name: string;
	ref?: MutableRefObject<HTMLDivElement | null> | null;
	cardUrl: string;
	cardText: string;
	videoUrl: string;
	picUrl: string;
	techTags: string[];
	text: string;
	linksUrl: { live: string; repo: string };
};

export default function Project({ props }: { props: ProjectPropsType }) {
	const [showDialog, setShowDialog] = useState(false);
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const setModalClosed = () => {
		dialogRef.current!.style.animation = 'ExitScreen 0.7s linear';
		setTimeout(() => setShowDialog(false), 700);
		const htmlDocument = document.firstElementChild as HTMLElement;
		const navbar = document.getElementById('navbar') as HTMLElement;
		htmlDocument.style.overflowY = 'auto';
		navbar.style.top = '0';
		const projectsSection = document.getElementById('projects') as HTMLDivElement;
		const offset = projectsSection.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: offset - navbar.offsetHeight,
			behavior: 'smooth',
		});
	};

	const handleReadMore = () => {
		if (showDialog) return;

		const projectsSection = document.getElementById('projects') as HTMLDivElement;
		const offset = projectsSection.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: offset,
			behavior: 'smooth',
		});

		setShowDialog(true);
		dialogRef.current!.style.animation = 'FillScreen 0.7s linear';
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

	useEffect(() => {
		const htmlDocument = document.firstElementChild as HTMLElement;
		const navbar = document.getElementById('navbar') as HTMLElement;

		const setModalOpened = () => {
			htmlDocument.style.overflowY = 'hidden';
			navbar.style.top = '-25dvh';
		};

		if (showDialog) return setModalOpened();
	}, [showDialog]);

	return (
		<div
			className="project"
			ref={props.ref}
			onAnimationEnd={(event) => (event.currentTarget.style.animation = '')}>
			<div className="project-card">
				<Image
					src={props.cardUrl}
					alt="project"
					height={400}
					width={400}
				/>
				<div className="card-intro">
					<h1>{props.name}</h1>
					<p>
						{props.cardText}
						<a
							className="read-more"
							onClick={handleReadMore}>
							Read More...
						</a>
					</p>
				</div>
			</div>
			<dialog
				ref={dialogRef}
				open={showDialog}>
				<div className="dialog-header">
					<button
						type="button"
						className="close-modal"
						onClick={setModalClosed}>
						<Image
							src={'/double-arrow-left.svg'}
							alt="return"
							height={50}
							width={50}
							quality={1}
						/>
					</button>
					<h1 className="project-title">{props.name}</h1>
				</div>
				<div className="project-display">
					<div className="project-wrapper">
						<div className="video-stack">
							<VideoPlayer
								videoUrl={props.videoUrl}
								picUrl={props.picUrl}
							/>
							<TechTag tags={props.techTags} />
						</div>
						<div className="description-links">
							<Description text={props.text} />
							<Links urls={props.linksUrl} />
						</div>
					</div>
				</div>
			</dialog>
		</div>
	);
}
