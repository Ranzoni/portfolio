let skills = [
    { img: 'img/skills/csharp.png', label: 'C#' },
    { img: 'img/skills/dotnet.png', label: '.NET' },
    { img: 'img/skills/aspnet.png', label: 'ASP.NET MVC' },
    { img: 'img/skills/xunit.png', label: 'XUnit' },
    { img: 'img/skills/docker.png', label: 'Docker' },
    { img: 'img/skills/git.png', label: 'Git' },
    { img: 'img/skills/python.png', label: 'Python' },
    { img: 'img/skills/html.png', label: 'HTML5' },
    { img: 'img/skills/css.png', label: 'CSS3' },
    { img: 'img/skills/bootstrap.png', label: 'Bootstrap' },
    { img: 'img/skills/javascript.png', label: 'JavaScript' },
    { img: 'img/skills/typescript.png', label: 'TypeScript' },
    { img: 'img/skills/jquery.png', label: 'JQuery' },
    { img: 'img/skills/angular.png', label: 'Angular' },
    { img: 'img/skills/react.png', label: 'React' },
    { img: 'img/skills/unity.png', label: 'Unity' },
    { img: 'img/skills/dbeaver.png', label: 'DBeaver' },
    { img: 'img/skills/sqlserver.png', label: 'SQL Server' },
    { img: 'img/skills/oracle.png', label: 'Oracle' },
    { img: 'img/skills/mysql.png', label: 'MySQL' },
    { img: 'img/skills/redis.png', label: 'Redis' },
    { img: 'img/skills/postgres.png', label: 'Postgres' },
    { img: 'img/skills/mongodb.png', label: 'MongoDB' },
    { img: 'img/skills/rabbitmq.png', label: 'RabbitMQ' },
    { img: 'img/skills/delphi.png', label: 'Delphi' },
]

skills.forEach(function (skill) {
    const skillsContainer = document.getElementById('skills-container')
    
    const skillImg = document.createElement('img')
    skillImg.src = skill.img
    skillImg.alt = skill.label
    
    const skillImgContainer = document.createElement('div')
    skillImgContainer.classList.add('skill')
    skillImgContainer.appendChild(skillImg)

    const skillLabel = document.createElement('h3')
    skillLabel.textContent = skill.label

    const skillDiv = document.createElement('div')
    skillDiv.classList.add('skill-content')
    skillDiv.appendChild(skillImgContainer)
    skillDiv.appendChild(skillLabel)

    skillsContainer.appendChild(skillDiv)
})