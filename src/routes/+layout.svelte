<script>
	import "../app.css";
	import Header from "$lib/components/header.svelte";
	import Footer from "$lib/components/footer.svelte";
	import { ModeWatcher } from "mode-watcher";

	let { children } = $props();
	const description =
		"MS CS at Northeastern University, exploring how software really works, from operating systems to compilers and programming languages.";
</script>

<svelte:head>
	<link
		rel="preload"
		href="/fonts/code-new-roman-regular.woff2"
		as="font"
		type="font/woff2"
		crossorigin
	/>
	<link
		rel="preload"
		href="/fonts/code-new-roman-bold.woff2"
		as="font"
		type="font/woff2"
		crossorigin
	/>
	<title>Manan Karnik</title>
	<meta name="description" content={description} />
	<!-- Shown when the link is shared on LinkedIn, Slack, email, etc. -->
	<meta property="og:type" content="website" />
	<meta property="og:title" content="Manan Karnik" />
	<meta property="og:description" content={description} />
	<meta name="twitter:card" content="summary" />
</svelte:head>

<ModeWatcher defaultMode="light" />
<Header />
{@render children()}
<Footer />
