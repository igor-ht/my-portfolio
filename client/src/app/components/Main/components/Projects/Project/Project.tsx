'use client';

import './style.scss';
import { MutableRefObject, useEffect, useState } from 'react';
import { inconsolata, karla } from '@/libs/fonts';
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

	useEffect(() => {
		const root = document.getElementById('root') as HTMLHtmlElement;

		const disableScroll = () => {
			root.style.overflowY = 'hidden';
			const navbar = document.getElementById('navbar') as HTMLElement;
			navbar.style.top = '-25dvh';
			const navbarHeight = navbar?.offsetHeight;
			const dialog = document.getElementById('dialog') as HTMLDialogElement;
			dialog.style.top = `-${navbarHeight}px`;
		};

		const enableScroll = () => {
			root.style.overflowY = 'auto';
		};

		if (showDialog) return disableScroll();

		return enableScroll();
	}, [showDialog]);

	return (
		<div
			className="project"
			ref={props.ref || null}
			onAnimationEnd={(event) => (event.currentTarget.style.animation = '')}>
			<div className="project-card">
				<Image
					src={props.cardUrl}
					alt="project"
					height={400}
					width={400}
				/>
				<div className="card-intro">
					<h1 className={karla.className}>{props.name}</h1>
					<p className={inconsolata.className}>
						{props.cardText}
						<a
							href="#projects"
							className="read-more"
							onClick={() => setShowDialog(true)}>
							{'Read More...'}
						</a>
					</p>
				</div>
			</div>
			<dialog
				id="dialog"
				open={showDialog}>
				<button
					type="button"
					onClick={() => setShowDialog(false)}>
					X
				</button>
				<div className="project-display">
					<h1 className={`${karla.className} project-title`}>{props.name}</h1>
					<div className="content">
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
