'use client';

import './Project.scss';
import { Dispatch, MutableRefObject, SetStateAction, useRef } from 'react';
import VideoPlayer from './components/VideoPlayer';
import TechTag from './components/TechTag';
import Description from './components/Description';
import Links from './components/Links';
import Image from 'next/image';

export type ProjectPropsType = {
	showDialog: boolean;
	setShowDialog: Dispatch<SetStateAction<boolean>>;
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
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const setModalClosed = () => {
		if (!props.showDialog) return;

		dialogRef.current!.style.animation = 'ExitScreen 0.5s linear reverse';
		setTimeout(() => props.setShowDialog(false), 450);

		const htmlDocument = document?.firstElementChild as HTMLElement;
		htmlDocument.style.overflowY = 'auto';
		const navbar = document?.getElementById('navbar') as HTMLElement;
		navbar.style.transform = 'translateY(0)';
	};

	const setModalOpened = () => {
		if (props.showDialog) return;

		const projectsSection = document.getElementById('projects') as HTMLDivElement;
		const offset = projectsSection.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: offset,
			behavior: 'smooth',
		});

		props.setShowDialog(true);
		dialogRef.current!.style.animation = 'FillScreen 0.5s linear';
		const htmlDocument = document?.firstElementChild as HTMLElement;
		htmlDocument.style.overflowY = 'hidden';
		const navbar = document?.getElementById('navbar') as HTMLElement;
		navbar.style.transform = 'translateY(-25dvh)';
	};

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
						{props.cardText}{' '}
						<a
							className="read-more"
							onClick={setModalOpened}>
							Read More
						</a>
					</p>
				</div>
			</div>
			<dialog
				ref={dialogRef}
				open={props.showDialog}>
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
