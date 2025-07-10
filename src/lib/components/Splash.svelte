<script lang="ts">
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';
	import { splash } from '$lib/stores/splash';

	// computing bars total
	let windowWidth: number = $state(browser ? window.innerWidth : 1024);
	let isMobile: boolean = $derived(windowWidth < 1024);
	let barCount: number = $derived(isMobile ? 4 : 8);

	// track window width
	onMount(() => {
		windowWidth = window.innerWidth;
		const handleResize = () => {
			windowWidth = window.innerWidth;
		};
		window.addEventListener('resize', handleResize);
		return () => window.removeEventListener('resize', handleResize);
	});

	// setup state for bar animation
	let barsAnimating: boolean[] = $state([]);
	let barsRevealed: boolean[] = $state([]);
	let animationStarted: boolean = $state(false);

	// perform animation
	$effect(() => {
		barsAnimating = Array(barCount).fill(false);
		if ($splash.isActive && !animationStarted) {
			animationStarted = true;
			if ($splash.mode === 'intro') {
				barsRevealed = Array(barCount).fill(false);
			} else {
				barsRevealed = Array(barCount).fill(true);
			}
			startAnimation();
		} else if (!$splash.isActive) {
			animationStarted = false;
		}
	});

	// animate function
	function startAnimation() {
		if ($splash.mode === 'intro') {
			for (let i = barCount - 1; i >= 0; i--) {
				const delay = (barCount - 1 - i) * 100;
				setTimeout(() => {
					barsAnimating[i] = true;
					barsAnimating = [...barsAnimating];

					setTimeout(() => {
						barsRevealed[i] = true;
						barsRevealed = [...barsRevealed];
						if (i === 0) {
							setTimeout(() => {
								splash.stop();
							}, 300);
						}
					}, 400);
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
						if (i === barCount - 1) {
							setTimeout(() => {
								splash.stop();
							}, 300);
						}
					}, 400);
				}, delay);
			}
		}
	}
</script>

{#if $splash.isActive}
	<div class="loading-container">
		{#each Array(barCount) as _, i (i)}
			{#if $splash.mode === 'intro'}
				{#if !barsRevealed[i]}
					<div class="loading-bar" class:animate={barsAnimating[i]}></div>
				{:else}
					<div class="revealed-section"></div>
				{/if}
			{:else if barsRevealed[i]}
				<div class="revealed-section"></div>
			{:else}
				<div class="loading-bar reverse" class:animate={barsAnimating[i]}></div>
			{/if}
		{/each}
	</div>
{/if}
