import { montserrat, poiret_one } from '@/libs/fonts';
import './style.scss';

export default function ContactMe() {
	return (
		<div id="contact-me">
			<h1 className={`title ${poiret_one.className}`}>Contact Me</h1>
			<div>
				<p className={montserrat.className}>Fell free to contact me for doubts you had or professional projects.</p>
			</div>
		</div>
	);
}
