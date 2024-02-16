/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
		colors: {
			'white': '#ffffff',
			'black': '#000000',
			'red': colors.red,
			'slate': colors.slate,
			'zinc': colors.zinc,
			'stone': colors.stone,
			'purple': colors.purple,
			'violet': colors.violet,
			'sand': {
				DEFAULT: '#E8D2B5',
				light: "#E5DED5",
			},
			'mustard': '#EBAA4B',
			'indian-red': '#D65F5D',
			'redwood': {
				DEFAULT: '#A04746',
				dark: '#632827',
			},
			'brown' : {
				DEFAULT: '#5C2300',
				light: '#8c6239',
			},
		},
	},
	plugins: [],
}
