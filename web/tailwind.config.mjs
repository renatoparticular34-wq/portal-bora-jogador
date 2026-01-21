/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				// Paleta True Dark
				bj: {
					black: '#000000', // Fundo Global
					dark: '#0a0a0a',  // Fundo Secundário
					surface: '#121212', // Cards/Modais
					surfaceHover: '#171717',
					white: '#ffffff', // Títulos
					gray: '#e5e5e5',  // Texto Corpo
					dim: '#a3a3a3',   // Meta info (datas, autor)
					neon: '#39ff14',  // Accent: Verde Neon (Cyberpunk/Sport)
				},
			},
			fontFamily: {
				sans: ['Inter', 'sans-serif'], // Leitura
				heading: ['Oswald', 'sans-serif'], // Impacto
			},
			typography: (theme) => ({
				DEFAULT: {
					css: {
						color: theme('colors.bj.gray'),
						h1: { color: theme('colors.bj.white'), fontFamily: theme('fontFamily.heading') },
						h2: { color: theme('colors.bj.white'), fontFamily: theme('fontFamily.heading') },
						h3: { color: theme('colors.bj.white'), fontFamily: theme('fontFamily.heading') },
						strong: { color: theme('colors.bj.white') },
						a: {
							color: theme('colors.bj.neon'),
							textDecoration: 'none',
							'&:hover': { textDecoration: 'underline' },
						},
						blockquote: {
							borderLeftColor: theme('colors.bj.neon'),
							color: theme('colors.bj.white'),
						},
					},
				},
			}),
		},
	},
	plugins: [
		require('@tailwindcss/typography'), // Necessário para o Portable Text
	],
};