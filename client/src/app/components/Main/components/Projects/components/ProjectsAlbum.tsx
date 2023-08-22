'use client';

import { Projects } from '@prisma/client';
import Project from '../Project/Project';
import useProjectsAlbum from '@/libs/projects/useProjectsAlbum';

export default function ProjectsAlbum({ projects }: { projects: Projects[] }) {
	const { showDialog, setShowDialog, currentProjectRef, handleChangeProject } = useProjectsAlbum();

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
						<Project
							key={i}
							props={{
								showDialog: showDialog,
								setShowDialog: setShowDialog,
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
