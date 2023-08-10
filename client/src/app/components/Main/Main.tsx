import './Main.scss';
import Home from './components/Home/Home';
import AboutMe from './components/AboutMe/AboutMe';
import Projects from './components/Projects/Projects';
import ContactMe from './components/ContactMe/ContactMe';
import { Projects as Project, Skills } from '@prisma/client';

export default function Main({ data }: { data: { skills: Skills[]; projects: Project[] } }) {
	return (
		<main id="main">
			<Home />
			<AboutMe skills={data.skills} />
			<Projects projects={data.projects} />
			<ContactMe />
		</main>
	);
}
