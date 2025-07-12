<script lang="ts">
	import { setWidth } from '$lib/utils/helper';
	import Button from '$lib/core/Button.svelte';
	import { Motion } from 'svelte-motion';
	import type { Options } from 'svelte-inview';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';
	import { inview } from 'svelte-inview';

	const contents: string[] = [
		"I believe our work should do good. I don't partner with projects involved in online gambling,\n" +
			'\t\t\tpayday loans, big tobacco, or those that exploit personal data. Due to its environmental impact,\n' +
			'\t\t\tI also avoid projects using current crypto technology.',
		"If you're building something that promotes sustainability, diversity, or creates positive\n" +
			"\t\timpact, let's connect."
	];

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

	// observer
	let isInView = $state<boolean>(false);
	let scrollDirection = $state<ScrollDirection>();
	const options = $derived<Options>({
		rootMargin: !isMobile ? '-400px' : '-180px',
		unobserveOnEnter: true
	});

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection;
	};
</script>

<section
	class="text-primary-dark mt-10 grid grid-cols-11 gap-5 py-16"
	use:inview={options}
	oninview_change={handleChange}
>
	<!-- section heading	-->
	<Motion
		initial={{
			opacity: 0,
			x: isInView ? (scrollDirection?.vertical === 'down' ? 200 : 200) : 0,
			scale: 0.8
		}}
		animate={{
			opacity: isInView ? 1 : 0,
			x: isInView ? 0 : 120,
			scale: isInView ? 1 : 0.8
		}}
		transition={{
			duration: 0.8,
			ease: [0.25, 0.46, 0.45, 0.94],
			type: 'spring',
			stiffness: 200,
			damping: 20,
			delay: 0.8
		}}
		let:motion
	>
		<h1
			class="section-header col-span-9 col-start-2 my-20 lg:col-span-4 lg:col-start-4"
			data-text="Let's Work Together."
			use:setWidth
			use:motion
		>
			Let's Work Together.
		</h1>
	</Motion>

	<!-- section content	-->
	{#each contents as text, i (i)}
		<Motion
			initial={{
				opacity: 0,
				y: isInView ? (scrollDirection?.vertical === 'down' ? 200 : -200) : 0
			}}
			animate={{
				opacity: isInView ? 1 : 0,
				y: isInView ? 0 : 200
			}}
			transition={{
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				type: 'spring',
				stiffness: 200,
				damping: 20,
				delay: 1 + i * 0.4
			}}
			let:motion
		>
			<p use:motion class="font-rubik col-span-9 col-start-2 text-xl lg:col-span-4 lg:col-start-5">
				{text}
			</p>
		</Motion>
	{/each}
	<Motion
		initial={{
			scale: 0,
			opacity: 0
		}}
		animate={{
			scale: isInView ? 1 : 0,
			opacity: isInView ? 1 : 0
		}}
		transition={{
			duration: 0.4,
			ease: 'easeOut',
			delay: 1.6,
			type: 'spring',
			stiffness: 400,
			damping: 25
		}}
		let:motion
	>
		<div class="col-span-11 mx-auto mt-8" use:motion>
			<Button content="Get in touch" href="mailto:yosevelian@gmail.com" />
		</div>
	</Motion>
</section>
