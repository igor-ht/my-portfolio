import './style.scss';
import { poiret_one } from '@/libs/fonts';
import ProjectsAlbum from './components/ProjectsAlbum';

export default function Projects() {
	return (
		<div id="projects">
			<h1 className={`${poiret_one.className} title`}>Projects</h1>
			<ProjectsAlbum />
		</div>
	);
}
