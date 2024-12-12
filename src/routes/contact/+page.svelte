<script>
	import { onMount } from "svelte";
	import { MailCheck, MailX, CircleX } from "lucide-svelte";
	let url = $state("");
	let closed = $state(false);
	onMount(() => (url = window.location.href));
	let { form } = $props();
</script>

{#if !closed && form}
	<div
		class="top-18 container mx-auto flex w-full justify-between gap-4 text-nowrap p-4 font-bold xl:px-8 {form.success
			? 'bg-green-200 text-green-500'
			: 'bg-red-200 text-red-500'}"
	>
		<div class="flex justify-center gap-4">
			{#if form.success}
				<MailCheck /> Message sent successfully!
			{:else}
				<MailX /> Something went wrong! Try again.
			{/if}
		</div>
		<button onclick={() => (closed = true)}>
			<CircleX class={form.success ? "text-green-500" : "text-red-500"} />
		</button>
	</div>
{/if}

<section class="container mx-auto min-h-[80vh] p-4 lg:p-8">
	<h1 class="font-head text-4xl font-extrabold text-primary xl:text-6xl"># Contact Me</h1>
	<div class="my-8 h-full min-h-[60vh] items-center justify-center gap-8 xl:flex">
		<h2
			class="my-8 text-2xl font-extrabold text-primary sm:text-3xl xl:w-[800px] xl:text-5xl xl:!leading-relaxed"
		>
			<div>Want to debug the mysteries of the universe?</div>
			<div class="text-lg font-medium text-muted">Or just add to my unread emails?</div>
		</h2>
		<form method="post" class="w-full rounded-lg bg-midground p-4 shadow-lg lg:p-8">
			<input type="hidden" name="subject" value="Portfolio Contact Form" />
			<input type="hidden" name="redirectTo" value={url} />
			<label for="name">
				<div class="font-head text-2xl font-extrabold text-primary xl:text-4xl">
					## Full Name <span class="text-red-500">*</span>
				</div>
				<div class="text-muted">&lt;!-- git config user.name --&gt;</div>
				<input
					name="name"
					required
					class="my-4 w-full border border-muted p-2"
					id="name"
					type="text"
				/>
			</label>
			<label for="email">
				<div class="font-head text-2xl font-extrabold text-primary xl:text-4xl">
					## Email <span class="text-red-500">*</span>
				</div>
				<div class="text-muted">&lt;!-- git config user.email --&gt;</div>
				<input
					name="email"
					required
					class="my-4 w-full border border-muted p-2"
					id="email"
					type="email"
				/>
			</label>
			<label for="message">
				<div class="font-head text-2xl font-extrabold text-primary xl:text-4xl">
					## Message <span class="text-red-500">*</span>
				</div>
				<div class="text-muted">&lt;!-- git commit --message --&gt;</div>
				<textarea
					name="message"
					required
					class="my-4 w-full resize-none border border-muted p-2"
					rows="5"
					id="message"
				></textarea>
			</label>
			<button
				type="submit"
				class="block w-full rounded-lg bg-primary py-4 font-semibold text-zinc-200 sm:my-0"
			>
				&lang; git push origin main &rang;
			</button>
		</form>
	</div>
</section>
