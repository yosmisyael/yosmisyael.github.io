import Architecture from '../core/icons/Architecture.svelte';
import ML from '../core/icons/ML.svelte';
import Code from '../core/icons/Code.svelte';
import type { Component } from 'svelte';

const skills: Array<{
	header: string;
	content: string;
	id: number;
	icon: Component;
	skills: string[];
}> = [
	{
		id: 1,
		header: 'Software Engineering',
		content:
			'Fluent in JavaScript, TypeScript, PHP, and Go; consistently applying proven design patterns and best practices to build robust, maintainable applications.',
		skills: ['JS', 'TS', 'GO', 'PHP'],
		icon: Code
	},
	{
		id: 2,
		header: 'System Architecture',
		content:
			'Architect scalable and reliable systems by balancing technical trade-offs with business goals to ensure long-term resilience and maintainability.',
		icon: Architecture,
		skills: ['microservice', 'API design', 'DevOps', 'Cloud Architecture']
	},
	{
		id: 3,
		header: 'Cloud and Machine Learning',
		content:
			'Skilled in the complete machine learning lifecycle, with practical experience deploying applications on AWS and Google Cloud.',
		icon: ML,
		skills: ['AWS', 'Google Cloud Platform', 'TensorFlow']
	}
];

export default skills;
