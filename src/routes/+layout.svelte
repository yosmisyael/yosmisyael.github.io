<script lang="ts">
	import { onMount } from 'svelte';
	import { page } from '$app/state';
	import '../app.css';
	import Seo from '$lib/components/Seo.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import Splash from '$lib/components/Splash.svelte';

	let { children } = $props();

	let isMounted: boolean = $state(false);
	let isSplashStarted: boolean = $state(false);
	let isSplashCompleted: boolean = $state(false);

	const delaySplash = 600;

	onMount(() => {
		isMounted = true;

		const timer = setTimeout(() => {
			isSplashStarted = true;
		}, delaySplash);

		return () => clearTimeout(timer);
	});

	function disableScroll(e: WheelEvent): void {
		if (!isSplashCompleted) {
			e.preventDefault();
		}
	}

	function handleSplashComplete(): void {
		isSplashCompleted = true;
	}

	$effect(() => {
		if (!isSplashCompleted) {
			document.body.style.overflow = 'hidden';
		} else {
			document.body.style.overflow = '';
		}
	});
</script>

<Seo
	seo={{
		title: page.data.title,
		description: page.data.description
	}}
/>

<svelte:window onwheel={disableScroll} />

<main class="page-wrapper">
	{#if !isSplashCompleted}
		<div class="absolute top-0 right-0 bottom-0 left-0 z-50 h-screen w-full">
			<Splash isStarted={isSplashStarted} onComplete={handleSplashComplete} />
		</div>
	{/if}

	{#if isMounted}
		<Navbar />
		{@render children()}
		<Footer />
	{/if}
</main>
