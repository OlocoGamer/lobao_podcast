const PODCAST_DATA = {
  podcast: {
    name: "Lobão Podcast",
    tagline: "Jogos zerados. Opiniões sinceras. Três amigos.",
    description: "Um clube do livro, só que com videogames. A cada episódio, nós três zeramos um jogo e colocamos nossas opiniões, momentos favoritos e notas na mesa."
  },
  hosts: [
    { id: "host1", name: "Integrante 1", role: "Apresentador", initials: "I1" },
    { id: "host2", name: "Integrante 2", role: "Apresentador", initials: "I2" },
    { id: "host3", name: "Integrante 3", role: "Apresentador", initials: "I3" }
  ],
  upcoming: [
    { id: "up1", title: "Hollow Knight", platform: "PC / Console", genre: "Metroidvania", status: "Na fila", note: "Próximo jogo do clube", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/367520/library_600x900_2x.jpg" },
    { id: "up2", title: "Resident Evil 2", platform: "PC / Console", genre: "Survival Horror", status: "Depois", note: "Escolhido para um episódio futuro", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/883710/library_600x900_2x.jpg" },
    { id: "up3", title: "Hades", platform: "PC / Console", genre: "Roguelike", status: "Depois", note: "Na lista de desejos do podcast", cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/library_600x900_2x.jpg" }
  ],
  completed: [
    {
      id: "game1",
      title: "The Last of Us Part I",
      year: 2022,
      platform: "PC / PS5",
      genre: "Ação / Aventura",
      episode: "#001",
      coverClass: "cover-one",
      cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1888930/library_600x900_2x.jpg",
      synopsis: "Um exemplo de como ficará a página de um jogo já zerado, com as três opiniões separadas.",
      average: 9.0,
      hosts: [
        { hostId: "host1", score: 9.5, review: "Uma narrativa muito bem conduzida e com personagens que sustentam a experiência inteira." },
        { hostId: "host2", score: 9.0, review: "O combate é simples, mas funciona. O que mais me ganhou foi a relação entre os personagens." },
        { hostId: "host3", score: 8.5, review: "É um daqueles jogos que terminam e continuam na cabeça. Excelente material para conversar depois." }
      ]
    },
    {
      id: "game2",
      title: "DOOM Eternal",
      year: 2020,
      platform: "PC / Console",
      genre: "FPS",
      episode: "#002",
      coverClass: "cover-three",
      cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/782330/library_600x900_2x.jpg",
      synopsis: "Segundo exemplo, mostrando a estrutura de avaliações individuais e média.",
      average: 8.3,
      hosts: [
        { hostId: "host1", score: 8.0, review: "Rápido, agressivo e extremamente divertido. É difícil jogar devagar depois que você entra no ritmo." },
        { hostId: "host2", score: 8.5, review: "A variedade de inimigos e armas mantém o combate sempre interessante." },
        { hostId: "host3", score: 8.5, review: "Um ótimo jogo para desligar o cérebro e aproveitar a ação, mas com profundidade suficiente para discutir." }
      ]
    },
    {
      id: "game3",
      title: "Hades",
      year: 2020,
      platform: "PC / Console",
      genre: "Roguelike / Ação",
      episode: "#003",
      coverClass: "cover-two",
      cover: "https://cdn.cloudflare.steamstatic.com/steam/apps/1145360/library_600x900_2x.jpg",
      synopsis: "Terceiro exemplo. As capas são campos editáveis no cadastro de cada jogo.",
      average: 8.7,
      hosts: [
        { hostId: "host1", score: 9.0, review: "Combate excelente e uma progressão que sempre dá vontade de fazer mais uma tentativa." },
        { hostId: "host2", score: 8.5, review: "A arte e os personagens fazem cada tentativa parecer parte de uma história maior." },
        { hostId: "host3", score: 8.5, review: "Um dos melhores exemplos de como transformar repetição em progressão interessante." }
      ]
    }
  ]
};