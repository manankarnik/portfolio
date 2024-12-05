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
				primary: "var(--primary)",
				foreground: "var(--foreground)",
				background: "var(--background)",
				muted: "var(--muted)"
			}
		}
	},

	plugins: []
};
