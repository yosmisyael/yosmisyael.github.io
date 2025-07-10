import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import { splash } from '$lib/stores/splash';

function createThemeStore() {
	let initialValue: boolean = false;

	// load saved preference on initialization
	if (browser) {
		const savedTheme: string | null = localStorage.getItem('theme');
		initialValue = savedTheme === 'dark';
		updateThemeClass(initialValue);
	}

	const { subscribe, update } = writable(initialValue);

	async function toggle() {
		splash.startOutro();

		await waitForSplashComplete();

		update(isDark => {
			const newValue: boolean = !isDark;
			if (browser) {
				localStorage.setItem('theme', newValue ? 'dark' : 'light');
				updateThemeClass(newValue);
			}
			return newValue;
		});

		splash.startIntro();
	}

	function updateThemeClass(isDark: boolean) {
		if (browser) {
			document.documentElement.classList.toggle('dark', isDark);
		}
	}

	function waitForSplashComplete(): Promise<void> {
		return new Promise((resolve) => {
			if (!splash.isActive) {
				resolve();
				return;
			}

			const checkInterval = setInterval(() => {
				if (!splash.isActive) {
					clearInterval(checkInterval);
					resolve();
				}
			}, 0.001);
		});
	}

	return {
		subscribe,
		toggle
	};
}

export const theme = createThemeStore();
