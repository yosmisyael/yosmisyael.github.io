<script lang="ts">
	import CirclePattern from '$lib/core/icons/CirclePattern.svelte';
	import Meet from '$lib/core/icons/Meet.svelte';
	import Education from '$lib/core/icons/Education.svelte';
	import { Motion } from 'svelte-motion';

	const contents: string[] = [
		'I am currently pursuing my degree in Informatics Engineering at the Electronic Engineering\n' +
			"\t\t\t\tPolytechnic Institute of Surabaya (PENS/EEPIS), where I've gained a strong theoretical\n" +
			'\t\t\t\tfoundation in computer science, from algorithms to software engineering principles.',
		'Beyond the classroom, I actively sharpen my practical skills and leadership abilities as a\n' +
			'\t\t\t\tCore Team member of the Google Developer Student Clubs (GDSC), leading the Cloud Computing\n' +
			'\t\t\t\tdivision. This role, along with my active participation in software development communities,\n' +
			'\t\t\t\tallows me to collaborate, mentor, and stay current with industry trends.',
		'To ensure my skills are always job-ready, I am committed to self-study on platforms like\n' +
			'\t\t\t\tDicoding, Google Cloud Skills Boost, AWS Academy, and CodePolitan, completing specialized\n' +
			'\t\t\t\tlearning paths in backend development, cloud architecture, and more.'
	];
</script>

<div
	class="text-primary-dark flex flex-col items-center justify-between gap-5 px-4 pt-30 pb-10 md:px-10 lg:flex-row lg:gap-32 lg:px-20 xl:px-52"
>
	<!-- section content -->
	<div class="flex flex-col lg:order-2 lg:w-3/4">
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
				delay: 1.6
			}}
			let:motion
		>
			<div use:motion class="mb-8 inline-flex items-center gap-3">
				<Education />
				<h1 class="section-header-icon" data-text="Education">Education</h1>
			</div>
		</Motion>
		{#each contents as content, i (i)}
			<Motion
				initial={{
					opacity: 0,
					y: 200
				}}
				animate={{
					opacity: 1,
					y: 0
				}}
				transition={{
					duration: 0.8,
					ease: [0.25, 0.46, 0.45, 0.94],
					type: 'spring',
					stiffness: 200,
					damping: 20,
					delay: 1.6 + i * 0.2
				}}
				let:motion
			>
				<p use:motion class="section-description mb-5">
					{content}
				</p>
			</Motion>
		{/each}
	</div>

	<!-- section icon	-->
	<Motion
		initial={{
			scale: 0
		}}
		animate={{
			scale: 1
		}}
		transition={{
			type: 'spring',
			stiffness: 400,
			damping: 22,
			delay: 1.6
		}}
		let:motion
	>
		<div use:motion class="relative flex items-baseline justify-center lg:order-1 lg:items-start">
			<div class="relative w-full sm:px-20 md:px-40 lg:px-0">
				<CirclePattern />
			</div>
			<div class="absolute z-10 w-full sm:px-20 md:px-40 lg:px-0">
				<Meet />
			</div>
		</div>
	</Motion>
</div>
