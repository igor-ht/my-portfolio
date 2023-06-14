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
		<html lang="en">
			<body
				id="app"
				data-theme="light">
				<Header />
				<Main>{children}</Main>
			</body>
		</html>
	);
}
