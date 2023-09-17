import Image from 'next/image';
import Description from './components/Description';
import Links from './components/Links';
import TechTag from './components/TechTag';
import VideoPlayer from './components/VideoPlayer';
import { MutableRefObject, useLayoutEffect } from 'react';
import { ApiProjectPropsType } from '../../ProjectCard';

type ProjectModalPropsType = {
	dialogRef: MutableRefObject<HTMLDialogElement | null> | null;
	showDialog: boolean;
	setModalClosed: () => void;
	props: ApiProjectPropsType;
};

export default function ProjectModal({ dialogRef, showDialog, setModalClosed, props }: ProjectModalPropsType) {
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

	return (
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
	);
}
