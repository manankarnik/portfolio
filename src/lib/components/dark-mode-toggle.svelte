<script>
	import { Sun, Moon } from "lucide-svelte";
	import { toggleMode, mode } from "mode-watcher";
</script>

<button class="p-2" on:click={toggleMode}>
	{#if $mode == "dark"}
		<Sun />
	{:else}
		<Moon />
	{/if}
</button>
