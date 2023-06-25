import { inconsolata } from '@/libs/fonts';

export default function Description(props: { text: string }) {
	return (
		<div className="description">
			<p className={inconsolata.className}>{props.text}</p>
		</div>
	);
}
