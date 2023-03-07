/** @type {import('tailwindcss').Config} */

module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
				hero: "url('../assets/miyazaki-art-show.jpg')",
			},
			colors: {
				primary: '#15191F',
				secondary: '#FEFAF4',
				accentGreen: '#20AC98',
				accentYellow: '#FFE078',
			},
		},
		fontFamily: {
			sans: ['Source Sans Pro', 'sans-serif'],
		},
	},
	plugins: [],
};
