<script>
	import { onMount } from "svelte";
	import { Menu, X } from "lucide-svelte";
	import DarkModeToggle from "$lib/components/dark-mode-toggle.svelte";

	const links = ["about", "education", "experience", "projects", "skills", "archive", "contact"];
	let open = $state(false);
	let scrolled = $state(false);
	let active = $state("");

	onMount(() => {
		const onScroll = () => (scrolled = window.scrollY > 0);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });

		// Highlight the section that crosses the upper middle of the viewport
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) active = entry.target.id;
				}
			},
			{ rootMargin: "-35% 0px -60% 0px" }
		);
		for (const id of links) {
			const section = document.getElementById(id);
			if (section) observer.observe(section);
		}
		return () => {
			window.removeEventListener("scroll", onScroll);
			observer.disconnect();
		};
	});

	function top(event) {
		if (window.location.pathname == "/") {
			event.preventDefault();
			history.replaceState(null, "", "/");
			window.scrollTo({ top: 0, behavior: "smooth" });
			active = "";
		}
	}
</script>

<header
	class="sticky top-0 z-10 w-full border-b bg-background font-head transition-colors {scrolled
		? 'border-line'
		: 'border-transparent'}"
>
	<div class="container mx-auto flex max-w-6xl items-center justify-between gap-8 px-4 py-4">
		<a class="font-bold" href="/" onclick={top}>
			<span class="text-primary">$</span> manan karnik
		</a>
		<div class="flex items-center gap-6">
			<nav class="hidden items-center gap-5 text-sm font-bold lg:flex">
				{#each links as link}
					<a
						class="transition-colors hover:text-primary {active == link
							? 'text-primary'
							: 'text-muted'}"
						href="/#{link}">./{link}</a
					>
				{/each}
			</nav>
			<DarkModeToggle class="hidden sm:flex" />
			<button class="p-2 lg:hidden" aria-label="Open menu" onclick={() => (open = true)}>
				<Menu />
			</button>
		</div>
	</div>
</header>

{#if open}
	<div
		aria-hidden="true"
		onclick={() => (open = false)}
		class="fixed inset-0 z-20 backdrop-blur-sm"
	></div>
{/if}
<!-- inert while closed, so the off-screen menu isn't reachable with Tab or screen readers -->
<div
	inert={!open}
	class="fixed bottom-0 right-0 top-0 z-30 w-72 border-l border-line bg-background p-4 font-head transition-transform duration-150 {open
		? 'translate-x-0'
		: 'translate-x-full'}"
>
	<div class="flex justify-end">
		<button class="p-2" aria-label="Close menu" onclick={() => (open = false)}>
			<X />
		</button>
	</div>
	<nav class="mt-4 flex flex-col">
		{#each links as link}
			<a
				class="p-4 font-bold {active == link ? 'text-primary' : ''}"
				href="/#{link}"
				onclick={() => (open = false)}>./{link}</a
			>
		{/each}
	</nav>
	<DarkModeToggle onclick={() => (open = false)} class="w-full p-4 font-bold" label={true} />
</div>
