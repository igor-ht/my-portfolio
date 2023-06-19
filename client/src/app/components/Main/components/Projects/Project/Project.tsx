import './style.scss';
import { MutableRefObject } from 'react';
import { karla } from '@/libs/fonts';
import VideoPlayer from './components/VideoPlayer';
import TechTag from './components/TechTag';
import Description from './components/Description';
import Links from './components/Links';

export type ProjectPropsType = {
	name: string;
	ref?: MutableRefObject<HTMLDivElement | null> | null;
	videoUrl: string;
	picUrl: string;
	techTags: string[];
	text: string;
	linksUrl: { live: string; repo: string };
};

export default function Project({ props }: { props: ProjectPropsType }) {
	return (
		<div
			className="project"
			ref={props.ref || null}
			onAnimationEnd={(event) => (event.currentTarget.style.animation = '')}>
			<div className="project-display">
				<h1 className={`${karla.className} project-title`}>{props.name}</h1>
				<div className="content">
					<div className="video-stack">
						<VideoPlayer
							videoUrl={props.videoUrl}
							picUrl={props.picUrl}
						/>
						<TechTag tags={props.techTags} />
					</div>
					<div className="description-links">
						<Description text={props.text} />
						<Links urls={props.linksUrl} />
					</div>
				</div>
			</div>
		</div>
	);
}
