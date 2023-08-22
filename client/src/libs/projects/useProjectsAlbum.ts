import { useState, useRef, useLayoutEffect } from 'react';

export default function useProjectsAlbum() {
	const [showDialog, setShowDialog] = useState(false);
	const currentProjectRef = useRef<HTMLDivElement | null>(null);

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

	const handleChangeProject = (direction: 'left' | 'right') => {
		if (!currentProjectRef || !currentProjectRef.current) currentProjectRef.current = document.querySelector('.project') as HTMLDivElement;

		let nextProject;
		if (direction === 'right') {
			nextProject = currentProjectRef.current?.nextElementSibling as HTMLDivElement;
			if (!nextProject) nextProject = currentProjectRef.current.parentElement?.firstElementChild as HTMLDivElement;
		} else {
			nextProject = currentProjectRef.current?.previousElementSibling as HTMLDivElement;
			if (!nextProject) nextProject = currentProjectRef.current.parentElement?.lastElementChild as HTMLDivElement;
		}

		nextProject.style.animation = 'FadeIn 0.6s linear';
		currentProjectRef.current.style.display = 'none';
		nextProject.style.display = 'flex';
		currentProjectRef.current = nextProject;
	};

	return { showDialog, setShowDialog, currentProjectRef, handleChangeProject };
}
