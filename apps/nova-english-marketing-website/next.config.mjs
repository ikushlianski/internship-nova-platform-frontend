/** @type {import('next').NextConfig} */

import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
	// async redirects() {
	// 	return [
	// 		{
	// 			source: "/",
	// 			destination: "/english-for-tech-b1-b2-level",
	// 			permanent: false
	// 		}
	// 	]
	// },
	webpack(config) {
		config.module.rules.push({
			test: /\.svg$/i,
			use: ["@svgr/webpack"]
		})

		return config
	}
}

export default withNextIntl(nextConfig)
