import './AboutMe.scss';
import AboutMeSumarry from './components/AboutMeSummary/AboutMeSummary';
import Scroller from './components/Scroller/Scroller';
import { getSkills } from '@/libs/getData';
import { use } from 'react';

export default function AboutMe() {
	const { skills } = use(getSkills());

	return (
		<div id="about-me">
			<h1 className="title">About Me:</h1>
			<AboutMeSumarry />
			<Scroller skills={skills} />
		</div>
	);
}
