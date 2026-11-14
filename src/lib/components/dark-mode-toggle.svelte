<script>
	import { Sun, Moon } from "lucide-svelte";
	import { toggleMode, mode } from "mode-watcher";
	let props = $props();
	let action = $derived(`Switch to ${$mode == "dark" ? "light" : "dark"} mode`);
</script>

<button
	type="button"
	class="flex gap-2 p-2 {props.class}"
	aria-label={props.label ? undefined : action}
	title={props.label ? undefined : action}
	onclick={() => {
		toggleMode();
		props.onclick?.();
	}}
>
	{#if $mode == "dark"}
		<Sun aria-hidden="true" />
	{:else}
		<Moon aria-hidden="true" />
	{/if}
	{#if props.label}
		Switch to {$mode == "dark" ? "Light" : "Dark"} Mode
	{/if}
</button>
