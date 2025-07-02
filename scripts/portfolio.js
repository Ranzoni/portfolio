const port = window.location.port ? `:${window.location.port}` : ''

let projects = [
    { img: 'img/portfolio/2fa.png', name: 'Autenticação em Dois Fatores', description: 'Um projeto onde é possível criar um contexto de usuários e autenticar em dois fatores por e-mail ou aplicativos de autenticação.', link: `https://www.linkedin.com/posts/felipe-ranzoni-borges-5357a890_continuando-na-constru%C3%A7%C3%A3o-de-um-portf%C3%B3lio-activity-7346154642331832320-Bics?utm_source=share&utm_medium=member_desktop&rcm=ACoAABNWtvkBwGZzpHIYSU2Vog1ovikaj2vyhBA` },
    { img: 'img/portfolio/messenger.jpg', name: 'The Messenger', description: 'Um pacote publicado no Nuget. Nele é possível enfileirar mensagens, também é possível configurar para ele ser retornado pelo controller.', link: `https://www.linkedin.com/posts/felipe-ranzoni-borges-5357a890_mensageiro-100-activity-7231642791657766912-PrEr?utm_source=share&utm_medium=member_desktop&rcm=ACoAABNWtvkBwGZzpHIYSU2Vog1ovikaj2vyhBA` },
    { img: 'img/portfolio/guerreira-sem-nome.png', name: 'A Guerreira Sem Nome', description: 'Um breve jogo protótipo de plataforma 2D onde a guerreira deve derrotar todos os inimigos e vencer o vilão ao final da fase.', link: `https://www.linkedin.com/posts/felipe-ranzoni-borges-5357a890_desenvolvi-mais-um-jogo-na-unity-mas-dessa-activity-7120078422516596736-Ho0L?utm_source=share&utm_medium=member_desktop&rcm=ACoAABNWtvkBwGZzpHIYSU2Vog1ovikaj2vyhBA` },
    { img: 'img/portfolio/fuga-espacial.png', name: 'Fuga Espacial', description: 'Neste jogo plataforma 3D você deve tentar avançar o máximo que puder sem colidir com os meteoros, com isso somando pontos conforme avança.', link: `https://www.linkedin.com/posts/felipe-ranzoni-borges-5357a890_unity-activity-7084673236986142720-hBMm?utm_source=share&utm_medium=member_desktop&rcm=ACoAABNWtvkBwGZzpHIYSU2Vog1ovikaj2vyhBA` },
]

projects.forEach(function (project) {
    const cards = document.getElementById('cards-container')

    const cardImg = document.createElement('img')
    cardImg.src = project.img
    cardImg.alt = project.label
    
    const cardLabel = document.createElement('h4')
    cardLabel.textContent = project.name

    const cardLink = document.createElement('a')
    cardLink.textContent = 'Ver mais'
    cardLink.href = project.link

    const cardDescription = document.createElement('p')
    cardDescription.textContent = project.description

    const breakLine1 = document.createElement('br')
    const breakLine2 = document.createElement('br')
    
    const cardDiv = document.createElement('div')
    cardDiv.classList.add('card')
    cardDiv.appendChild(cardImg)
    cardDiv.appendChild(cardLabel)
    cardDiv.appendChild(breakLine1)
    cardDiv.appendChild(cardDescription)
    cardDiv.appendChild(breakLine2)
    cardDiv.appendChild(cardLink)

    cards.appendChild(cardDiv)
})