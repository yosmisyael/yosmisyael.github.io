<script lang="ts">
	import type { SEO } from '$lib/types/seo';
	import decorate from '$lib/utils/decorate.js';

	let { seo }: {seo: SEO} = $props();

</script>

<svelte:head>
	<title>{decorate(seo.title)}</title>
	<meta name="description" content={seo.description} />
<!--	<link rel="canonical" href={seo.canonicalUrl ?? ``}>-->
</svelte:head>
