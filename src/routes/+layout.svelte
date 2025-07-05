<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
	import Seo from '$lib/components/Seo.svelte';
	import Navbar from '$lib/components/Navbar.svelte';

	let { children } = $props();
</script>

<Seo
	seo={{
		title: page.data.title,
		description: page.data.description
	}}
/>

<main class="bg-background relative m-2 select-none md:m-4">
	<Navbar />
	{@render children()}
</main>
