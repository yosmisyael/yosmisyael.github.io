import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { splash } from '$lib/stores/splash';

function createThemeStore() {
	let initialValue: boolean = false;

	if (browser) {
		const savedTheme: string | null = localStorage.getItem('theme');
		initialValue = savedTheme === 'dark';
		updateThemeClass(initialValue);
	}

	const { subscribe, update } = writable(initialValue);

	async function toggle() {
		try {
			// cover the page
			await splash.startIntro();

			// add a bit of delay to look more natural
			await new Promise((resolve) => setTimeout(resolve, 400));

			// change theme
			update((isDark) => {
				const newValue = !isDark;
				if (browser) {
					localStorage.setItem('theme', newValue ? 'dark' : 'light');
					updateThemeClass(newValue);
				}
				return newValue;
			});

			// add a bit of delay to look more natural
			await new Promise((resolve) => setTimeout(resolve, 200));

			// reveal page with new theme
			await splash.startOutro();

			// hide bars
			setTimeout(() => {
				splash.hide();
			}, 500);
		} catch (error) {
			console.error('Theme toggle error:', error);
			splash.hide();
		}
	}

	function updateThemeClass(isDark: boolean) {
		if (browser) {
			document.documentElement.classList.toggle('dark', isDark);
		}
	}

	return {
		subscribe,
		toggle
	};
}

export const theme = createThemeStore();
