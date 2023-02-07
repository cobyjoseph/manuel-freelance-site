/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			fontFamily: {
				Inter: ['Inter']
			},
			colors: {
				primaryText: '#282A30',
				lightGray: '#F1F1F1',
				darkGray: '#8C8C8C'
			}
		}
	},
	plugins: []
};
