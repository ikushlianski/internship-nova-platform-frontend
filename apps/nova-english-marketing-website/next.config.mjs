/** @type {import('next').NextConfig} */
import createNextIntlPlugin from "next-intl/plugin"

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
	experimental: {
		reactCompiler: true
	},
	async redirects() {
		return [
			{
				source: "/",
				destination: "/english-for-tech-b1-b2-level",
				permanent: false
			}
		]
	}
}

export default withNextIntl(nextConfig)
