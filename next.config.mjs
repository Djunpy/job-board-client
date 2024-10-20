// /** @type {import('next').NextConfig} */
// const nextConfig = {
// 	reactStrictMode: true,
// 	env: {
// 		SERVER_URL: process.env.SERVER_URL
// 	},
// };

// export default nextConfig;

import createNextIntlPlugin from 'next-intl/plugin'
 
const withNextIntl = createNextIntlPlugin();
 
/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	env: {
		SERVER_URL: process.env.SERVER_URL
	},
	// i18n: {
  //   locales: ['en', 'ru', 'ro', 'uk'], 
  //   defaultLocale: 'ru',
  // },
};
 
export default withNextIntl(nextConfig);