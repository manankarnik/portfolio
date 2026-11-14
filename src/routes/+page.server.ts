import { ACCESS_KEY } from "$env/static/private";
import type { Actions } from "./$types";

export const actions = {
	default: async ({ request }) => {
		const urlEncoded = new URLSearchParams(await request.formData());
		urlEncoded.append("accessKey", ACCESS_KEY);
		urlEncoded.append("subject", "Portfolio Contact Form");
		try {
			// A URLSearchParams body makes fetch send application/x-www-form-urlencoded
			const response = await fetch("https://api.staticforms.xyz/submit", {
				method: "POST",
				body: urlEncoded
			});
			const result = await response.json().catch(() => null);
			if (!response.ok || result?.success === false) {
				console.log(`staticforms responded ${response.status}:`, result);
				return { success: false };
			}
			return { success: true };
		} catch (e) {
			console.log(e);
			return { success: false };
		}
	}
} satisfies Actions;
