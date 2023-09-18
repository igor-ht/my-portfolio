import './TechTag.scss';

export default function TechTag(props: { tags: string[] }) {
	const techTags = props.tags;
	return (
		<div className="tech-tags">
			{techTags.map((tag, index) => {
				return (
					<div
						className="tag"
						key={index}>
						<p>{tag}</p>
					</div>
				);
			})}
		</div>
	);
}
