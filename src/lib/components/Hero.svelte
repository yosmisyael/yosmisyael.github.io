<script lang="ts">
	import Button from '$lib/core/Button.svelte';
	import { onMount } from 'svelte';
	import { Motion } from 'svelte-motion';
	import { getWindowContext } from '$lib/context/window.svelte';
	
	// listen to screen resize
	const windowContext = getWindowContext();

	let logoContainer: HTMLDivElement;
	let logo = $state<HTMLDivElement>();
	let isHovering = false;

	function handleMouseEnter() {
		isHovering = true;
	}

	function handleMouseLeave() {
		isHovering = false;

		// Reset to neutral position smoothly
		if (logo) {
			logo.style.transform = 'rotateX(0deg) rotateY(0deg) rotateZ(0deg) translateZ(10px)';
		}
	}

	function handleMouseMove(e: MouseEvent) {
		if (!isHovering || !logoContainer) return;

		const rect = logoContainer.getBoundingClientRect();
		const centerX = rect.left + rect.width / 2;
		const centerY = rect.top + rect.height / 2;

		// Calculate mouse position relative to center
		const deltaX = e.clientX - centerX;
		const deltaY = e.clientY - centerY;

		// Convert to percentages
		const percentX = deltaX / (rect.width / 2);
		const percentY = deltaY / (rect.height / 2);

		// Calculate rotation angles (max 25 degrees for more dramatic effect)
		const rotateX = -percentY * 25;
		const rotateY = percentX * 25;

		// Apply 3D rotation with dynamic depth
		const depth = 10 + Math.abs(percentX * 15) + Math.abs(percentY * 15);

		if (logo) {
			logo.style.transform = `
        rotateX(${rotateX}deg)
        rotateY(${rotateY}deg)
        translateZ(${depth}px)
      `;
		}
	}

	let hasMounted = $state(false);

	onMount(() => {
		hasMounted = true;

		document.addEventListener('mousemove', handleMouseMove);

		return () => {
			document.removeEventListener('mousemove', handleMouseMove);
		};
	});
</script>

<section
	class="flex min-h-screen flex-col items-center overflow-hidden select-none lg:grid lg:grid-cols-11"
