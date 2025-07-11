import type { ProjectProp } from '$lib/types/project';

export const projects: ProjectProp[] = [
	{
		id: 1,
		name: 'Open Music API',
		type: 'RESTful API',
		description:
			'Architected and developed a robust, scalable music management API from the ground up.',
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
		id: 2,
		name: 'Suara Kesit',
		type: 'Fullstack',
		description:
			'Application for a news portal for student journalism groups at SMKN 1 Plosoklaten, built with Laravel',
		imageUrl: 'public/images/suara_kesit.png',
		repoUrl: 'https://github.com/yosmisyael/news-portal-kesit',
		icons: [
			'https://img.shields.io/badge/laravel-%23FF2D20.svg?style=for-the-badge&logo=laravel&logoColor=white',
			'https://img.shields.io/badge/mysql-4479A1.svg?style=for-the-badge&logo=mysql&logoColor=white'
		],
		technologies: ['Laravel', 'MySQL', 'Redis']
	},
	{
		id: 3,
		name: 'Lucidnote Backend',
		type: 'RESTful API',
		description: 'RESTFUL API serving all Lucidnote app needs, built with NestJS.',
		imageUrl: 'public/images/pattern.webp',
		repoUrl: 'https://github.com/yosmisyael/lucidnote-backend',
		icons: [
			'https://img.shields.io/badge/nestjs-%23E0234E.svg?style=for-the-badge&logo=nestjs&logoColor=white'
		],
		technologies: ['NestJS', 'Postgresql']
	},
	{
		id: 4,
		name: 'Lucidnote Frontend',
		type: 'Frontend App',
		description:
			'Note-taking software with a to-do list and numerous additional features to increase productivity, built with React.',
		imageUrl: 'public/images/lucidnote.png',
		repoUrl: 'https://github.com/yosmisyael/lucidnote-frontend',
		icons: [
			'https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB'
		],
		technologies: ['React']
	}
];
