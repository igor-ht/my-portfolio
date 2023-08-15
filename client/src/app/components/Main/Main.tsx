import './Main.scss';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import { use } from 'react';
import getData from '@/libs/getData';

export default function Main() {
	const data = use(getData());
	
	return (
		<main id="main">
			<Home />
			<AboutMe skills={data.skills} />
			<Projects projects={data.projects} />
			<ContactMe />
		</main>
	);
}
