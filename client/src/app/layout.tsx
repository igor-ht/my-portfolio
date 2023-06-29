import './globals.css';
import './layout.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export const metadata = {
	title: `Igor's Portfolio`,
	description: 'My FullStack Developer Portfolio',
	icons: {
		icon: '/logo-icon.svg',
	},
	viewport: {
		width: 'device-width',
		height: 'device-height',
		initialScale: 1,
		maximumScale: 1,
		userScalable: 'no',
	},
};

export default function RootLayout() {
	return (
		<html
			id="root"
			lang="en"
			data-theme="light">
			<body id="app">
				<Header />
				<Main />
			</body>
		</html>
	);
}
