import Header from './components/Header/Header';
import Main from './components/Main/Main';
import Footer from './components/Footer/Footer';
import './globals.css';
import './layout.scss';

export const metadata = {
	title: 'IDHT Portfolio',
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
				<Footer />
			</body>
		</html>
	);
}
