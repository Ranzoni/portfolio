const projects = [
    {
        category: 'professional',
        img: 'img/portfolio/bertoli-hub.png',
        name: 'Bertoli HUB',
        description: 'Produto digital proprietário para cursos de turismo privativo com gestão completa de conteúdo e usuários.',
        link: 'bertoli-hub.html#bertoli-hub'
    },
    {
        category: 'technical',
        img: 'img/portfolio/2fa.png',
        name: 'Autenticação em Dois Fatores',
        description: 'Projeto com fluxo de autenticacao em dois fatores via email e aplicativos autenticadores.',
        link: 'https://www.linkedin.com/posts/felipe-ranzoni-borges-5357a890_continuando-na-constru%C3%A7%C3%A3o-de-um-portf%C3%B3lio-activity-7346154642331832320-Bics?utm_source=share&utm_medium=member_desktop&rcm=ACoAABNWtvkBwGZzpHIYSU2Vog1ovikaj2vyhBA'
    },
    {
        category: 'technical',
        img: 'img/portfolio/messenger.jpg',
        name: 'The Messenger',
        description: 'Pacote publicado no NuGet para enfileiramento de mensagens com suporte de retorno para controllers.',
        link: 'https://www.linkedin.com/posts/felipe-ranzoni-borges-5357a890_mensageiro-100-activity-7231642791657766912-PrEr?utm_source=share&utm_medium=member_desktop&rcm=ACoAABNWtvkBwGZzpHIYSU2Vog1ovikaj2vyhBA'
    },
    {
        category: 'games',
        img: 'img/portfolio/guerreira-sem-nome.png',
        name: 'A Guerreira Sem Nome',
        description: 'Protótipo de plataforma 2D em que a personagem enfrenta inimigos para concluir a fase.',
        link: 'https://www.linkedin.com/posts/felipe-ranzoni-borges-5357a890_desenvolvi-mais-um-jogo-na-unity-mas-dessa-activity-7120078422516596736-Ho0L?utm_source=share&utm_medium=member_desktop&rcm=ACoAABNWtvkBwGZzpHIYSU2Vog1ovikaj2vyhBA'
    },
    {
        category: 'games',
        img: 'img/portfolio/fuga-espacial.png',
        name: 'Fuga Espacial',
        description: 'Plataforma 3D em que o jogador deve desviar de meteoros para acumular pontuacao e sobreviver.',
        link: 'https://www.linkedin.com/posts/felipe-ranzoni-borges-5357a890_unity-activity-7084673236986142720-hBMm?utm_source=share&utm_medium=member_desktop&rcm=ACoAABNWtvkBwGZzpHIYSU2Vog1ovikaj2vyhBA'
    }
]

function renderProjects(category, containerId) {
    const container = document.getElementById(containerId)

    projects
        .filter(function (project) {
            return project.category === category
        })
        .forEach(function (project) {
            const cardImg = document.createElement('img')
            cardImg.src = project.img
            cardImg.alt = project.name
            if (project.img.indexOf('bertoli-hub.png') !== -1) {
                cardImg.classList.add('card-image-wide')
            }

            const cardLabel = document.createElement('h4')
            cardLabel.textContent = project.name

            const cardDescription = document.createElement('p')
            cardDescription.textContent = project.description

            const cardLink = document.createElement('a')
            cardLink.textContent = 'Ver mais'
            cardLink.href = project.link
            if (/^https?:\/\//i.test(project.link)) {
                cardLink.target = '_blank'
                cardLink.rel = 'noopener noreferrer'
            }

            const cardDiv = document.createElement('div')
            cardDiv.classList.add('card')
            cardDiv.appendChild(cardImg)
            cardDiv.appendChild(cardLabel)
            cardDiv.appendChild(cardDescription)
            cardDiv.appendChild(cardLink)

            container.appendChild(cardDiv)
        })
}

renderProjects('professional', 'cards-professional')
renderProjects('technical', 'cards-technical')
renderProjects('games', 'cards-games')