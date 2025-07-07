<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { isStarted, onComplete }: { isStarted: boolean; onComplete: () => void } = $props();

	let windowWidth: number = $state(browser ? window.innerWidth : 1024);
	let isMobile: boolean = $derived(windowWidth < 1024);

	let barCount: number = $derived(isMobile ? 4 : 8);

	let barsAnimating: boolean[] = $state([]);
	let barsRevealed: boolean[] = $state([]);

	let animationComplete: boolean = $state(false);
	let animationStarted: boolean = $state(false);

	onMount(() => {
		windowWidth = window.innerWidth;

		const handleResize = () => {
			windowWidth = window.innerWidth;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	$effect(() => {
		if (!animationStarted) {
			barsAnimating = Array(barCount).fill(false);
			barsRevealed = Array(barCount).fill(false);
		}
	});

	$effect(() => {
		if (!isStarted || animationComplete || animationStarted) return;

		animationStarted = true;

		for (let i = barCount - 1; i >= 0; i--) {
			const delay = (barCount - 1 - i) * 100;

			setTimeout(() => {
				barsAnimating[i] = true;
				barsAnimating = [...barsAnimating];

				setTimeout(() => {
					barsRevealed[i] = true;
					barsRevealed = [...barsRevealed];

					if (i == 0) {
						onComplete();
					}
				}, 200);
			}, delay);
		}
	});
</script>

<div class="loading-container" class:bg-complementary-light={!isStarted}>
	{#each Array(barCount) as _, i (i)}
		{#if !barsRevealed[i]}
			<div class="loading-bar" class:animate={barsAnimating[i]}></div>
		{:else}
			<div class="revealed-section"></div>
		{/if}
	{/each}
</div>
