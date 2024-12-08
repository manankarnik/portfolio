<script>
	import { Sun, Moon } from "lucide-svelte";
	import { toggleMode, mode } from "mode-watcher";
	let props = $props();
</script>

<button
	class="flex gap-2 p-2 {props.class}"
	on:click={() => {
		toggleMode();
		props.onclick();
	}}
>
	{#if $mode == "dark"}
		<Sun />
	{:else}
		<Moon />
	{/if}
	{#if props.label}
		Switch to {$mode == "dark" ? "Light" : "Dark"} Mode
	{/if}
</button>
