import { montserrat } from '@/libs/fonts';
import { Fragment } from 'react';

export default function Description(props: { text: string }) {
	return (
		<div className="description">
			<p className={montserrat.className}>
				{props.text.split(`\n`).map((section) => {
					return (
						<Fragment key={Math.random() + ''}>
							{section}
							<br />
						</Fragment>
					);
				})}
			</p>
		</div>
	);
}
