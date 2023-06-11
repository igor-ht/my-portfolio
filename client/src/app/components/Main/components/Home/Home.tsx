import './style.scss';
import Image from 'next/image';

export default function Home() {
	return (
		<div id="home">
			<div className="intro">
				<Image
					src={'/mr.burger-video.gif'}
					alt="intro"
					height={500}
					width={500}
					unoptimized={true}
					priority
				/>
			</div>
		</div>
	);
}
