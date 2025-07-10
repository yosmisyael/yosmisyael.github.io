<script lang="ts">
	import { onMount } from 'svelte';
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

	let { children } = $props();
	let isNavigating: boolean = $state(false);
	let currentPath: string = $state('');
	let isInitialLoad: boolean = $state(true);

	splash.startIntro();

	onMount(() => {
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
			) return;

			e.preventDefault();
			e.stopPropagation();
			navigateWithAnimation(href);
		};

		document.addEventListener('click', handleClick, true);

		return () => {
			document.removeEventListener('click', handleClick, true);
		};
	});

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
			"dark",
			localStorage.theme === "dark" ||
			(!("theme" in localStorage) && window.matchMedia("(prefers-color-scheme: dark)").matches)
		);
	</script>
</svelte:head>

<main class="page-wrapper">
	<Splash />
	<Navbar toggleTheme={theme.toggle} {mobileMenu} />
	{@render children()}
	<Footer />
</main>
