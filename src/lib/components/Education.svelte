<script>
	import CirclePattern from '$lib/core/icons/CirclePattern.svelte';
	import Meet from '$lib/core/icons/Meet.svelte';
	import Education from '$lib/core/icons/Education.svelte';
</script>

<div class="text-primary-dark flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 lg:px-20 xl:px-52 pt-30 gap-5 lg:gap-32 pb-10">
	<div class="flex flex-col lg:w-3/4 lg:order-2">
		<div class="inline-flex items-center gap-3 mb-8">
			<Education />
			<h1 class="section-header-icon" data-text="Education">Education</h1>
		</div>
		<p class="section-description mb-5">
			I am currently pursuing my degree in Informatics Engineering at the Electronic Engineering
			Polytechnic Institute of Surabaya (PENS/EEPIS), where I've gained a strong theoretical
			foundation in computer science, from algorithms to software engineering principles.
		</p>
		<p class="section-description mb-5">
			Beyond the classroom, I actively sharpen my practical skills and leadership abilities as a
			Core Team member of the Google Developer Student Clubs (GDSC), leading the Cloud Computing
			division. This role, along with my active participation in software development communities,
			allows me to collaborate, mentor, and stay current with industry trends.
		</p>
		<p class="section-description">
			To ensure my skills are always job-ready, I am committed to self-study on platforms like
			Dicoding, Google Cloud Skills Boost, AWS Academy, and CodePolitan, completing specialized
			learning paths in backend development, cloud architecture, and more.
		</p>
	</div>
	<div class="relative flex items-baseline lg:items-start justify-center lg:order-1">
		<div class="relative w-full sm:px-20 md:px-40 lg:px-0">
			<CirclePattern />
		</div>
		<div class="absolute z-10 w-full sm:px-20 md:px-40 lg:px-0">
			<Meet />
		</div>
	</div>
</div>
