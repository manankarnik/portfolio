import { ACCESS_KEY } from "$env/static/private";
import type { Actions } from "./$types";

export const actions = {
	default: async ({ request }) => {
		const formData = await request.formData();
		formData.append("accessKey", ACCESS_KEY);
		try {
			await fetch("https://api.staticforms.xyz/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/x-www-form-urlencoded"
				},
				body: formData.toString()
			});
			return { success: true };
		} catch (e) {
			console.log(e);
		}
	}
} satisfies Actions;
