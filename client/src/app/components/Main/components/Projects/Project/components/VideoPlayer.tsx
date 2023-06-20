'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useReducer, CSSProperties } from 'react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

type stateType = Pick<CSSProperties, 'height' | 'width' | 'position'> & {
	height: string;
	width: string;
	position?: string;
	top?: string;
	left?: string;
};

type actionType = {
	type: boolean;
};

const initialStyle: stateType = {
	height: '100%',
	width: '100%',
};

const dispatchStyle = (state: stateType, action: actionType): stateType => {
	switch (action.type) {
		case true:
			return { height: '50rem', width: '40rem', position: 'absolute', top: '-1rem', left: '1px' };
		case false:
			return initialStyle;
		default:
			return state;
	}
};

export default function VideoPlayer(props: { videoUrl: string; picUrl: string }) {
	const [currentStyle, dispatchCurrentStyle] = useReducer(dispatchStyle, initialStyle);

	return (
		<div className="videoplayer">
			<ReactPlayer
				className="react-player"
				url={props.videoUrl}
				height={'100%'}
				width={'100%'}
				style={currentStyle}
				controls
				muted
				light={
					<Image
						className="thumbnail"
						src={props.picUrl}
						height={700}
						width={700}
						alt={'thumbnail'}
					/>
				}
				onPlay={() => dispatchCurrentStyle({ type: true })}
				onPause={() => dispatchCurrentStyle({ type: false })}
			/>
		</div>
	);
}
