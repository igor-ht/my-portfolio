import './globals.css';

export const metadata = {
	title: 'Portfolio',
	description: 'My FullStack Developer Portfolio',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body id="app">{children}</body>
		</html>
	);
}
