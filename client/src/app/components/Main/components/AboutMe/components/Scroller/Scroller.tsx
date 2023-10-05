'use client';

import './Scroller.scss';
import useSkillsScroller from '@/libs/aboutme/useSkillsScroller';
import Image from 'next/image';

type Props = {
	skills: {
		id: number;
		src: string;
		alt: string;
		title: string;
		name: string;
	}[];
};

export default function Scroller({ skills }: Props) {
	useSkillsScroller();

	return (
		<div className="skills">
			<section className="icons">
				{skills?.map((skill, i) => {
					return (
						<span
							key={i}
							aria-hidden="false">
							<Image
								src={skill.src}
								alt={skill.alt}
								title={skill.title}
								height="40"
								width="40"
								priority
								quality={1}
							/>
							<p>{skill.name}</p>
						</span>
					);
				})}
			</section>
		</div>
	);
}
