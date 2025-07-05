<script>
	import CirclePattern from '$lib/core/icons/CirclePattern.svelte';
	import Self from '$lib/core/icons/Self.svelte';
	import Story from '$lib/core/icons/Story.svelte';
</script>

<div class="text-primary-dark flex flex-col lg:flex-row items-center justify-between px-4 md:px-10 lg:px-20 xl:px-52 pt-30 gap-5">
	<div class="flex flex-col">
		<div class="inline-flex items-center gap-3 mb-8">
			<Story />
			<h1 class="section-header-icon" data-text="Quick Intro">Quick Intro</h1>
		</div>
		<p class="section-description xl:w-3/4">
			From a 2020 lockdown curiosity to a full-stack engineer, my five-year journey has been one of
			rapid, hands-on learning and a relentless drive to build effective solutions.
		</p>
		<ul class="list-disc pl-6 text-lg xl:w-3/4">
			<li>
				Full-Stack Web Development: Architecting, building, and deploying robust web applications
				designed for performance and scale.
			</li>
			<li>
				Intelligent Feature Integration: Leveraging foundational skills in Machine Learning and IoT
				to add data-driven insights and smart connectivity to projects.
			</li>
			<li>
				Cloud-Native Deployment: Proficient in cloud fundamentals on AWS and GCP, ensuring every
				project I build is ready for a real-world, scalable deployment from day one.
			</li>
		</ul>
	</div>
	<div class="relative flex items-baseline xl:items-end justify-center">
		<div class="absolute w-full sm:px-20 md:px-40 lg:px-0">
			<CirclePattern />
		</div>
		<div class="relative z-10 w-full sm:px-20 md:px-40 lg:px-0">
			<Self />
		</div>
	</div>
</div>
