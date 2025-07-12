<script lang="ts">
	import Project from '$lib/core/icons/Project.svelte';
	import Github from '$lib/core/icons/Github.svelte';
	import Arrow from '$lib/core/icons/Arrow.svelte';
	import type { ProjectProp } from '$lib/types/project';
	import { Motion } from 'svelte-motion';
	import { inview, type Options, type ScrollDirection } from 'svelte-inview';
	import { onMount } from 'svelte';
	import { browser } from '$app/environment';

	const { id, name, description, repoUrl, deployUrl, type, technologies }: ProjectProp = $props();

	let cardWrapperElement: HTMLDivElement;
	let translateX = $state(0);
	let translateY = $state(0);
	let animationId: number | null = null;
	let startX: number | null = null;
	let startY: number | null = null;

	function handleMouseMove(e: MouseEvent) {
		if (!cardWrapperElement) return;

		if (startX === null || startY === null) {
			startX = e.clientX;
			startY = e.clientY;
			return;
		}

		if (animationId) {
			cancelAnimationFrame(animationId);
		}

		animationId = requestAnimationFrame(() => {
			const deltaX = e.clientX - startX!;
			const deltaY = e.clientY - startY!;

			const sensitivity = 0.1;

			const targetX = deltaX * sensitivity;
			const targetY = deltaY * sensitivity;

			const maxOffset = 15;
			const constrainedX = Math.max(-maxOffset, Math.min(maxOffset, targetX));
			const constrainedY = Math.max(-maxOffset, Math.min(maxOffset, targetY));

			const lerpFactor = 0.2;
			translateX += (constrainedX - translateX) * lerpFactor;
			translateY += (constrainedY - translateY) * lerpFactor;
		});
	}

	function handleMouseLeave() {
		if (animationId) {
			cancelAnimationFrame(animationId);
			animationId = null;
		}

		startX = null;
		startY = null;

		const returnToCenter = () => {
			const lerpFactor = 0.15;
			translateX += (0 - translateX) * lerpFactor;
			translateY += (0 - translateY) * lerpFactor;

			if (Math.abs(translateX) > 0.1 || Math.abs(translateY) > 0.1) {
				requestAnimationFrame(returnToCenter);
			} else {
				translateX = 0;
				translateY = 0;
			}
		};

		requestAnimationFrame(returnToCenter);
	}

	// calculating screen width
	let windowWidth: number = $state(browser ? window.innerWidth : 1024);
	let isMobile: boolean = $derived(windowWidth < 1024);

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

	let isInView = $state<boolean>(false);
	let scrollDirection = $state<ScrollDirection>();
	const options = $derived<Options>({
		rootMargin: !isMobile ? '-300px' : '-100px',
		unobserveOnEnter: true
	});

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection;
	};
</script>

<Motion
	initial={{
		opacity: 0,
		y: !isMobile ? (scrollDirection?.vertical === 'down' ? 200 : 0) : 0,
		x: isMobile ? (scrollDirection?.vertical === 'down' ? 200 : 0) : 0
	}}
	animate={{
		opacity: isInView ? 1 : 0,
		y: !isMobile ? (isInView ? 0 : 200) : 0,
		x: isMobile ? (isInView ? 0 : 200) : 0
	}}
	transition={{
		duration: 0.8,
		ease: [0.25, 0.46, 0.45, 0.94],
		type: 'spring',
		stiffness: 200,
		damping: 20,
		delay: 0.3
	}}
	let:motion
>
	<div
		use:motion
		use:inview={options}
		oninview_change={handleChange}
		class="card-wrapper group"
		class:col-start-2={id % 3 === 1}
		bind:this={cardWrapperElement}
		onmousemove={handleMouseMove}
		onmouseleave={handleMouseLeave}
		style="--tx: {translateX}px; --ty: {translateY}px;"
		role="application"
	>
		<div class="card">
			<div class="flex items-center justify-between">
				<div class="inline-flex items-center gap-4">
					<Project />
					<span
						class="group-hover:bg-complementary-light font-raleway flex-wrap rounded-full border-[1.5px] px-2 py-1 text-center text-xs font-medium"
					>
						{type}
					</span>
				</div>
				<ul class="flex">
					<li><a href={repoUrl}><Github /></a></li>
					{#if deployUrl}
						<li><a href={repoUrl}><Arrow /></a></li>
					{/if}
				</ul>
			</div>
			<div class="card-header">
				<h2>{name}</h2>
			</div>
			<div class="card-body">
				<p class="text-md">{description}</p>
				<p class="flex flex-wrap gap-3">
					{#each technologies as tech, key (key)}
						<span class="font-mono text-sm font-semibold">{tech}</span>
					{/each}
				</p>
			</div>
		</div>
	</div>
</Motion>
