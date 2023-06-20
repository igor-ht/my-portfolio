import './style.scss';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';

export default function Main() {
	return (
		<main id="main">
			<Home />
			<AboutMe />
			<Projects />
			<ContactMe />
		</main>
	);
}
