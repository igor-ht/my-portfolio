import Home from '@/app/page';
import './style.scss';

export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<Home />
			<div id="about-me"></div>
			<div id="projects"></div>
			<div id="contact-me"></div>
		</main>
	);
}
