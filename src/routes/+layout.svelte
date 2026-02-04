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
	import { goto } from '$app/navigation';
	import { browser } from '$app/environment';
	import type Lenis from 'lenis';
	import { setWindowContext } from '$lib/context/window.svelte';

	let { children } = $props();
	let currentPath = $state<string>('');
	let isInitialLoad = $state<boolean>(true);
	let lenis: Lenis | null = null;
	let rafId: number | null = null;
	let isManualNavigation = $state(false);

	const windowContext = setWindowContext();

	// watch for route changes
	$effect(() => {
		const newPath = page.url.pathname;

		if (isInitialLoad) {
			// reveal page on initial load
			isInitialLoad = false;
			currentPath = newPath;

			(async () => {
				await splash.startOutro();
				setTimeout(() => splash.hide(), 500);
			})();

		} else if (newPath !== currentPath && !isManualNavigation) {
			// browser back/forward button
			currentPath = newPath;

			(async () => {
				await splash.startIntro();
				// add a bit delay to wait for new page to paint
				await new Promise(resolve => setTimeout(resolve, 100));
				await splash.startOutro();
				setTimeout(() => splash.hide(), 500);
			})();

		} else if (newPath !== currentPath && isManualNavigation) {
			// manual navigation
			currentPath = newPath;
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

		function handleNavigationClick(e: MouseEvent) {
			const target = e.target as HTMLElement;
			const link = target.closest('a');
			if (!link) return;
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
		}

		document.addEventListener('click', handleNavigationClick, true);

		return () => {
			document.removeEventListener('click', handleNavigationClick, true);
		};
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

	async function navigateWithAnimation(href: string) {
		isManualNavigation = true;

		try {
			// close menu if in mobile view
			if ($mobileMenu) mobileMenu.close();

			// cover current page
			await splash.startIntro();

			// eslint-disable-next-line svelte/no-navigation-without-resolve
			await goto(href); // perform navigation

			// add a bit delay to wait for new page to paint
			await new Promise(resolve => setTimeout(resolve, 100));

			// reveal destination page
			await splash.startOutro();

			// hide bars after outro
			setTimeout(() => {
				splash.hide();
				isManualNavigation = false;
			}, 500);

		} catch (error) {
			console.error('Navigation error:', error);
			splash.hide();
			isManualNavigation = false;
		}
	}

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