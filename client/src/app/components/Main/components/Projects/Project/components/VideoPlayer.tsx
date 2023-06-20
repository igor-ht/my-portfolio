'use client';

import dynamic from 'next/dynamic';
import Image from 'next/image';
import { useReducer, CSSProperties, useRef } from 'react';

const ReactPlayer = dynamic(() => import('react-player/lazy'), { ssr: false });

type stateType = Pick<CSSProperties, ('height' & 'width') | 'position' | 'top' | 'left'> & {
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
	height: '13rem',
	width: '95%',
	position: 'unset',
	top: 'none',
	left: 'none',
};

const dispatchStyle = (state: stateType, action: actionType): stateType => {
	switch (action.type) {
		case true:
			return { height: '32rem', width: '40rem', position: 'absolute', top: '-4rem', left: '1px' };
		case false:
			return initialStyle;
		default:
			return state;
	}
};

export default function VideoPlayer(props: { videoUrl: string; picUrl: string }) {
	const [currentStyle, dispatchCurrentStyle] = useReducer(dispatchStyle, initialStyle);
	const videoWrapper = useRef<HTMLDivElement | null>(null);

	return (
		<div
			className="videoplayer"
			style={currentStyle}
			ref={videoWrapper}>
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
					/>
				}
				onPause={() => dispatchCurrentStyle({ type: false })}
				onStart={() => dispatchCurrentStyle({ type: true })}
			/>
		</div>
	);
}
