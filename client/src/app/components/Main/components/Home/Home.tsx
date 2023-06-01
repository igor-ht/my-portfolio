import './style.scss';
import { red_hat } from '@/libs/fonts';

export default function Home() {
	return (
		<div id="home">
			<div className="intro">
				<div className="intro-background" />
				<div className={`intro-text ${red_hat.className}`}>
					<p>Hello There! I am Igor, a Junior FullStack Web Developer.
          </p>
				</div>
			</div>
		</div>
	);
}
