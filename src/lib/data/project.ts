import type { ProjectProp } from '$lib/types/project';

export const projects: ProjectProp[] = [
	{
		id: 1,
		name: 'Forum API',
		type: 'RESTful API',
		description:
			'Architected a robust Forum RESTful API by implementing Clean Architecture and Domain-Driven Design (DDD) principles within a strict TDD workflow to ensure high maintainability and maximum system reliability.',
		imageUrl: 'public/images/pattern.webp',
		repoUrl: 'https://github.com/yosmisyael/forum-api',
		icons: [
			'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
			'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
			'https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white',
			'https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white'
		],
		technologies: ['Node.js', 'Postgresql', 'Redis', 'Rabbitmq']
	},
	{
		id: 2,
		name: 'Open Music API',
		type: 'RESTful API',
		description:
			'Developed a scalable music collaboration API leveraging a microservices architecture to decouple core services from intensive background tasks.',
		imageUrl: 'public/images/pattern.webp',
		repoUrl: 'https://github.com/yosmisyael/open-music-api',
		icons: [
			'https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white',
			'https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white',
			'https://img.shields.io/badge/redis-%23DD0031.svg?style=for-the-badge&logo=redis&logoColor=white',
			'https://img.shields.io/badge/Rabbitmq-FF6600?style=for-the-badge&logo=rabbitmq&logoColor=white'
		],
		technologies: ['Node.js', 'Postgresql', 'Redis', 'Rabbitmq']
	},
	{
		id: 3,
		name: 'Suara Kesit',
		type: 'Fullstack',
		description:
			'Engineered a professional news portal utilizing Laravel and Livewire, featuring modular architecture and role-based access control (RBAC) to provide a scalable, secure platform for student journalism.',
		imageUrl: 'public/images/suara_kesit.png',
		repoUrl: 'https://github.com/yosmisyael/suara-kesit',
		icons: [
			'https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white',
			'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white'
		],
		technologies: ['Laravel', 'Postgresql', 'Redis', 'Livewire']
	},
	{
		id: 4,
		name: 'Notease Backend',
		type: 'RESTful API',
		description:
			'Engineered a high-performance RESTful API using NestJS, leveraging its modular architecture to provide a scalable and maintainable backend for a feature-rich productivity ecosystem.',
		imageUrl: 'public/images/pattern.webp',
		repoUrl: 'https://github.com/yosmisyael/notease-restful-api',
		icons: [
			'https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white'
		],
		technologies: ['NestJS', 'Postgresql']
	},
	{
		id: 5,
		name: 'Notease Frontend',
		type: 'Frontend App',
		description:
			'Developed a highly responsive React application featuring real-time state management and complex UI components to deliver a seamless Notion-inspired note-taking and task-management experience.',
		imageUrl: 'public/images/lucidnote.png',
		repoUrl: 'https://github.com/yosmisyael/notease',
		icons: [
			'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
		],
		technologies: ['NextJs']
	},
	{
		id: 6,
		name: 'Teamable',
		type: 'Fullstack',
		description:
			'Engineered an open-source Human Capital Management (HCM) platform using Laravel and Livewire, architecting a sophisticated multi-tenant database schema with organization-scoped data isolation to manage distinct user and HR dashboard interfaces.',
		imageUrl: 'public/images/lucidnote.png',
		repoUrl: 'https://github.com/yosmisyael/Teamable',
		icons: [
			'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
		],
		technologies: ['Laravel', 'Livewire', 'Postgresql']
	}
];
