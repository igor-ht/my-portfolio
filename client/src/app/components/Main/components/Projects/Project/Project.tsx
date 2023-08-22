'use client';

import './Project.scss';
import { Dispatch, MutableRefObject, SetStateAction } from 'react';
import VideoPlayer from './components/VideoPlayer';
import TechTag from './components/TechTag';
import Description from './components/Description';
import Links from './components/Links';
import Image from 'next/image';
import useDialogModal from '@/libs/projects/useDialogModal';

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
	const { showDialog, setShowDialog } = { ...props };
	const { dialogRef, setModalClosed, setModalOpened } = useDialogModal(showDialog, setShowDialog);

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
					priority
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
							priority
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
