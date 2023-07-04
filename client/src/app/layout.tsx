import './globals.css';
import './layout.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import { Analytics } from '@vercel/analytics/react';

export const metadata = {
	title: `IHT's Portfolio`,
	description: 'My FullStack Developer Portfolio',
	icons: {
		icon: '/logo-icon.svg',
	},
};

export default function RootLayout() {
	return (
		<html
			id="root"
			lang="en">
			<body id="app">
				<Header />
				<Main />
				<Analytics />
			</body>
		</html>
	);
}
