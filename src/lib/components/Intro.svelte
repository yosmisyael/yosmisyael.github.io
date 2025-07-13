<script lang="ts">
	import CirclePattern from '$lib/core/icons/CirclePattern.svelte';
	import Self from '$lib/core/icons/Self.svelte';
	import Story from '$lib/core/icons/Story.svelte';
	import { Motion } from 'svelte-motion';

	const contents: string[] = [
		"Full-Stack Web Development: Architecting, building, and deploying robust web applications\n" +
		"\t\t\t\tdesigned for performance and scale.",
		"Intelligent Feature Integration: Leveraging foundational skills in Machine Learning and IoT\n" +
		"\t\t\t\tto add data-driven insights and smart connectivity to projects.",
		"Cloud-Native Deployment: Proficient in cloud fundamentals on AWS and GCP, ensuring every\n" +
		"\t\t\t\tproject I build is ready for a real-world, scalable deployment from day one."
	];
</script>

<div
	class="text-primary-dark flex flex-col items-center justify-between gap-5 px-4 pt-30 md:px-10 lg:flex-row lg:px-20 xl:px-52"
>
	<div class="flex flex-col">
		<!--	section content	-->
		<Motion
			initial={{
				opacity: 0,
				x: 200,
				scale: 0.8
			}}
			animate={{
				opacity: 1,
				x: 0,
				scale: 1
			}}
			transition={{
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				type: 'spring',
				stiffness: 200,
				damping: 20,
				delay: 1,
			}}
			let:motion
		>
			<div class="mb-8 inline-flex items-center gap-3" use:motion>
			<Story />
			<h1 class="section-header-icon" data-text="Quick Intro">Quick Intro</h1>
		</div>
		</Motion>
		<Motion
			initial={{
				opacity: 0,
				y: 300,
			}}
			animate={{
				opacity: 1,
				y: 0,
			}}
			transition={{
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				type: 'spring',
				stiffness: 200,
				damping: 20,
				delay: 1.2
			}}
			let:motion
		>
			<p class="section-description xl:w-3/4" use:motion>
				From a 2020 lockdown curiosity to a full-stack engineer, my five-year journey has been one of
				rapid, hands-on learning and a relentless drive to build effective solutions.
			</p>
		</Motion>
		<ul class="list-disc pl-6 text-lg xl:w-3/4">
			{#each contents as content, i (i)}
				<Motion
					initial={{
				opacity: 0,
				y: 200,
			}}
					animate={{
				opacity: 1,
				y: 0,
			}}
					transition={{
				duration: 0.8,
				ease: [0.25, 0.46, 0.45, 0.94],
				type: 'spring',
				stiffness: 200,
				damping: 20,
				delay: 1.2 + i * 0.2,
			}}
					let:motion
				>
					<li use:motion>{content}</li>
				</Motion>
			{/each}
		</ul>
		<!--	section icon	-->
	</div>
	<Motion
		initial={{
					scale: 0,
				}}
		animate={{
					scale: 1,
				}}
		transition={{
					type: 'spring',
					stiffness: 400,
					damping: 22,
					delay: 1.3
				}}
		let:motion
	>
		<div use:motion class="relative flex items-baseline justify-center xl:items-end">
			<div class="absolute w-full sm:px-20 md:px-40 lg:px-0">
				<CirclePattern />
			</div>
			<div class="relative z-10 w-full sm:px-20 md:px-40 lg:px-0">
				<Self />
			</div>
		</div>
	</Motion>
</div>
