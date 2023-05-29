import Image from 'next/image';

export default function Main({ children }: { children: React.ReactNode }) {
	return (
		<main>
			<div>
				<div>
					<Image
						src={'/logo_animated.gif'}
						alt="logo"
						width={450}
						height={450}
						unoptimized={true}
					/>
				</div>
				{children}
			</div>
		</main>
	);
}
