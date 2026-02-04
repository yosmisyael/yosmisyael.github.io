<script lang="ts">
	import '../app.css';
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/state';
	import Seo from '$lib/components/Seo.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { mobileMenu } from '$lib/stores/menu';
	import { theme } from '$lib/stores/theme';
	import { splash } from '$lib/stores/splash';
	import Splash from '$lib/components/Splash.svelte';
	import { onNavigate } from '$app/navigation';
	import { browser } from '$app/environment';
	import type Lenis from 'lenis';
	import { setWindowContext } from '$lib/context/window.svelte';

	let { children } = $props();
	let isInitialLoad = $state<boolean>(true);
	let lenis: Lenis | null = null;
	let rafId: number | null = null;

	const windowContext = setWindowContext();

	// watch for route changes
	$effect(() => {
		if (isInitialLoad) {
			// reveal page on initial load
			isInitialLoad = false;

			(async () => {
				await splash.startOutro();
				setTimeout(() => splash.hide(), 500);
			})();
		}
	});

	onMount(() => {
		// initialize Lenis
		if (browser) {
			const initLenis = async () => {
				try {
					const { default: Lenis } = await import('lenis');

					lenis = new Lenis({
						lerp: 0.08,
						easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
						touchMultiplier: 1.5,
						wheelMultiplier: 1.1,
						orientation: 'vertical',
						gestureOrientation: 'vertical',
						smoothWheel: true
					});

					function raf(time: number) {
						lenis?.raf(time);
						rafId = requestAnimationFrame(raf);
					}

					rafId = requestAnimationFrame(raf);

				} catch (error) {
					console.error('Failed to apply smooth scroll:', error);
				}
			};

			initLenis();
		}

		return () => {};
	});

	onDestroy(() => {
		if (lenis) {
			lenis.destroy();
			lenis = null;
		}
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
		windowContext.destroy();
	});

	onNavigate((navigation) => {
		// check whether it need to play splash or not
		if (!navigation.to || navigation.to.route.id === navigation.from?.route.id) return;

		return new Promise((resolve) => {
			const runSplash = async () => {
				await splash.startIntro();
				await new Promise(r => setTimeout(r, 50));
				resolve();
				await navigation.complete;
				await splash.startOutro();
				setTimeout(() => splash.hide(), 500);
			}

			runSplash();
		});
	});

	function getScrollbarWidth(): number {
		return window.innerWidth - document.documentElement.clientWidth;
	}

	// watch for scroll locking
	$effect(() => {
		if (!browser) return;

		const shouldLockScroll = $splash.isVisible || ($mobileMenu && windowContext.isMobile);

		if (shouldLockScroll) {
			const scrollbarWidth = getScrollbarWidth();

			lenis?.stop();
			document.body.style.overflow = 'hidden';
			if (scrollbarWidth > 0) {
				document.body.style.paddingRight = `${scrollbarWidth}px`;
			}
		} else {
			lenis?.start();
			document.body.style.overflow = '';
			document.body.style.paddingRight = '';
		}
	});
</script>

<Seo
	seo={{
		title: page.data.title,
		description: page.data.description
	}}
/>

<svelte:head>
	<script>
			document.documentElement.classList.toggle(
				'dark',
				'theme' in localStorage && localStorage.theme === 'dark'
			);
	</script>
</svelte:head>

<main class="page-wrapper">
	<Splash />
	<Navbar toggleTheme={theme.toggle} {mobileMenu} />
	{@render children()}
	<Footer />
</main>