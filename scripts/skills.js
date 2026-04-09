const skillGroups = [
    {
        title: 'Backend e arquitetura',
        skills: [
            { img: 'img/skills/csharp.png', label: 'C#' },
            { img: 'img/skills/dotnet.png', label: '.NET' },
            { img: 'img/skills/aspnet.png', label: 'ASP.NET MVC' },
            { img: 'img/skills/xunit.png', label: 'XUnit' },
            { img: 'img/skills/rabbitmq.png', label: 'RabbitMQ' },
            { img: 'img/skills/redis.png', label: 'Redis' }
        ]
    },
    {
        title: 'Front-end e UX de produto',
        skills: [
            { img: 'img/skills/html.png', label: 'HTML5' },
            { img: 'img/skills/css.png', label: 'CSS3' },
            { img: 'img/skills/javascript.png', label: 'JavaScript' },
            { img: 'img/skills/typescript.png', label: 'TypeScript' },
            { img: 'img/skills/angular.png', label: 'Angular' },
            { img: 'img/skills/react.png', label: 'React' },
            { img: 'img/skills/jquery.png', label: 'jQuery' },
            { img: 'img/skills/bootstrap.png', label: 'Bootstrap' }
        ]
    },
    {
        title: 'Dados e persistencia',
        skills: [
            { img: 'img/skills/sqlserver.png', label: 'SQL Server' },
            { img: 'img/skills/oracle.png', label: 'Oracle' },
            { img: 'img/skills/mysql.png', label: 'MySQL' },
            { img: 'img/skills/postgres.png', label: 'PostgreSQL' },
            { img: 'img/skills/mongodb.png', label: 'MongoDB' },
            { img: 'img/skills/dbeaver.png', label: 'DBeaver' }
        ]
    },
    {
        title: 'Dev tools e ecossistema',
        skills: [
            { img: 'img/skills/docker.png', label: 'Docker' },
            { img: 'img/skills/git.png', label: 'Git' },
            { img: 'img/skills/python.png', label: 'Python' },
            { img: 'img/skills/unity.png', label: 'Unity' },
            { img: 'img/skills/delphi.png', label: 'Delphi' }
        ]
    }
]

const skillsContainer = document.getElementById('skills-container')

skillGroups.forEach(function (group) {
    const groupCard = document.createElement('article')
    groupCard.classList.add('skill-group')

    const groupTitle = document.createElement('h3')
    groupTitle.textContent = group.title

    const list = document.createElement('div')
    list.classList.add('skills-list')

    group.skills.forEach(function (skill) {
        const tag = document.createElement('div')
        tag.classList.add('skill-tag')

        const icon = document.createElement('img')
        icon.src = skill.img
        icon.alt = skill.label

        const label = document.createElement('span')
        label.textContent = skill.label

        tag.appendChild(icon)
        tag.appendChild(label)
        list.appendChild(tag)
    })

    groupCard.appendChild(groupTitle)
    groupCard.appendChild(list)
    skillsContainer.appendChild(groupCard)
})