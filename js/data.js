const projects = [
    {
        name: 'Suara Kesit',
        description: 'Application for a news portal for student journalism groups at SMKN 1 Plosoklaten, built with Laravel',
        imageUrl: '',
        githubUrl: 'https://github.com/yosmisyael/news-portal-kesit',
        techIcon: '<i class="devicon-laravel-original colored"></i>',
    },
    {
        name: 'Lucidnote Backend',
        description: 'RESTFUL API serving all Lucidnote app needs, built with NestJS.',
        imageUrl: '',
        githubUrl: 'https://github.com/yosmisyael/lucidnote-backend',
        techIcon: '<i class="devicon-nestjs-original colored"></i>',
    },{
        name: 'Lucidnote Frontend',
        description: 'Note-taking software with a to-do list and numerous additional features to increase productivity, built with React.',
        imageUrl: '',
        githubUrl: 'https://github.com/yosmisyael/lucidnote-frontend',
        techIcon: '<i class="devicon-react-original colored"></i>',
    }, {
        name: 'Coditory Course App',
        description: 'Course app using LMS concept provides free course on programming language, built with Laravel frameworks in backend and React in frontend.',
        imageUrl: '',
        githubUrl: 'https://github.com/yosmisyael/coditory-course-app',
        techIcon: '<i class="devicon-laravel-original colored"></i>',
    },
]

const skill =
    {
        language: [
            {
                name: 'JavaScript',
                proficiency: 'Intermediate',
            }, {
                name: 'TypeScript',
                proficiency: 'Intermediate',
            }, {
                name: 'PHP',
                proficiency: 'Intermediate',
            }, {
                name: 'GO',
                proficiency: 'Basic',
            }, {
                name: 'C/C++',
                proficiency: 'Basic',
            },
        ],
        framework: [
            {
                name: 'Express',
                proficiency: 'Intermediate',
            }, {
                name: 'Elysia',
                proficiency: 'Intermediate',
            }, {
                name: 'NestJS',
                proficiency: 'Intermediate',
            }, {
                name: 'NextJS',
                proficiency: 'Intermediate',
            }, {
                name: 'Laravel',
                proficiency: 'Intermediate',
            },
        ],
        database: [
            {
                name: 'MySQL',
                proficiency: 'Intermediate',
            }, {
                name: 'Postgresql',
                proficiency: 'Intermediate',
            }, {
                name: 'MongoDB',
                proficiency: 'Intermediate',
            }, {
                name: 'Redis',
                proficiency: 'Intermediate',
            },
        ],
        other: [
            {
                name: 'AWS',
                proficiency: 'Basic',
            }, {
                name: 'Docker',
                proficiency: 'Intermediate',
            }, {
                name: 'Kubernetes',
                proficiency: 'Basic',
            }, {
                name: 'RabbitMQ',
                proficiency: 'Basic',
            }, {
                name: 'IoT',
                proficiency: 'Intermediate',
            },
        ]
    }

document.addEventListener("alpine:init", function (event) {
    Alpine.store("projects", projects)
    Alpine.store("skill", skill)
})
