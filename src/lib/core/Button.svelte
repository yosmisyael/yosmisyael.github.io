<script lang="ts">
	let { href, content, position }: { href?: string; content: string; position?: string } = $props();
</script>

{#if href}
	<a {href} class="button" draggable="false" class:self-center={position && position === 'center'}>
		<span>{content}</span>
	</a>
{/if}
