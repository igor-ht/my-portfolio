import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
	return [
		{
			url: 'https://iht-me.vercel.app/',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://iht-me.vercel.app/#home',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://iht-me.vercel.app/#about-me',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://iht-me.vercel.app/#projects',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
		{
			url: 'https://iht-me.vercel.app/#contact-me',
			lastModified: new Date(),
			changeFrequency: 'yearly',
			priority: 1,
		},
	];
}
