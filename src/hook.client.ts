// src/app.ts or src/hooks.client.ts
import { dev } from '$app/environment';
import { inject } from '@vercel/analytics';

inject({ mode: dev ? 'development' : 'production' });

// Enable view transitions in SvelteKit
if (typeof document !== 'undefined') {
	// Check if View Transitions API is supported
	if ('startViewTransition' in document) {
		// Override SvelteKit's default navigation to use view transitions
		const originalPushState = history.pushState;
		const originalReplaceState = history.replaceState;

		history.pushState = function(data, title, url) {
			if (document.startViewTransition) {
				document.startViewTransition(() => {
					originalPushState.call(history, data, title, url);
				});
			} else {
				originalPushState.call(history, data, title, url);
			}
		};

		history.replaceState = function(data, title, url) {
			if (document.startViewTransition) {
				document.startViewTransition(() => {
					originalReplaceState.call(history, data, title, url);
				});
			} else {
				originalReplaceState.call(history, data, title, url);
			}
		};
	}
}