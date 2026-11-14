<script>
	import { socials } from "$lib/content.js";
</script>

<footer class="container mx-auto max-w-6xl px-4 pb-12 text-sm">
	<div
		class="flex flex-wrap items-center justify-between gap-x-6 gap-y-2 border border-line px-5 py-3"
	>
		<span class="text-muted"><span class="text-primary">$</span> © 2026 Manan Karnik</span>
		<nav class="flex flex-wrap gap-x-5 gap-y-1 font-bold">
			{#each socials as link}
				<a
					class="text-primary transition-colors hover:text-primary-hover"
					href={link.href}
					target="_blank"
					rel="noopener noreferrer">{link.text}<span aria-hidden="true" class="ml-0.5">↗</span></a
				>
			{/each}
			<a
				class="text-primary transition-colors hover:text-primary-hover"
				href="mailto:karnik.ma@northeastern.edu">Email</a
			>
			<a class="text-primary transition-colors hover:text-primary-hover" href="#top">cd ~ ↑</a>
		</nav>
	</div>
</footer>
