import { writable } from 'svelte/store';

function createMenuStore() {
	const { subscribe, update } = writable<boolean>(false);

	return {
		subscribe,
		toggle: () => update(isOpen => !isOpen),
	};
}

export const mobileMenu = createMenuStore();