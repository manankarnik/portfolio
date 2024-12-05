<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import DarkModeToggle from "$lib/components/dark-mode-toggle.svelte";
	let links = [
		{ href: "/about", text: "About Me", hovered: false },
		{ href: "/projects", text: "Projects", hovered: false },
		{ href: "/work", text: "Work Experience", hovered: false },
		{ href: "/contact", text: "Contact", hovered: false }
	];
</script>

<header class="font-head">
	<div
		class="container mx-auto flex items-center justify-between gap-8 text-nowrap px-4 py-8 xl:gap-16 xl:px-8"
	>
		<div>
			<a class="text-3xl font-bold text-primary" href="/">[ Portfolio ]</a>
		</div>
		<div class="hidden items-center gap-10 text-xl lg:flex">
			{#each links as link}
				<a
					class={"font-bold" + ($page.url.pathname == link.href ? " text-primary" : "")}
					href={link.href}
					on:mouseover={() => (link.hovered = true)}
					on:focus={() => (link.hovered = true)}
					on:mouseout={() => (link.hovered = false)}
					on:blur={() => (link.hovered = false)}
				>
					[<span class:invisible={$page.url.pathname != link.href && !link.hovered}>■</span>]
					{link.text}
				</a>
			{/each}
		</div>
		<div class="flex items-center justify-center gap-2">
			<DarkModeToggle />
		</div>
	</div>
</header>
