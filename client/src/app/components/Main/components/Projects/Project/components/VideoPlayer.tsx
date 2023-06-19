import dynamic from 'next/dynamic';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function VideoPlayer(props: { url: string }) {
	return (
		<div className="videoplayer">
			<ReactPlayer
				url={props.url}
				controls
				muted
				light
			/>
		</div>
	);
}
