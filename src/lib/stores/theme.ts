import { browser } from '$app/environment';
import { writable } from 'svelte/store';

function createThemeStore() {
	let initialValue: boolean = false;

	// load saved preference on initialization
	if (browser) {
		const savedTheme: string | null = localStorage.getItem('theme');
		initialValue = savedTheme === 'dark';
		updateThemeClass(initialValue);
	}

	const { subscribe, update } = writable(initialValue);

	function toggle() {
		update(isDark => {
			const newValue = !isDark;
			if (browser) {
				localStorage.setItem('theme', newValue ? 'light' : 'dark');
				updateThemeClass(newValue);
			}
			return newValue;
		});
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
