<script lang="ts">
	import { theme } from '$lib/stores/theme';
	import type { Component } from 'svelte';
	import Github from '$lib/core/icons/Github-V2.svelte';
	import LinkedIn from '$lib/core/icons/LinkedIn.svelte';
	import Discord from '$lib/core/icons/Discord.svelte';
	import Instagram from '$lib/core/icons/Instagram.svelte';

	const socials: { link: string, icon: Component }[] = [
		{
			link: 'https://github.com/yosmisyael',
			icon: Github,
		},
		{
			link: 'https://id.linkedin.com/in/misyael-yosevian-3a0a642a7',
			icon: LinkedIn,
		},
		{
			link: 'https://discord',
			icon: Discord,
		},
		{
			link: 'https://instagram.com/yosmisyael',
			icon: Instagram,
		},
	];
</script>

<footer class="relative">
	<!-- footer top line	-->
	<p
		class="footer-top-line z-40 text-center text-sm font-medium lg:fixed md:top-7/12 lg:-right-[9%] xl:-right-[5.5%] lg:origin-bottom-left lg:rotate-90 flex gap-6 justify-center"
		class:text-primary-dark={!$theme}
		class:text-primary={$theme}
	>
		{#each socials as { link, icon: Icon }, i (i)}
			<a href={link} class="lg:-rotate-90 group">
				<Icon />
			</a>
		{/each}
		<span
			class="footer-bottom-line absolute bottom-[50%] left-[110%] hidden h-[1.8px] w-full translate-y-[100%] lg:block"
			class:bg-primary-dark={!$theme}
			class:bg-primary={$theme}
		></span>
	</p>

	<!-- footer bottom line	-->
	<p
		class="footer-bottom-line z-40 py-3 text-center text-sm lg:fixed lg:top-6/12 lg:left-8 lg:origin-bottom-left lg:rotate-90 lg:text-left lg:text-base"
		class:text-primary-dark={!$theme}
		class:text-primary={$theme}
	>
		© MMXXV. 東ジャワで開発されました。
		<span
			class="footer-bottom-line absolute bottom-[50%] left-[100%] hidden h-[1.8px] w-full translate-y-[100%] lg:block"
			class:bg-primary-dark={!$theme}
			class:bg-primary={$theme}
		></span>
	</p>
</footer>
