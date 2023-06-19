import { montserrat } from '@/libs/fonts';
import Image from 'next/image';
import Link from 'next/link';

export default function Links(props: { urls: { live: string; repo: string } }) {
	return (
		<div className="links">
			<Link
				className="urls"
				href={props.urls.live}
				target="_blank">
				<button type="button">
					<Image
						src={'/techs/web-icon.svg'}
						height={20}
						width={20}
						alt="website"
					/>
					<p className={montserrat.className}>Live</p>
				</button>
			</Link>
			<Link
				className="urls"
				href={props.urls.repo}
				target="_blank">
				<button type="button">
					<Image
						src={'/techs/github.svg'}
						height={20}
						width={20}
						alt="repo"
					/>
					<p className={montserrat.className}>Repo</p>
				</button>
			</Link>
		</div>
	);
}
