<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	let { isStarted, isCompleted, onComplete, mode = 'reveal' }: { isStarted: boolean; isCompleted: boolean, onComplete: () => void, mode: 'reveal' | 'cover' } = $props();

	let windowWidth: number = $state(browser ? window.innerWidth : 1024);
	let isMobile: boolean = $derived(windowWidth < 1024);

	let barCount: number = $derived(isMobile ? 4 : 8);

	let barsAnimating: boolean[] = $state([]);
	let barsRevealed: boolean[] = $state([]);

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
		if (!isStarted) {
			if (mode === 'reveal') {
				barsAnimating = Array(barCount).fill(false);
				barsRevealed = Array(barCount).fill(false);
			} else {
				barsAnimating = Array(barCount).fill(false);
				barsRevealed = Array(barCount).fill(true);
			}
		}
	});

	$effect(() => {
		if (!isStarted || isCompleted) return;

		if (mode === 'reveal') {
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
		} else {
			for (let i = 0; i < barCount; i++) {
				const delay = i * 100;

				setTimeout(() => {
					barsRevealed[i] = false;
					barsRevealed = [...barsRevealed];

					setTimeout(() => {
						barsAnimating[i] = true;
						barsAnimating = [...barsAnimating];
						if (i == barCount - 1) {
							setTimeout(() => onComplete(), 500);
						}
					}, 200);
				}, delay);
			}
		}
	});
</script>

<div class="loading-container">
	{#each Array(barCount) as _, i (i)}
		{#if mode === 'reveal'}
			{#if !barsRevealed[i]}
				<div class="loading-bar" class:animate={barsAnimating[i]}></div>
			{:else}
				<div class="revealed-section"></div>
			{/if}
		{:else}
			{#if barsRevealed[i]}
				<div class="revealed-section"></div>
			{:else}
				<div class="loading-bar reverse" class:animate={barsAnimating[i]}></div>
			{/if}
		{/if}
	{/each}
</div>
