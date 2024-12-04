<script>
	import "../app.css";
	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";
	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
</script>

<ModeWatcher />
<Header />
{@render children()}
<Footer />
