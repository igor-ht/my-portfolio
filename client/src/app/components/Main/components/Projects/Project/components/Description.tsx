import { Fragment } from 'react';

export default function Description(props: { text: string }) {
	return (
		<div className="description">
			<p>
				{props.text.split(`\n`).map((section, index) => {
					return (
						<Fragment key={index}>
							{section}
							<br />
						</Fragment>
					);
				})}
			</p>
		</div>
	);
}
