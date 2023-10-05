import './layout.scss';
import Header from './components/Header/Header';
import { Analytics } from '@vercel/analytics/react';
import { poiret_one, montserrat, inconsolata, karla } from '@/libs/fonts';
import { Metadata } from 'next';

export const metadata: Metadata = {
	title: `IHT's Portfolio`,
	description: 'My FullStack Developer Portfolio',
	metadataBase: new URL('https://iht-me.vercel.app/'),
	keywords: [
		'Full Stack Developer Portfolio',
		'Web Developer Portfolio',
		'Developer Portfolio',
		'Developer Personal Portfolio',
		'iht',
		'iht portfolio',
		'iht developer',
		'igor-ht',
		'igor ht',
	],
	icons: {
		icon: '/logo-icon.svg',
	},
	robots: {
		index: true,
		googleBot: {
			index: true,
		},
	},
	other: {
		'google-site-verification': 'p1kZTRj_nmjo6kW7s9gBlfhd-siCNinlJh4hkhrpCio',
	},
	referrer: 'origin-when-cross-origin',
	authors: [{ name: 'igor' }],
	colorScheme: 'dark',
	creator: 'i h t',
	formatDetection: {
		email: false,
		address: false,
		telephone: false,
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
