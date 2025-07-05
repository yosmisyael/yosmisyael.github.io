<script lang="ts">
	import skills from '$lib/data/skill';
	import { setWidth } from '$lib/utils/helper';
	import ListItem from '$lib/core/ListItem.svelte';
</script>

<section class="relative">
	<div class="text-primary-dark relative z-10 grid grid-cols-11 gap-8 px-4" id="expertise">
		<h1 class="section-header" data-text="Expertise." use:setWidth>Expertise.</h1>
		<p class="section-description">Areas I've been working on over the last few years.</p>
		<div class="col-span-9 col-start-2 flex flex-col gap-10 lg:mt-10">
			{#each skills as { header, content, icon }, key (key)}
				<ListItem {header} {content} {icon} />
			{/each}
		</div>
	</div>

	<svg
		width="64"
		height="340"
		viewBox="0 0 64 340"
		fill="none"
		xmlns="http://www.w3.org/2000/svg"
		class="absolute top-0"
	>
		<mask
			id="mask0_44_356"
			style="mask-type:alpha"
			maskUnits="userSpaceOnUse"
			x="0"
			y="0"
			width="64"
			height="340"
		>
			<rect x="64" width="340" height="64" transform="rotate(90 64 0)" fill="#D9D9D9" />
		</mask>
		<g mask="url(#mask0_44_356)">
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -226)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -170)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -114)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -58)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -2)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 54)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 110)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 166)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 222)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 278)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 334)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -219)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -163)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -107)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -51)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 5)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 61)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 117)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 173)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 229)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 285)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 341)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -268)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -212)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -156)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -100)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -44)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 12)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 68)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 124)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 180)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 236)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 292)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -261)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -205)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -149)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -93)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -37)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 19)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 75)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 131)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 187)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 243)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 299)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -254)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -198)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -142)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -86)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -30)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 26)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 82)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 138)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 194)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 250)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 306)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -247)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -191)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -135)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -79)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -23)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 33)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 89)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 145)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 201)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 257)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 313)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -240)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -184)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -128)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -72)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -16)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 40)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 96)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 152)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 208)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 264)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 320)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -233)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -177)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -121)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -65)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 -9)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 47)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 103)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 159)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 215)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 271)"
				stroke="#faccff"
				stroke-width="2"
			/>
			<line
				y1="-1"
				x2="433.097"
				y2="-1"
				transform="matrix(0.785044 0.61944 -0.379564 0.925165 -73 327)"
				stroke="#faccff"
				stroke-width="2"
			/>
		</g>
	</svg>
</section>
