import { ACCESS_KEY } from "$env/static/private";
import type { Actions } from "./$types";

export const actions = {
	default: async ({ request }) => {
		const urlEncoded = new URLSearchParams(await request.formData());
		urlEncoded.append("accessKey", ACCESS_KEY);
		urlEncoded.append("subject", "Portfolio Contact Form");
		try {
			const response = await fetch("https://api.staticforms.xyz/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-url-formencoded"
				},
				body: urlEncoded
			});
			return { success: true };
		} catch (e) {
			console.log(e);
			return { success: false };
		}
	}
} satisfies Actions;
