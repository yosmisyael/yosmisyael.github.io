import { writable } from 'svelte/store';

type SplashStore = {
	isActive: boolean;
	mode: 'intro' | 'outro';
}

function createSplashStore() {
	const { subscribe, set, update } = writable<SplashStore>({
		isActive: false,
		mode: 'intro',
	});

	let currentState: SplashStore = { isActive: false, mode: 'intro' as const };

	return {
		subscribe,
		set,
		update,
		get isActive() { return currentState.isActive; },
		get mode() { return currentState.mode; },
		startIntro: () => {
			currentState = { isActive: true, mode: 'intro' };
			set(currentState);
		},
		startOutro: () => {
			currentState = { isActive: true, mode: 'outro' };
			set(currentState);
		},
		stop: () => {
			currentState = { isActive: false, mode: 'intro' };
			set(currentState);
		},
	};
}

export const splash = createSplashStore();