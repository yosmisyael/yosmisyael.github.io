<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import { page } from '$app/state';
	import '../app.css';
	import Seo from '$lib/components/Seo.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import { mobileMenu } from '$lib/stores/menu';
	import { theme } from '$lib/stores/theme';
	import { splash } from '$lib/stores/splash';
	import Splash from '$lib/components/Splash.svelte';
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import type Lenis from '@studio-freight/lenis';

	let { children } = $props();
	let isNavigating = $state<boolean>(false);
	let currentPath = $state<string>('');
	let isInitialLoad = $state<boolean>(true);
	let lenis: Lenis | null = null;
	let rafId: number | null = null;
	splash.startIntro();

	onMount(() => {
		// Initialize Lenis smooth scroll
		if (browser) {
			const initLenis = async () => {
				try {
					const { default: Lenis } = await import('@studio-freight/lenis');

					lenis = new Lenis({
						duration: 1.2,
						easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
						orientation: 'vertical',
						gestureOrientation: 'vertical',
						smoothWheel: true,
						touchMultiplier: 2
					});

					function raf(time: number) {
						lenis?.raf(time);
						rafId = requestAnimationFrame(raf);
					}

					rafId = requestAnimationFrame(raf);

					// Stop lenis during navigation transitions
					lenis.on('scroll', () => {
						if (isNavigating) {
							lenis?.stop();
						}
					});
				} catch (error) {
					console.error('Failed to initialize smooth scroll:', error);
				}
			};

			initLenis();
		}

		// capture all navigation click
		currentPath = page.url.pathname;

		const handleClick = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			const link = target.closest('a');
			if (!link || isNavigating) return;
			const href = link.getAttribute('href');

			if (
				!href ||
				href.startsWith('http') ||
				href.startsWith('#') ||
				href === currentPath ||
				href.startsWith('mailto:') ||
				href.startsWith('tel:')
			)
				return;

			e.preventDefault();
			e.stopPropagation();
			navigateWithAnimation(href);
		};

		document.addEventListener('click', handleClick, true);

		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	});

	onDestroy(() => {
		// clean up Lenis and animation frame
		if (lenis) {
			lenis.destroy();
			lenis = null;
		}
		if (rafId !== null) {
			cancelAnimationFrame(rafId);
			rafId = null;
		}
	});

	// navigation function
	async function navigateWithAnimation(href: string) {
		if (isNavigating) return;

		isNavigating = true;

		try {
			splash.startOutro();
			await waitForSplashComplete();
			if ($mobileMenu) mobileMenu.toggle();
			await goto(href, { replaceState: false });
			currentPath = href;
			splash.startIntro();
		} catch (error) {
			console.error('Navigation error:', error);
		} finally {
			isNavigating = false;
		}
	}

	// track splash completion
	function waitForSplashComplete(): Promise<void> {
		return new Promise((resolve) => {
			if (!$splash.isActive) {
				resolve();
				return;
			}

			const checkInterval = setInterval(() => {
				if (!$splash.isActive) {
					clearInterval(checkInterval);
					resolve();
				}
			}, 0.1);
		});
	}

	$effect(() => {
		if (isInitialLoad) {
			isInitialLoad = false;
			return;
		}

		if (page.url.pathname !== currentPath && !isNavigating) {
			currentPath = page.url.pathname;
			splash.startIntro();
		}

		if ($splash.isActive) document.body.style.overflow = 'hidden';
		else document.body.style.overflow = '';
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
