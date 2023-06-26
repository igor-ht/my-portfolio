import { inconsolata, montserrat } from '@/libs/fonts';

export default function Description(props: { text: string }) {
	return (
		<div className="description">
			<p className={montserrat.className}>{props.text}</p>
		</div>
	);
}
