<script lang="ts">
	import { page } from '$app/state';
	import { theme } from '$lib/stores/theme';
	import { Motion } from 'svelte-motion';
	import { getWindowContext } from '$lib/context/window.svelte';

	// listen to screen resize
	const windowContext = getWindowContext();

	let {
		toggleTheme,
		mobileMenu
	}: {
		toggleTheme: () => void;
		mobileMenu: typeof import('$lib/stores/menu').mobileMenu;
	} = $props();

	const navItems: Array<{ href: string; label: string }> = [
		{ href: '/about', label: 'About' },
		{ href: 'https::medium.com', label: 'Writing' },
		{ href: 'mailto:yosevelian@gmail.com', label: 'Hire Me' }
	];
</script>

<nav class="fixed left-0 z-30 w-full">
	<div class="flex items-center justify-between px-6 py-4 md:px-16 lg:px-32">
		<div class="relative z-50 inline-flex items-center gap-5 md:gap-10">
			<!-- brand -->
			<Motion
				initial={{
					opacity: 0,
					y: 20
				}}
				animate={{
					opacity: 1,
					y: 0
				}}
				transition={{
					duration: 0.5,
					delay: 0.8
				}}
				let:motion
			>
				<a
					use:motion
					href="/"
					aria-label="Home"
					onclick={() => $mobileMenu && mobileMenu.close()}
					class="motion-item"
				>
					<svg
						width="198"
						height="193"
						viewBox="0 0 198 193"
						xmlns="http://www.w3.org/2000/svg"
						class="h-14 w-fit hover:cursor-pointer md:h-16 fill-none"
					>
						<path
							class="fill-complementary-light"
							d="M101.5 19.0357L122.862 56.0357L47.8064 186.036L5 186.036L101.5 19.0357Z"
						/>
						<path
							class="fill-complementary-light"
							d="M160.5 19.0357L181.862 56.0357L106.806 186.036L64 186.036L160.5 19.0357Z"
						/>
						<path
							class="fill-complementary-light"
							d="M160.043 121.071L138.681 158.072L155 186.337L197.806 186.337L160.043 121.071Z"
						/>
						<path
							d="M114.398 37.0354L41.0746 164.035L5.19768 164.035L96.4991 6.03309L114.398 37.0354Z"
							class="stroke-primary"
							stroke-width="6"
						/>
						<path
							d="M173.398 37.0354L100.075 164.035L64.1977 164.035L155.499 6.03309L173.398 37.0354Z"
							class="stroke-primary"
							stroke-width="6"
						/>
						<path
							d="M137.145 139.071L151.732 164.336L187.604 164.336L155.046 108.065L137.145 139.071Z"
							class="stroke-primary"
							stroke-width="6"
						/>
					</svg>
				</a>
			</Motion>

			<!-- border -->
			<span class="border-r-primary h-16 w-1 border-r-2 md:h-20"></span>

			<!-- toggle -->
			<Motion
				initial={{
					opacity: 0,
					y: 20
				}}
				animate={{
					opacity: 1,
					y: 0
				}}
				transition={{
					duration: 0.5,
					delay: 1
				}}
				let:motion
			>
				<button use:motion aria-label="Toggle Theme" onclick={toggleTheme}>
					<svg
						width="48"
						height="48"
						viewBox="0 0 34 34"
						xmlns="http://www.w3.org/2000/svg"
						class="h-10 hover:cursor-pointer md:h-max fill-none"
					>
						<path
							class="fill-complementary-light"
							d="M14 10C14 16.6274 19.3726 22 26 22C27.2123 22 28.3827 21.8207 29.4859 21.4863C27.9924 26.4137 23.4151 29.9998 18 29.9998C11.3726 29.9998 6 24.6276 6 18.0002C6 12.5851 9.58677 8.00779 14.5141 6.51434C14.1798 7.6175 14 8.78767 14 10Z"
						/>
						<path
							d="M12 8.00002C12 14.6274 17.3726 20 24 20C25.2123 20 26.3827 19.8207 27.4859 19.4863C25.9924 24.4137 21.4151 27.9998 16 27.9998C9.37258 27.9998 4 22.6276 4 16.0002C4 10.5851 7.58677 6.00779 12.5141 4.51434C12.1798 5.6175 12 6.78767 12 8.00002Z"
							class="stroke-primary"
							stroke-width="1.7"
							stroke-linecap="round"
							stroke-linejoin="round"
						/>
					</svg>
				</button>
			</Motion>
		</div>

		<!-- nav menu -->
		<Motion
			initial={{
				scaleY: windowContext.isMobile ? 0 : 1
			}}
			animate={{
				scaleY: windowContext.isMobile && $mobileMenu ? 1 : 1
			}}
			transition={{
				type: 'spring',
				stiffness: 400,
				damping: 15,
				delay: 1.3
			}}
			let:motion
		>
			<ul
				use:motion
				class="bg-complementary-light font-raleway absolute top-0 right-0 bottom-0 left-0 mx-2 flex h-screen origin-top flex-col px-4 text-2xl font-medium transition-transform duration-400 ease-out md:relative md:h-fit md:scale-y-100 md:flex-row md:gap-10 md:bg-transparent gap-20"
				class:scale-y-0={windowContext.isMobile && !$mobileMenu}
				class:scale-y-100={windowContext.isMobile && $mobileMenu}
			>
				<!-- render each nav items	-->
				{#each navItems as navItem, i (navItem.href + '-' + $mobileMenu)}
					<Motion
						initial={{
							opacity: !windowContext.isMobile ? 0 : 1,
							y: !windowContext.isMobile ? 20 : 0,
							x: windowContext.isMobile ? '110%' : 0
						}}
						animate={{
							opacity: !windowContext.isMobile ? 1 : 1,
							y: windowContext.isMobile ? 0 : 0,
							x: windowContext.isMobile ? $mobileMenu ? 0 : '110%' : 0,
						}}
						transition={{
							duration: 1,
							ease: 'backInOut',
							opacity: {
								delay: 0.8 + i * 0.2
							},
							y: {
								delay: 0.8 + i * 0.2
							},
							x: {
								delay: 0.55 + i * 0.2
							}
						}}
						let:motion
					>
						<li
							use:motion
							class="motion-item nav-item md:mt-0"
							class:text-primary-dark={!$theme}
							class:text-primary={$theme}
							class:mt-40={i === 0}
						>
							<a href={navItem.href} class="relative z-10" draggable="false">
								{navItem.label}
							</a>
							{#if page.url.pathname === navItem.href}
								<span class="nav-item-decorator">
									<svg
										width="70"
										height="21"
										viewBox="0 0 70 21"
										xmlns="http://www.w3.org/2000/svg"
									>
										<path
											d="M2.6084 21H0.160156L16.7295 0H19.1787L2.6084 21ZM9.6084 21H7.16016L23.7295 0H26.1787L9.6084 21ZM16.6084 21H14.1602L30.7295 0H33.1787L16.6084 21ZM23.6084 21H21.1602L37.7295 0H40.1787L23.6084 21ZM30.6084 21H28.1602L44.7295 0H47.1787L30.6084 21ZM37.6084 21H35.1602L51.7295 0H54.1787L37.6084 21ZM44.6084 21H42.1602L58.7295 0H61.1787L44.6084 21ZM51.6084 21H49.1602L65.7295 0H68.1787L51.6084 21ZM70 6.5625L58.6084 21H56.1592L70 3.45898V6.5625ZM70 15.4346L65.6084 21H63.1592L70 12.3301V15.4346ZM0 15.4346V12.3301L9.72949 0H12.1787L0 15.4346ZM0 6.5625V3.45898L2.72949 0H5.17871L0 6.5625Z"
										/>
									</svg>
								</span>
							{/if}
						</li>
					</Motion>
				{/each}
			</ul>
		</Motion>

		<!-- mobile mode menu button	-->
		<Motion
			animate={{ letterSpacing: $mobileMenu ? '4px' : '0px' }}
			whileHover={{ letterSpacing: '4px' }}
			transition={{
				letterSpacing: { duration: 0.1, ease: 'circOut' }
			}}
			let:motion
		>
			<button
				class="toggle-text relative z-40 md:hidden"
				class:text-primary-dark={!$theme}
				class:text-primary={$theme}
				onclick={mobileMenu.toggle}
				use:motion
			>
				Menu
			</button>
		</Motion>
	</div>
</nav>

<style>
	.motion-item {
		opacity: 0;
		transform: translateY(20px);
	}
</style>
