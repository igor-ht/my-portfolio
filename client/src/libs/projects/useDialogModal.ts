import { useRef, useState } from 'react';

export default function useDialogModal() {
	const [showDialog, setShowDialog] = useState(false);
	const dialogRef = useRef<HTMLDialogElement | null>(null);

	const setModalClosed = () => {
		if (!showDialog) return;

		dialogRef.current!.style.animation = 'ExitScreen 0.5s linear reverse';
		setTimeout(() => setShowDialog(false), 450);

		const videoPlayer = dialogRef.current?.querySelector('video');
		videoPlayer?.pause();

		const htmlDocument = document?.firstElementChild as HTMLElement;
		htmlDocument.style.overflowY = 'auto';
		const navbar = document?.getElementById('navbar') as HTMLElement;
		navbar.style.transform = 'translateY(0)';
	};

	const setModalOpened = () => {
		if (showDialog) return;

		const projectsSection = document.getElementById('projects') as HTMLDivElement;
		const offset = projectsSection.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({
			top: offset,
			behavior: 'smooth',
		});

		setShowDialog(true);
		dialogRef.current!.style.animation = 'FillScreen 0.5s linear';
		const htmlDocument = document?.firstElementChild as HTMLElement;
		htmlDocument.style.overflowY = 'hidden';
		const navbar = document?.getElementById('navbar') as HTMLElement;
		navbar.style.transform = 'translateY(-25svh)';
	};

	return { showDialog, dialogRef, setModalClosed, setModalOpened };
}
