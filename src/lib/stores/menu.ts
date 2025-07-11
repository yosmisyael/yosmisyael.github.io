import { writable } from 'svelte/store';

function createMenuStore() {
	const { subscribe, update, set } = writable<boolean>(false);

	return {
		subscribe,
		toggle: () => update(currentState => !currentState),
		close: () => set(false),
	};
}

export const mobileMenu = createMenuStore();