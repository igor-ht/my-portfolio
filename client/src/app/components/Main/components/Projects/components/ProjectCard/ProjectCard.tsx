'use client';

import './ProjectCard.scss';
import { MutableRefObject, useState } from 'react';
import useDialogModal from '@/libs/projects/useDialogModal';
import ProjectModal from './components/ProjectModal/ProjectModal';
import ProjectIntro from './components/ProjectIntro/ProjectIntro';

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
			<ProjectIntro
				props={props}
				setModalOpened={setModalOpened}
			/>
			<ProjectModal
				dialogRef={dialogRef}
				showDialog={showDialog}
				setModalClosed={setModalClosed}
				props={props}
			/>
		</div>
	);
}
