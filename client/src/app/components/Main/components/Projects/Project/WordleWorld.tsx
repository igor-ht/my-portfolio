import './style.scss';
import { karla } from '@/libs/fonts';

export default function WordleWorld() {
	return (
		<div className="project-display">
			<h1 className={`${karla.className} title`}>WordleWorld</h1>
			<div className="content">
				<section className="video-stack"></section>
				<section className="description-links"></section>
			</div>
		</div>
	);
}
