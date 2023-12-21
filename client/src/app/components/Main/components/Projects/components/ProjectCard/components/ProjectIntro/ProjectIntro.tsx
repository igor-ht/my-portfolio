import './ProjectIntro.scss';
import Image from 'next/image';
import { ApiProjectPropsType } from '../../ProjectCard';

type ProjectIntroPropsType = {
	props: ApiProjectPropsType;
};

export default function ProjectIntro({ props }: ProjectIntroPropsType) {
	return (
		<div className="project-card">
			<Image
				src={props.cardUrl}
				alt="project"
				height={400}
				width={400}
			/>
			<div className="card-intro">
				<h1>{props.name}</h1>
				<p>
					{props.cardText} <a className="read-more">Read More</a>
				</p>
			</div>
		</div>
	);
}
