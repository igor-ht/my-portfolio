import './style.scss';
import Home from './components/Home/Home';

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
