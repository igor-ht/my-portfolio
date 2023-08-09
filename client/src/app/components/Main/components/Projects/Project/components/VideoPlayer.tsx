import dynamic from 'next/dynamic';
import Image from 'next/image';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

export default function VideoPlayer(props: { videoUrl: string; picUrl: string }) {
	return (
		<div className="videoplayer">
			<ReactPlayer
				className="react-player"
				url={props.videoUrl}
				height={'100%'}
				width={'100%'}
				controls
				muted
				light={
					<Image
						className="thumbnail"
						src={props.picUrl}
						height={700}
						width={700}
						alt={'thumbnail'}
						quality={1}
					/>
				}
			/>
		</div>
	);
}
