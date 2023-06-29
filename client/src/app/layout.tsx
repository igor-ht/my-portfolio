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
};

export default function RootLayout() {
	return (
		<html
			id="root"
			lang="en">
			<body id="app">
				<Header />
				<Main />
			</body>
		</html>
	);
}
