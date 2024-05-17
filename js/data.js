const projects = [
    {
        name: 'Suara Kesit',
        description: 'News portal application for school journalist organization in SMKN 1 Plosoklaten, built with laravel frameworks.',
        imageUrl: '',
        githubUrl: 'https://github.com/yosmisyael/news-portal-kesit',
        techIcon: '<i class="devicon-laravel-original colored"></i>',
    },
    {
        name: 'Lucidnote Backend',
        description: 'Note taking application along with todo list and many other production boost features, built with NestJS.',
        imageUrl: '',
        githubUrl: 'https://github.com/yosmisyael/lucidnote-backend',
        techIcon: '<i class="devicon-nestjs-original colored"></i>',
    },{
        name: 'Lucidnote Backend',
        description: 'Note taking application along with todo list and many other production boost features, built with React.',
        imageUrl: '',
        githubUrl: 'https://github.com/yosmisyael/lucidnote-frontend',
        techIcon: '<i class="devicon-react-original colored"></i>',
    }, {
        name: 'Coditory Course App',
        description: 'Course app with LMS concept providing free course on programming language, built with laravel frameworks in backend, along with react js in frontend.',
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
