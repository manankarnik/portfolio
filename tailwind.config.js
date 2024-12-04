/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Fira Mono"]
			},
			colors: {
				primary: colors.violet[500]
			}
		}
	},

	plugins: []
};