>
	<!-- heading section	-->
	<div
		class="relative order-2 flex flex-col justify-center gap-5 text-center lg:col-span-4 lg:col-start-2 lg:text-left"
	>
		<!--	heading	-->
		<Motion
			initial={{
				y: 40,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: .4,
				ease: 'easeOut',
				delay: 1,
			}}
			let:motion
		>
			<h1 use:motion class="text-primary font-sans text-4xl sm:text-5xl font-extrabold md:text-6xl lg:text-5xl xl:text-6xl">
				<span class="text-primary-dark">Hi, I am</span><br /> Misyael Yosevian.
			</h1>
		</Motion>

		<!--	sub heading	-->
		<Motion
			initial={{
				y: -30,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: .4,
				ease: 'easeOut',
				delay: 1.1,
			}}
			let:motion
		>
			<h3
				use:motion
				class="text-primary-dark font-sans text-xl sm:text-2xl font-semibold md:text-3xl lg:text-[1.3rem] xl:text-3xl"
			>
				Software Engineer, Backend Developer
			</h3>
		</Motion>

		<!--	description	-->
		<Motion
			initial={{
				y: -30,
				opacity: 0,
			}}
			animate={{
				y: 0,
				opacity: 1,
			}}
			transition={{
				duration: .4,
				ease: 'easeOut',
				delay: 1,
			}}
			let:motion
		>
			<p
				use:motion
				class="text-primary-dark px-12 font-sans text-base sm:text-lg md:px-30 md:text-xl lg:px-0 lg:text-lg xl:text-2xl"
			>
				I <b>architect and engineer</b> robust, scalable, and efficient <b>backend systems</b> designed
				to solve real-world problems at scale.
			</p>
		</Motion>

		<!--	CTA	-->
		<Motion
			initial={{
				scale: 0,
				opacity: 0,
			}}
			animate={{
				scale: 1,
				opacity: 1,
			}}
			transition={{
				duration: .4,
				ease: 'easeOut',
				delay: 1.4,
				type: 'spring',
				stiffness: 400,
				damping: 25,
			}}
			let:motion>
			<div use:motion>
				<Button href="#expertise" content="Let's dive in" position={windowContext.isMobile ? 'center' : 'left'} />
			</div>
		</Motion>

		<!--	decorative element start	-->
		<svg
			width="95"
			height="150"
			viewBox="0 0 95 150"
			xmlns="http://www.w3.org/2000/svg"
			class="absolute -translate-x-12"
		>
			<path
				d="M95 32.5713L2.34277 150H0V149.865L95 29.4678V32.5713ZM95 41.4424L9.34277 150H6.89355L95 38.3389V41.4424ZM95 50.3145L16.3428 150H13.8936L95 47.2109V50.3145ZM95 59.1855L23.3428 150H20.8936L95 56.082V59.1855ZM95 68.0566L30.3428 150H27.8936L95 64.9531V68.0566ZM95 76.9287L37.3428 150H34.8936L95 73.8252V76.9287ZM95 85.7998L44.3428 150H41.8936L95 82.6963V85.7998ZM95 94.6709L51.3428 150H48.8936L95 91.5674V94.6709ZM95 103.543L58.3428 150H55.8936L95 100.438V103.543ZM95 112.414L65.3428 150H62.8936L95 109.311V112.414ZM95 121.285L72.3428 150H69.8936L95 118.182V121.285ZM95 130.157L79.3428 150H76.8936L95 127.053V130.157ZM95 139.028L86.3428 150H83.8936L95 135.925V139.028ZM95 147.899L93.3428 150H90.8936L95 144.796V147.899ZM95 23.7002L0 144.098V140.994L95 20.5967V23.7002ZM95 14.8281L0 135.227V132.122L95 11.7246V14.8281ZM95 5.95703L0 126.354V123.251L95 2.85352V5.95703ZM0 117.483V114.38L90.252 0H92.7012L0 117.483ZM0 108.612V105.508L83.252 0H85.7012L0 108.612ZM0 99.7402V96.6367L76.252 0H78.7012L0 99.7402ZM0 90.8691V87.7656L69.252 0H71.7012L0 90.8691ZM0 81.998V78.8945L62.252 0H64.7012L0 81.998ZM0 73.126V70.0225L55.252 0H57.7012L0 73.126ZM0 64.2549V61.1514L48.252 0H50.7012L0 64.2549ZM0 55.3838V52.2803L41.252 0H43.7012L0 55.3838ZM0 46.5117V43.4082L34.252 0H36.7012L0 46.5117ZM0 37.6406V34.5371L27.252 0H29.7012L0 37.6406ZM0 28.7695V25.666L20.252 0H22.7012L0 28.7695ZM0 19.8975V16.7949L13.252 0H15.7012L0 19.8975ZM0 11.0264V7.92285L6.25195 0H8.70117L0 11.0264ZM0 2.15527V0H1.70117L0 2.15527Z"
				class="fill-primary"
				fill-opacity="0.3"
			/>
		</svg>
		<svg
			width="95"
			height="150"
			viewBox="0 0 95 150"
			xmlns="http://www.w3.org/2000/svg"
			class="absolute right-[-15%] sm:right-0 translate-y-12 rotate-90"
		>
			<path
				d="M95 32.5713L2.34277 150H0V149.865L95 29.4678V32.5713ZM95 41.4424L9.34277 150H6.89355L95 38.3389V41.4424ZM95 50.3145L16.3428 150H13.8936L95 47.2109V50.3145ZM95 59.1855L23.3428 150H20.8936L95 56.082V59.1855ZM95 68.0566L30.3428 150H27.8936L95 64.9531V68.0566ZM95 76.9287L37.3428 150H34.8936L95 73.8252V76.9287ZM95 85.7998L44.3428 150H41.8936L95 82.6963V85.7998ZM95 94.6709L51.3428 150H48.8936L95 91.5674V94.6709ZM95 103.543L58.3428 150H55.8936L95 100.438V103.543ZM95 112.414L65.3428 150H62.8936L95 109.311V112.414ZM95 121.285L72.3428 150H69.8936L95 118.182V121.285ZM95 130.157L79.3428 150H76.8936L95 127.053V130.157ZM95 139.028L86.3428 150H83.8936L95 135.925V139.028ZM95 147.899L93.3428 150H90.8936L95 144.796V147.899ZM95 23.7002L0 144.098V140.994L95 20.5967V23.7002ZM95 14.8281L0 135.227V132.122L95 11.7246V14.8281ZM95 5.95703L0 126.354V123.251L95 2.85352V5.95703ZM0 117.483V114.38L90.252 0H92.7012L0 117.483ZM0 108.612V105.508L83.252 0H85.7012L0 108.612ZM0 99.7402V96.6367L76.252 0H78.7012L0 99.7402ZM0 90.8691V87.7656L69.252 0H71.7012L0 90.8691ZM0 81.998V78.8945L62.252 0H64.7012L0 81.998ZM0 73.126V70.0225L55.252 0H57.7012L0 73.126ZM0 64.2549V61.1514L48.252 0H50.7012L0 64.2549ZM0 55.3838V52.2803L41.252 0H43.7012L0 55.3838ZM0 46.5117V43.4082L34.252 0H36.7012L0 46.5117ZM0 37.6406V34.5371L27.252 0H29.7012L0 37.6406ZM0 28.7695V25.666L20.252 0H22.7012L0 28.7695ZM0 19.8975V16.7949L13.252 0H15.7012L0 19.8975ZM0 11.0264V7.92285L6.25195 0H8.70117L0 11.0264ZM0 2.15527V0H1.70117L0 2.15527Z"
				class="fill-primary"
				fill-opacity="0.3"
			/>
		</svg>
		<!--	decorative element	end -->
	</div>

	<!-- interactive element	-->
	<div
		class="logo-container mt-32 flex w-full items-center justify-center lg:order-2 lg:col-span-5 lg:mt-0 lg:h-full"
		bind:this={logoContainer}
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
		role="application"
	>
		{#if hasMounted}
			<Motion
				initial={{
					scale: 0,
				}}
				animate={{
					scale: 1,
				}}
				transition={{
					type: 'spring',
					stiffness: 600,
					damping: 8,
					delay: 1.3
				}}
				let:motion
			>
				<div
					use:motion
					bind:this={logo}
					class="logo"
				>
					<svg
						viewBox="0 0 197 193"
						xmlns="http://www.w3.org/2000/svg"
						class="h-44 sm:h-72 w-auto md:h-96 lg:h-72 xl:h-96 fill-transparent"
					>
						<path
							class="fill-complementary-light"
							d="M100.5 7.03572L121.862 44.0357L46.8064 174.036L4 174.036L100.5 7.03572Z"
						/>
						<path
							class="fill-complementary-light"
							d="M159.5 7.03572L180.862 44.0357L105.806 174.036L63 174.036L159.5 7.03572Z"
						/>
						<path
							class="fill-complementary-light"
							d="M159.043 109.071L137.681 146.072L154 174.337L196.806 174.337L159.043 109.071Z"
						/>
						<path
							d="M115.553 37.0347L41.6516 165.036L3.46544 165.035L96.4988 4.03362L115.553 37.0347Z"
							class="stroke-primary"
							stroke-width="4"
						/>
						<path
							d="M174.553 37.0347L100.652 165.036L62.4654 165.035L155.499 4.03362L174.553 37.0347Z"
							class="stroke-primary"
							stroke-width="4"
						/>
						<path
							d="M135.99 139.07L151.155 165.336L189.339 165.336L155.045 106.068L135.99 139.07Z"
							class="stroke-primary"
							stroke-width="4"
						/>
					</svg>
				</div>
			</Motion>
		{/if}
	</div>
</section>

<style>
	.logo-container {
		perspective: 1000px;
		cursor: pointer;
	}

	.logo {
		transform-style: preserve-3d;
		transition: transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94);
		display: flex;
		justify-content: center;
		align-items: center;
		filter: drop-shadow(0 10px 20px var(--volor-primary-light));
	}

	.logo svg {
		display: block;
		transition: filter 0.3s ease;
	}

	.logo:hover svg {
		filter: drop-shadow(0 0 10px var(--volor-primary-light));
	}

	/* Smooth entrance animation */
	.logo-container {
		animation: logoEntrance 1s ease-out;
	}

	@keyframes logoEntrance {
		0% {
			opacity: 0;
			transform: translateY(20px) scale(0.9);
		}
		100% {
			opacity: 1;
			transform: translateY(0) scale(1);
		}
	}
</style>
