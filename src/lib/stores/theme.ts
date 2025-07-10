import { browser } from '$app/environment';

function createThemeStore() {
	let isDark: boolean = false;

	// Load saved preference on initialization
	if (browser) {
		const savedTheme: string | null = localStorage.getItem('theme');
		isDark = savedTheme === 'dark';
		updateThemeClass();
	}

	function toggle() {
		isDark = !isDark;
		if (browser) {
			localStorage.setItem('theme', isDark ? 'dark' : 'light');
			updateThemeClass();
		}
	}

	function updateThemeClass() {
		if (browser) {
			document.documentElement.classList.toggle('dark', isDark);
		}
	}

	return {
		toggle
	};
}

export const theme: { toggle: () => void } = createThemeStore();
