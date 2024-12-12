<script>
	import { goto } from "$app/navigation";
	import { page } from "$app/stores";
	import { browser } from "$app/environment";
	import { Menu, CircleX } from "lucide-svelte";
	import DarkModeToggle from "$lib/components/dark-mode-toggle.svelte";
	let links = [
		{ href: "/about", text: "About Me", hovered: false },
		{ href: "/projects", text: "Projects", hovered: false },
		{ href: "/work", text: "Work Experience", hovered: false },
		{ href: "/contact", text: "Contact Me", hovered: false }
	];
	let open = false;

	if (browser) {
		window.addEventListener("scroll", () => {
			if (window.scrollY > 0) {
				document.getElementById("header").classList.add("shadow-lg");
			} else {
				document.getElementById("header").classList.remove("shadow-lg");
			}
		});
	}
</script>

<header id="header" class="sticky top-0 w-full bg-background font-head">
	<div
		class="container mx-auto flex items-center justify-between gap-8 text-nowrap px-4 py-8 xl:gap-16 xl:px-8"
	>
		<div>
			<a class="text-3xl font-bold text-primary" href="/">[ Portfolio ]</a>
		</div>
		<div class="hidden items-center gap-4 text-lg lg:flex xl:gap-10">
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
			<DarkModeToggle class="hidden sm:block" />
			<button on:click={() => (open = true)}>
				<Menu class="block lg:hidden" />
			</button>
		</div>
	</div>
</header>
{#if open}
	<div
		aria-hidden="true"
		on:click={() => (open = false)}
		class="fixed bottom-0 left-0 right-0 top-0 backdrop-blur"
	></div>
{/if}
<div
	class={`fixed bottom-0 right-0 top-0 w-80 bg-background p-4 font-head transition-transform duration-100 ${
		open ? "translate-x-0" : "translate-x-full"
	}`}
>
	<div class="flex justify-end p-4">
		<button on:click={(open = false)}>
			<CircleX />
		</button>
	</div>
	{#each links as link}
		<a
			class={"flex gap-2 p-4 font-bold" + ($page.url.pathname == link.href ? " text-primary" : "")}
			href={link.href}
			on:click={() => (open = false)}
		>
			<div>[<span class:invisible={$page.url.pathname != link.href && !link.hovered}>■</span>]</div>
			<div>{link.text}</div>
		</a>
	{/each}
	<DarkModeToggle onclick={() => (open = false)} class="w-full p-4 font-bold" label={true} />
</div>
