import type { Config } from 'tailwindcss'

const config: Config = {
	content: ['./src/**/*.{ts,tsx,mdx}'],
	theme: {
		extend: {
			colors: {
				'primary-blue': '#0092FC'
			},
			fontFamily: {
				sans: ['Manrope']
			}
		}
	},
	plugins: []
}
export default config
