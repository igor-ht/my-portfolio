import dynamic from 'next/dynamic';
import Image from 'next/image';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function VideoPlayer(props: { videoUrl: string; picUrl: string }) {
	return (
		<div className="videoplayer">
			<ReactPlayer
				url={props.videoUrl}
				controls
				muted
				light={
					<Image
						src={props.picUrl}
						height={100}
						width={100}
						alt={'thumbnail'}
					/>
				}
				height={'100%'}
				width={'100%'}
			/>
		</div>
	);
}
