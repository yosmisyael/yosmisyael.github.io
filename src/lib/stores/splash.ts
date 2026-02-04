import { writable } from 'svelte/store';

type SplashStore = {
	isVisible: boolean;
	currentAnimation: 'intro' | 'outro' | null;
};

function createSplashStore() {
	const { subscribe, set, update } = writable<SplashStore>({
		isVisible: false,
		currentAnimation: null
	});

	let animationResolve: (() => void) | null = null;

	return {
		subscribe,

		startIntro: () => {
			return new Promise<void>((resolve) => {
				animationResolve = resolve;
				set({ isVisible: true, currentAnimation: 'intro' });
			});
		},

		startOutro: (): Promise<void> => {
			return new Promise<void>((resolve): void => {
				animationResolve = resolve;
				set({ isVisible: true, currentAnimation: 'outro' });
			});
		},

		complete: (): void => {
			if (animationResolve) {
				animationResolve();
				animationResolve = null;
			}

			// only clear animation mode field
			update((splashStore: SplashStore) => ({ ...splashStore, currentAnimation: null }));
		},

		// hide splash component
		hide: () => {
			set({ isVisible: false, currentAnimation: null });
		}
	};
}

export const splash = createSplashStore();
