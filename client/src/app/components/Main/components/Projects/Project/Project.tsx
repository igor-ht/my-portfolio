'use client';

import './style.scss';
import { MutableRefObject, useEffect, useRef, useState } from 'react';
import { inconsolata, karla, poiret_one } from '@/libs/fonts';
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

	let dialogTimeoutId: NodeJS.Timeout | null = null;
	const handleReadMore = () => {
		if (dialogTimeoutId !== null) {
			return;
		}
		dialogTimeoutId = setTimeout(() => {
			setShowDialog(true);
			dialogRef.current!.style.animation = 'FillScreen 0.7s linear';
			dialogTimeoutId ? clearTimeout(dialogTimeoutId) : null;
			dialogTimeoutId = null;
		}, 500);
	};

	useEffect(() => {
		const htmlDocument = document.firstElementChild as HTMLElement;
		const navbar = document.getElementById('navbar') as HTMLElement;
		navbar.style.top = '0';

		const setModalOpened = () => {
			htmlDocument.style.overflowY = 'hidden';
			dialogRef.current ? (dialogRef.current.style.top = `-${navbar?.offsetHeight + 1 || 0}px`) : null;
			navbar.style.top = '-25dvh';
		};

		const setModalClosed = () => {
			htmlDocument.style.overflowY = 'auto';
			dialogRef.current ? (dialogRef.current.style.top = '0') : null;
		};

		if (showDialog) setModalOpened();
		else setModalClosed();
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
					<h1 className={karla.className}>{props.name}</h1>
					<p className={inconsolata.className}>
						{props.cardText}
						<a
							href="#projects"
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
				<button
					type="button"
					className="close-modal"
					onClick={() => {
						dialogRef.current!.style.animation = 'ExitScreen 0.7s linear';
						setTimeout(() => setShowDialog(false), 700);
					}}>
					<Image
						src={'/double-arrow-left.svg'}
						alt="return"
						height={50}
						width={50}
					/>
				</button>
				<div className="project-display">
					<h1 className={`${poiret_one.className} project-title`}>{props.name}</h1>
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
