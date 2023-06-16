import './style.scss';
import { MutableRefObject } from 'react';
import { karla } from '@/libs/fonts';

export type ProjectPropsType = {
	name: string;
	ref?: MutableRefObject<HTMLDivElement | null> | null;
};

export default function Project({ props }: { props: ProjectPropsType }) {
	return (
		<div
			className="project"
			ref={props.ref}
			style={{ zIndex: props.ref ? '1' : '0' }}
			onAnimationEnd={(event) => ((event.currentTarget.style.animation = ''), (event.currentTarget.style.zIndex = '-1'))}>
			<div className="project-display">
				<h1 className={`${karla.className} title`}>{props.name}</h1>
				<div className="content">
					<section className="video-stack"></section>
					<section className="description-links"></section>
				</div>
			</div>
		</div>
	);
}
