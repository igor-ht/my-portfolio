'use client';

import './ProjectCard.scss';
import { MutableRefObject, lazy } from 'react';
import useDialogModal from '@/libs/projects/useDialogModal';
import ProjectIntro from './components/ProjectIntro/ProjectIntro';

const ProjectModal = lazy(() => import('./components/ProjectModal/ProjectModal'));

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
	const { showDialog, dialogRef, setModalClosed, setModalOpened } = useDialogModal();

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
