import Link from 'next/link';

export default function Links(props: { urls: { live: string; repo: string } }) {
	return (
		<div className="links">
			<Link
				className="urls"
				href={props.urls.live}
				target="_blank">
				<button type="button">Live</button>
			</Link>
			<Link
				className="urls"
				href={props.urls.repo}
				target="_blank">
				<button type="button">Repo</button>
			</Link>
		</div>
	);
}
