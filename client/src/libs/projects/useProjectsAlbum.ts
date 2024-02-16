import { useRef } from 'react';

export default function useProjectsAlbum() {
	const currentProjectRef = useRef<HTMLDivElement | null>(null);

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

		currentProjectRef.current.style.display = 'none';
		nextProject.style.animation = 'FadeIn 0.6s linear';
		nextProject.style.display = 'flex';
		currentProjectRef.current = nextProject;
	};

	return { currentProjectRef, handleChangeProject };
}
