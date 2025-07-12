<script lang="ts">
	import { type Component, onMount } from 'svelte';
	import { inview, type Options, type ScrollDirection } from 'svelte-inview';
	import { Motion } from 'svelte-motion';
	import { browser } from '$app/environment';

	const {
		header,
		content,
		icon: Icon
	}: { header: string; content: string; icon: Component } = $props();

	let hasMounted = $state<boolean>(false);

	// calculating screen width
	let windowWidth: number = $state(browser ? window.innerWidth : 1024);
	let isMobile: boolean = $derived(windowWidth < 1024);

	onMount(() => {
		hasMounted = true;

		windowWidth = window.innerWidth;

		const handleResize = () => {
			windowWidth = window.innerWidth;
		};

		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	});

	// observer
	let isInView = $state<boolean>(false);
	let scrollDirection = $state<ScrollDirection>();
	const options = $derived<Options>({
		rootMargin: !isMobile ? '-400px' : '-100px',
		unobserveOnEnter: true
	});

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection;
	};
</script>

<div
	use:inview={options}
	oninview_change={handleChange}
	class="text-primary-dark expertise col-span-1 grid grid-cols-1 items-center justify-center pb-10 lg:col-span-9 lg:col-start-2 lg:grid-cols-4 lg:gap-20"
>
	<!-- skill icon	-->
	{#if hasMounted}
		<Motion
			initial={{
				scale: 0
			}}
			animate={{
				scale: isInView ? 1 : 0
			}}
			transition={{
				type: 'spring',
				stiffness: 400,
				damping: 15
			}}
			let:motion
		>
			<div use:motion class="col-span-1 flex h-full w-full justify-center p-4 md:p-8 lg:col-span-2">
				<Icon />
			</div>
		</Motion>
	{/if}
	<!-- skill description	-->
	<div
		class="col-span-1 flex flex-col gap-4 sm:col-span-3 lg:col-span-2 lg:-translate-x-20 xl:-translate-x-48"
	>
		<Motion
			initial={{
				opacity: 0,
				x: isInView ? (scrollDirection?.vertical === 'down' ? 200 : -200) : 0
			}}
			animate={{
				opacity: isInView ? 1 : 0,
				x: isInView ? 0 : 200
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
			<h2 use:motion class="font-sans text-2xl font-semibold will-change-auto sm:text-3xl">
				{header}
			</h2>
		</Motion>
		<Motion
			initial={{
				opacity: 0,
				y: isInView ? (scrollDirection?.vertical === 'down' ? 50 : -50) : 0
			}}
			animate={{
				opacity: isInView ? 1 : 0,
				y: isInView ? 0 : 50
			}}
			transition={{
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				type: 'spring',
				stiffness: 200,
				damping: 20,
				delay: 0.7
			}}
			let:motion
		>
			<p use:motion class="text-base sm:text-xl">{content}</p>
		</Motion>
	</div>
</div>
