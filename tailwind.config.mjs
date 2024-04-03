import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			transitionProperty: {
				'max-height': 'max-height',
			},
			fontFamily: {
				'sans': ['monofonto', ...defaultTheme.fontFamily.sans],
			}
		},
	},
	plugins: [],
}
