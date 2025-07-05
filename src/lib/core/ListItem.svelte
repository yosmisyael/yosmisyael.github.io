<script lang="ts">
	import type { Component } from 'svelte';

	const {
		header,
		content,
		icon: Icon
	}: { header: string; content: string; icon: Component } = $props();
</script>

<div
	class="text-primary-dark expertise col-span-1 grid grid-cols-1 items-center justify-center pb-10 lg:col-span-9 lg:col-start-2 lg:grid-cols-4 lg:gap-20"
>
	<div class="col-span-1 flex h-full w-full justify-center p-4 md:p-8 lg:col-span-2">
		<Icon />
	</div>
	<div
		class="col-span-1 flex flex-col gap-4 sm:col-span-3 lg:col-span-2 lg:-translate-x-20 xl:-translate-x-48"
	>
		<h2 class="font-sans text-2xl font-semibold sm:text-3xl">{header}</h2>
		<p class="text-base sm:text-xl">{content}</p>
	</div>
</div>
