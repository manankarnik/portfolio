<script>
	import { goto } from "$app/navigation";
	let links = [
		{ href: "/about", text: "About Me" },
		{ href: "/education", text: "Education" },
		{ href: "/work", text: "Work Experience" },
		{ href: "/contact", text: "Contact" }
	];
</script>

<header>
	<div class="container mx-auto flex items-center justify-between gap-16 p-4">
		<div>
			<a class="text-2xl font-bold" href="/">Manan Karnik</a>
		</div>
		<div class="flex items-center gap-10">
			{#each links as link}
				<a class="block py-2 text-black" href={link.href}>{link.text}</a>
			{/each}
		</div>
		<button on:click={goto("/projects")} class="rounded-full border-2 px-4 py-2">Projects</button>
	</div>
</header>
