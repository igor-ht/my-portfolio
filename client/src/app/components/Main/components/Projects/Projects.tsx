import './style.scss';
import { poiret_one } from '@/libs/fonts';
import ProjectsAlbum from './components/ProjectsAlbum';
import { Projects as Project } from '@prisma/client';

export default function Projects({ projects }: { projects: Project[] }) {
	return (
		<div id="projects">
			<h1 className={`${poiret_one.className} title`}>Projects</h1>
			<ProjectsAlbum projects={projects} />
		</div>
	);
}
