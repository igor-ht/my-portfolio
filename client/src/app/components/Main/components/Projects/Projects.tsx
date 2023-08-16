import './Projects.scss';
import { use } from 'react';
import ProjectsAlbum from './components/ProjectsAlbum';
import { getProjects } from '@/libs/getData';

export default function Projects() {
	const { projects } = use(getProjects());

	return (
		<div id="projects">
			<h1 className="title">Projects</h1>
			<ProjectsAlbum projects={projects} />
		</div>
	);
}
