export type SplashProps = {
	mode: 'intro' | 'outro';
	isStarted: boolean;
	onComplete: () => void;
}