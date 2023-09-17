'use client';

import { Projects } from '@prisma/client';
import ProjectCard from '../ProjectCard/ProjectCard';
import useProjectsAlbum from '@/libs/projects/useProjectsAlbum';

export default function ProjectsAlbum({ projects }: { projects: Projects[] }) {
	const { currentProjectRef, handleChangeProject } = useProjectsAlbum();

	return (
		<div className="projects-album">
			<button
				className="album-button left"
				type="button"
				onClick={() => handleChangeProject('left')}>
				&lt;
			</button>
			<span>
				{projects.map((project, i) => {
					return (
						<ProjectCard
							key={i}
							props={{
								ref: i === 0 ? currentProjectRef : null,
								linksUrl: {
									live: project.liveUrl,
									repo: project.repoUrl,
								},
								...project,
							}}
						/>
					);
				})}
			</span>
			<button
				className="album-button right"
				type="button"
				onClick={() => handleChangeProject('right')}>
				&gt;
			</button>
		</div>
	);
}
