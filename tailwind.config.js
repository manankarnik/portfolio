const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				head: ["Source Code Pro"],
				body: ["Poppins"]
			},
			colors: {
				primary: `light-dark(${colors.violet[600]}, ${colors.violet[500]})`,
				foreground: `light-dark(${colors.zinc[900]}, ${colors.zinc[100]})`,
				midground: `light-dark(${colors.zinc[50]}, ${colors.zinc[950]})`,
				background: `light-dark(${colors.zinc[100]}, ${colors.zinc[900]})`,
				muted: `light-dark(${colors.zinc[600]}, ${colors.zinc[500]})`
			}
		}
	},

	plugins: []
};
