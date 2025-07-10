<script lang="ts">
	import { setWidth } from '$lib/utils/helper';
	import Card from '$lib/core/Card.svelte';
	import { projects } from '$lib/data/project';
</script>

<section class="relative mt-40 grid grid-cols-11 gap-8">
	<h1 class="section-header" data-text="Projects." use:setWidth>Projects.</h1>
	<p class="section-description">Selected work I've taken on in the past.</p>
	{#each projects as { name, description, id, repoUrl, type, technologies }, key (key)}
		<Card {name} {description} {id} {repoUrl} {type} {technologies} />
	{/each}
	<svg
		width="340"
		height="64"
		viewBox="0 0 340 64"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="absolute top-0 right-0"
	>
		<mask
			id="mask0_44_357"
			style="mask-type:alpha"
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="340"
			height="64"
		>
			<rect width="340" height="64" fill="#D9D9D9" />
		</mask>
		<g mask="url(#mask0_44_357)">
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -226 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -170 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -114 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -58 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -2 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 54 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 110 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 166 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 222 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 278 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 334 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -219 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -163 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -107 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -51 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 5 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 61 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 117 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 173 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 229 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 285 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 341 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -268 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -212 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -156 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -100 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -44 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 12 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 68 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 124 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 180 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 236 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 292 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -261 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -205 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -149 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -93 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -37 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 19 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 75 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 131 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 187 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 243 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 299 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -254 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -198 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -142 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -86 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -30 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 26 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 82 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 138 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 194 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 250 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 306 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -247 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -191 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -135 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -79 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -23 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 33 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 89 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 145 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 201 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 257 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 313 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -240 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -184 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -128 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -72 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -16 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 40 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 96 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 152 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 208 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 264 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 320 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -233 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -177 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -121 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -65 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 -9 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 47 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 103 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 159 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 215 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 271 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.61944 -0.785044 0.925165 0.379564 327 137)"
				class="stroke-primary"
				stroke-width="2"
			/>
		</g>
	</svg>
</section>
