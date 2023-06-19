import { montserrat } from '@/libs/fonts';

export default function TechTag(props: { tags: string[] }) {
	const techTags = props.tags;
	return (
		<div className="tech-tags">
			{techTags.map((tag) => {
				return (
					<div
						className="tag"
						key={Math.random() * Date.now() + ''}>
						<p className={montserrat.className}>{tag}</p>
					</div>
				);
			})}
		</div>
	);
}
