import { browser } from '$app/environment';
import { getContext, setContext } from 'svelte';

const WINDOW_KEY = Symbol('window');

export class WindowContext {
	width = $state<number>(browser ? window.innerWidth : 1024);

	isMobile = $derived<boolean>(this.width < 768);

	private cleanup?: () => void;

	constructor() {
		if (browser) {
			this.updateDimensions();
			this.setupEventListeners();
		}
	}

	private updateDimensions() {
		this.width = window.innerWidth;
	}

	private setupEventListeners() {
		const handleResize = () => this.updateDimensions();

		window.addEventListener('resize', handleResize);

		this.cleanup = () => {
			window.removeEventListener('resize', handleResize);
		};
	}

	destroy() {
		this.cleanup?.();
	}
}

export function setWindowContext() {
	const windowContext = new WindowContext();
	setContext(WINDOW_KEY, windowContext);
	return windowContext;
}

export function getWindowContext(): WindowContext {
	return getContext(WINDOW_KEY);
}
