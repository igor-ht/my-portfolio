import style from './layout.module.scss';

export const metadata = {
	title: 'Igor Hamburger portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
