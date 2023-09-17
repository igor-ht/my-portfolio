'use client';

import './ProjectCard.scss';
import { MutableRefObject, useState } from 'react';
import Image from 'next/image';
import useDialogModal from '@/libs/projects/useDialogModal';
import ProjectModal from './components/ProjectModal/ProjectModal';

export type ApiProjectPropsType = {
	name: string;
	cardUrl: string;
	cardText: string;
	videoUrl: string;
	picUrl: string;
	techTags: string[];
	text: string;
	linksUrl: { live: string; repo: string };
};

type ProjectCardPropsType = ApiProjectPropsType & {
	ref?: MutableRefObject<HTMLDivElement | null> | null;
};

export default function ProjectCard({ props }: { props: ProjectCardPropsType }) {
	const [showDialog, setShowDialog] = useState(false);
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
			<ProjectModal
				dialogRef={dialogRef}
				showDialog={showDialog}
				setModalClosed={setModalClosed}
				props={props}
			/>
		</div>
	);
}
