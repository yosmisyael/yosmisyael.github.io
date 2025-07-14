<script lang="ts">
	import skills from '$lib/data/skill';
	import { setWidth } from '$lib/utils/helper';
	import ListItem from '$lib/core/ListItem.svelte';
	import { inview, type Options } from 'svelte-inview';
	import { Motion } from 'svelte-motion';
	import type { ScrollDirection } from 'svelte-inview';
	import { browser } from '$app/environment';
	import { onMount } from 'svelte';

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
		rootMargin: !isMobile ? '-400px' : '-150px',
		unobserveOnEnter: true
	});

	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		isInView = detail.inView;
		scrollDirection = detail.scrollDirection;
	};
</script>

<section class="relative">
	<div
		class="text-primary-dark relative z-10 grid grid-cols-11 gap-8 px-4 lg:pt-12"
		id="expertise"
		use:inview={options}
		oninview_change={handleChange}
	>
		<!--	heading content	-->
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
				damping: 20
			}}
			let:motion
		>
			<h1 class="section-header" data-text="Expertise." use:setWidth use:motion>Expertise.</h1>
		</Motion>

		<!--	description	-->
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
				delay: 0.3
			}}
			let:motion
		>
			<p use:motion class="section-description">
				Areas I've been working on over the last few years.
			</p>
		</Motion>

		<!--	skills	-->
		<div class="col-span-9 col-start-2 flex flex-col gap-10 lg:mt-10">
			{#each skills as { header, content, icon }, key (key)}
				<ListItem {header} {content} {icon} />
			{/each}
		</div>
	</div>

	<svg
		width="64"
		height="340"
		viewBox="0 0 64 340"
		xmlns="http://www.w3.org/2000/svg"
		class="absolute top-0 left-[-7%] sm:left-0"
	>
		<mask
			id="mask0_44_356"
			style="mask-type:alpha"
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="64"
			height="340"
		>
			<rect x="64" width="340" height="64" transform="rotate(90 64 0)" fill="#D9D9D9" />
		</mask>
		<g mask="url(#mask0_44_356)">
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -226)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -170)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -114)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -58)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -2)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 54)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 110)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 166)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 222)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 278)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 334)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -219)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -163)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -107)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -51)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 5)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 61)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 117)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 173)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 229)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 285)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 341)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -268)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -212)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -156)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -100)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -44)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 12)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 68)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 124)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 180)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 236)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 292)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -261)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -205)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -149)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -93)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -37)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 19)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 75)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 131)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 187)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 243)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 299)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -254)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -198)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -142)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -86)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -30)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 26)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 82)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 138)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 194)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 250)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 306)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -247)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -191)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -135)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -79)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -23)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 33)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 89)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 145)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 201)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 257)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 313)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -240)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -184)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -128)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -72)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -16)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 40)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 96)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 152)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 208)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 264)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 320)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -233)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -177)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -121)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -65)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -9)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 47)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 103)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 159)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 215)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 271)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 327)"
				class="stroke-primary"
				stroke-width="2"
			/>
		</g>
	</svg>
</section>
