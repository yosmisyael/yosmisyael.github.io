<script lang="ts">
	import { onMount } from 'svelte';
	import { splash } from '$lib/stores/splash';
	import { getWindowContext } from '$lib/context/window.svelte';

	let windowContext = getWindowContext();
	let barCount = $derived(windowContext.isMobile ? 4 : 8);
	let barRefs: (HTMLDivElement | null)[] = $state([]);
	let runningAnimations: Animation[] = [];

	onMount(() => {
		return () => {
			runningAnimations.forEach(animation => animation.cancel());
		};
	});

	// run animation when mode changes
	$effect(() => {
		const mode = $splash.currentAnimation;

		const barElements = barRefs.filter((el): el is HTMLDivElement => el !== null);

		if (!mode || barElements.length !== barCount) {
			return;
		}

		// cancel any running animations
		runningAnimations.forEach(animation => animation.cancel());
		runningAnimations = [];

		const isIntro = mode === 'intro';
		const duration = 1000;
		const stagger = 80;
		const easing = 'cubic-bezier(0.85, 0, 0.15, 1)';

		// apply animations for each bar
		const animations = barElements.map((bar, i) => {
			const delay = (isIntro ? i : barCount - 1 - i) * stagger;

			const keyframes: Keyframe[] = isIntro
				? [
					{ transform: 'scaleY(0)', transformOrigin: 'top' },
					{ transform: 'scaleY(1)', transformOrigin: 'top' }
				]
				: [
					{ transform: 'scaleY(1)', transformOrigin: 'top' },
					{ transform: 'scaleY(0)', transformOrigin: 'top' }
				];

			const animation = bar.animate(keyframes, {
				duration,
				delay,
				easing,
				fill: 'forwards'
			});

			runningAnimations.push(animation);
			return animation;
		});

		const lastBarIndex = isIntro ? 0 : barCount - 1;
		const lastAnimation = animations[lastBarIndex];

		lastAnimation.onfinish = () => {
			splash.complete();
		};
	});
</script>

{#if $splash.isVisible}
	<div class="splash-container">
		{#each [...Array(barCount).keys()] as i (i)}
			<div
				bind:this={barRefs[i]}
				class="splash-bar"
				style="transform: scaleY({$splash.currentAnimation === 'outro' ? 1 : 0})"
			></div>
		{/each}
	</div>
{/if}