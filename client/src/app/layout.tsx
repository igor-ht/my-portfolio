import './globals.css';
import './layout.scss';
import Header from './components/Header/Header';
import Main from './components/Main/Main';

export const metadata = {
	title: `Igor's Portfolio`,
	description: 'My FullStack Developer Portfolio',
	icons: {
		icon: '/logo_icon.svg',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			id="root"
			lang="en"
			data-theme="light">
			<body id="app">
				<Header />
				<Main>{children}</Main>
			</body>
		</html>
	);
}
