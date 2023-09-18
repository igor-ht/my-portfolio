import './Links.scss';
import Image from 'next/image';
import Link from 'next/link';

export default function Links(props: { urls: { live: string; repo: string } }) {
	return (
		<div className="project-links">
			<Link
				className="urls"
				href={props.urls.live}
				target="_blank">
				<button type="button">
					<Image
						src="https://cjyntkhqgtdnmlhfkwab.supabase.co/storage/v1/object/sign/skills/web-icon.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJza2lsbHMvd2ViLWljb24uc3ZnIiwiaWF0IjoxNjg5NTg2NDQ0LCJleHAiOjE3MjExMjI0NDR9.YM6dz2ckRuJhaQPCgyvBIsQtMjoRzhRrK3ysqyR0jaM&t=2023-07-17T09%3A34%3A04.322Z"
						height={20}
						width={20}
						alt="website"
						quality={1}
					/>
					<p>Live</p>
				</button>
			</Link>
			<Link
				className="urls"
				href={props.urls.repo}
				target="_blank">
				<button type="button">
					<Image
						src="https://cjyntkhqgtdnmlhfkwab.supabase.co/storage/v1/object/sign/skills/github.svg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJza2lsbHMvZ2l0aHViLnN2ZyIsImlhdCI6MTY4OTUwMTA2OSwiZXhwIjoxNzIxMDM3MDY5fQ.a3hgcDcnFKfJLg_1oS2DXZadLZZmBP-lOyI36c4Mpl0&t=2023-07-16T09%3A51%3A09.848Z"
						height={20}
						width={20}
						alt="repo"
						quality={1}
					/>
					<p>Repo</p>
				</button>
			</Link>
		</div>
	);
}
