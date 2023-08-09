import './layout.scss';
import Header from './components/Header/Header';
import { Analytics } from '@vercel/analytics/react';
import { poiret_one, montserrat, inconsolata, karla } from '@/libs/fonts';

export const metadata = {
	title: `IHT's Portfolio`,
	description: 'My FullStack Developer Portfolio',
	icons: {
		icon: '/logo-icon.svg',
	},
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html
			id="root"
			className={`${poiret_one.variable} ${montserrat.variable} ${inconsolata.variable} ${karla.variable}`}
			lang="en">
			<body id="app">
				<Header />
				{children}
				<Analytics />
			</body>
		</html>
	);
}
