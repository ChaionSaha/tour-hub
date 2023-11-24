/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
	theme: {
		extend: {
			colors: {
				black: '#303030',
			},
		},
		screens: {
			sm: '576px',
			md: '768px',
			lg: '992px',
			xl: '1200px',
			'2xl': '1400px',
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#2DAFBC',
					secondary: '#565656',
					accent: '#37cdbe',
					neutral: '#3d4451',
					'base-100': '#ffffff',
					'base-200': '#F7F7F7',
					'base-300': '#303030 ',
				},
			},
		],
	},
};
