<script lang="ts">
	import { setWidth } from '$lib/utils/helper';
	import Button from '$lib/core/Button.svelte';
</script>

<section class="text-primary-dark mt-10 grid grid-cols-11 gap-5 py-16">
	<h1
		class="section-header col-span-9 col-start-2 my-20 lg:col-span-4 lg:col-start-4"
		data-text="Let's Work Together."
		use:setWidth
	>
		Let's Work Together.
	</h1>
	<p class="font-rubik col-span-9 col-start-2 text-xl lg:col-span-4 lg:col-start-5">
		I believe our work should do good. I don't partner with projects involved in online gambling,
		payday loans, big tobacco, or those that exploit personal data. Due to its environmental impact,
		I also avoid projects using current crypto technology.
	</p>
	<p class="font-rubik col-span-9 col-start-2 text-xl lg:col-span-4 lg:col-start-5">
		If you're building something that promotes sustainability, diversity, or creates positive
		impact, let's connect.
	</p>
	<div class="col-span-11 mx-auto mt-8">
		<Button content="Get in touch" href="mailto:yosevelian@gmail.com" />
	</div>
</section>
