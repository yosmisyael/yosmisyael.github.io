<script lang="ts">
	import { page } from '$app/state';
	import '../app.css';
	import Seo from '$lib/components/Seo.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Contact from '$lib/components/Contact.svelte';
	import Footer from '$lib/components/Footer.svelte';

	let { children } = $props();
</script>

<Seo
	seo={{
		title: page.data.title,
		description: page.data.description
	}}
/>

<main class="bg-background min-h-screen relative m-2 select-none md:m-4">
	<Navbar />
	{@render children()}
	<Footer />
</main>
