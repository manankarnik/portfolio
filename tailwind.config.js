const colors = require("tailwindcss/colors");
/** @type {import('tailwindcss').Config} */
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],
	darkMode: "class",
	theme: {
		extend: {
			fontFamily: {
				head: ['"Code New Roman"', "monospace"],
				body: ['"Code New Roman"', "monospace"],
				// Tailwind's base styles use this for <code>, <pre>, and form fields
				mono: [['"Code New Roman"', "monospace"], { fontFeatureSettings: '"ss08"' }]
			},
			colors: {
				primary: `light-dark(${colors.violet[600]}, ${colors.violet[400]})`,
				"primary-hover": `light-dark(${colors.violet[800]}, ${colors.violet[300]})`,
				"primary-soft": `light-dark(${colors.violet[100]}, ${colors.violet[950]})`,
				"on-primary-soft": `light-dark(${colors.violet[700]}, ${colors.violet[200]})`,
				"on-primary": `light-dark(${colors.zinc[100]}, ${colors.zinc[950]})`,
				foreground: `light-dark(${colors.zinc[900]}, ${colors.zinc[100]})`,
				midground: `light-dark(${colors.zinc[50]}, ${colors.zinc[900]})`,
				background: `light-dark(${colors.zinc[100]}, ${colors.zinc[950]})`,
				muted: `light-dark(${colors.zinc[600]}, ${colors.zinc[400]})`,
				line: `light-dark(${colors.zinc[600]}, ${colors.zinc[700]})`,
				chip: `light-dark(${colors.zinc[200]}, ${colors.zinc[800]})`
			}
		}
	},

	plugins: []
};
