/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: 'attachment',
		contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
		remotePatterns: [
			{
				protocol: 'https',
				hostname: 'cjyntkhqgtdnmlhfkwab.supabase.co',
				port: '',
				pathname: '/storage/**',
			},
		],
	},
	async headers() {
		return [
			{
				headers: [
					{
						key: 'X-Robots-Tag',
						value: process.env.NEXT_PUBLIC_VERCEL_ENV === 'production' ? 'all' : 'noindex',
					},
				],
				source: '/:path*',
			},
		];
	},
};

module.exports = nextConfig;
