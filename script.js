document.addEventListener('DOMContentLoaded', () => {
    const artistsData = [
        {
            name: 'AC/DC',
            image: './img/banda.jpeg'
        },
        {
            name: 'Slipknot',
            image: './img/slipknot.jpeg'
        },
        {
            name: 'ABBA',
            image: './img/ABBA.png'
        }
    ];

    // Cada álbum agora tem a lista "musicas".
    // Os arquivos .mp3 ficam na pasta ./audio (crie ela ao lado de ./img)
    const albumsData = [
        {
            name: 'The Razors Edge',
            artist: 'AC/DC',
            image: './img/thunderstruck.jpeg',
            musicas: [
                { nome: 'Thunderstruck', arquivo: './audio/AC_DC - Thunderstruck (Official Video) - acdcVEVO.mp3' },
        
                { nome: 'Moneytalks', arquivo: './audio/AC_DC - Moneytalks (Official HD Video) - acdcVEVO.mp3' }
               
            ]
        },
        {
            name: 'Back in Black',
            artist: 'AC/DC',
            image: './img/back in black.png',
            musicas: [
                { nome: "Hells Bells", arquivo: './audio/AC_DC - Moneytalks (Official HD Video) - acdcVEVO.mp3' },
                { nome: 'Shoot to Thrill', arquivo: './audio/AC_DC - Shoot To Thrill (Iron Man 2 Version) - acdcVEVO.mp3' },
                { nome: 'Back in Black', arquivo: './audio/AC_DC - Back In Black (Official 4K Video) - acdcVEVO.mp3' },
                { nome: 'You Shook Me All Night Long', arquivo: './audio/AC_DC - You Shook Me All Night Long (Official 4K Video) - acdcVEVO.mp3' }
            ]
        },
        {
            name: 'Highway to Hell',
            artist: 'AC/DC',
            image: './img/highway-to-hell.jpeg',
            musicas: [
                { nome: 'Highway to Hell', arquivo: './audio/AC_DC - Highway to Hell (Official Video) - acdcVEVO.mp3' }
                
            ]
        },
        {
            name: 'Slipknot(Vol-1)',
            artist: 'Slipknot',
            image: './img/slipknot(vol1).jpeg',
            musicas: [
                { nome: 'Wait and Bleed', arquivo: './audio/Slipknot - Wait and Bleed [OFFICIAL VIDEO] [HD] - Slipknot.mp3' },
                { nome: 'Spit It Out', arquivo: './audio/Slipknot - Spit It Out [OFFICIAL VIDEO] [HD] - Slipknot.mp3' },
                { nome: 'Surfacing', arquivo: './audio/Slipknot - Surfacing (Audio) - Slipknot.mp3' },
                { nome: 'Eyeless', arquivo: './audio/Slipknot - Eyeless (Audio) - Slipknot.mp3' }
            ]
        },
        {
            name: 'Iowa(Vol-2)',
            artist: 'Slipknot',
            image: './img/iowa(vol2).jpeg',
            musicas: [
                { nome: 'My Plague', arquivo: './audio/myplague.mp3' },
                { nome: 'The Heretic Anthem', arquivo: './audio/theheretic.mp3' },
                { nome: 'Left Behind', arquivo: './audio/leftbehind.mp3' }
            ]
        },
        {
            name: 'Super Trouper',
            artist: 'ABBA',
            image: './img/super trouper.jpeg',
            musicas: [
              
                { nome: 'The Winner Takes It All', arquivo: './audio/thewinner.mp3' },
                { nome: 'Lay All Your Love on Me', arquivo: './audio/layall.mp3' }
               
            ]
        },
        {
            name: 'Arrival',
            artist: 'ABBA',
            image: './img/Abba-Arrival.jpeg',
            musicas: [
                { nome: 'Dancing Queen', arquivo: './audio/dancingqueen.mp3' }
               
            ]
        },
        {
            name: 'Voulez-Voz',
            artist: 'ABBA',
            image: './img/Voulez-Vous.jpeg',
            musicas: [
                { nome: 'AngelEyes', arquivo: './audio/angeleyes.mp3' },
                 { nome: 'Gimme! Gimme! Gimme! (A Man After Midnight)', arquivo: './audio/gimme.mp3' }
               
            ]
        },
        {
            name: 'Slipknot(Vol-3)',
            artist: 'Slipknot',
            image: './img/slipknot(vol3).jpeg',
            musicas: [
                { nome: 'Duality', arquivo: './audio/duality.mp3' },
                { nome: 'Before i Forget', arquivo: './audio/before.mp3' },
                { nome: 'Vermillion pt 2', arquivo: './audio/vermillionpt2.mp3' },
                
            ]
        }
    ];

    // Elementos da página
    const artistGrid = document.querySelector('.artist-grid');
    const albumsGrid = document.querySelector('.albums-grid');

    // Elementos do player
    const player = document.getElementById('player');
    const playerCapa = document.getElementById('player-capa');
    const playerAlbum = document.getElementById('player-album');
    const playerLista = document.getElementById('player-lista');
    const playerTocando = document.getElementById('player-tocando');
    const playerAudio = document.getElementById('player-audio');
    const playerFechar = document.getElementById('player-fechar');

    // Guarda o álbum aberto e qual música está tocando
    let albumAtual = null;
    let indiceAtual = -1;

    // Toca a música de posição "indice" do álbum aberto
    function tocarMusica(indice) {
        const musica = albumAtual.musicas[indice];
        indiceAtual = indice;

        playerAudio.src = musica.arquivo;
        playerAudio.play();
        playerTocando.textContent = musica.nome;

        // Destaca a música que está tocando na lista
        playerLista.querySelectorAll('li').forEach((li, i) => {
            li.classList.toggle('tocando', i === indice);
        });
    }

    // Abre o player com as músicas do álbum clicado
    function abrirPlayer(album) {
        albumAtual = album;
        indiceAtual = -1;

        playerCapa.src = album.image;
        playerAlbum.textContent = album.name + ' - ' + album.artist;
        playerTocando.textContent = 'Escolha uma música';
        playerLista.innerHTML = '';
        playerAudio.pause();
        playerAudio.removeAttribute('src');

        album.musicas.forEach((musica, indice) => {
            const li = document.createElement('li');
            li.textContent = (indice + 1) + '. ' + musica.nome;
            li.addEventListener('click', () => tocarMusica(indice));
            playerLista.appendChild(li);
        });

        player.classList.add('ativo');
    }

    // Quando a música termina, toca a próxima do álbum
    playerAudio.addEventListener('ended', () => {
        if (albumAtual && indiceAtual < albumAtual.musicas.length - 1) {
            tocarMusica(indiceAtual + 1);
        }
    });

    // Botão de fechar o player
    playerFechar.addEventListener('click', () => {
        playerAudio.pause();
        player.classList.remove('ativo');
    });

    // Cards de artistas
    artistsData.forEach(artist => {
        const artistCard = document.createElement('div');
        artistCard.classList.add('artist-Card');

        artistCard.innerHTML = `
            <img src="${artist.image}" alt="imagem do ${artist.name}">
            <h3>${artist.name}</h3>
            <p>artist</p>
        `;

        artistGrid.appendChild(artistCard);
    });

    // Cards de álbuns (agora clicáveis)
    albumsData.forEach(album => {
        const albumCard = document.createElement('div');
        albumCard.classList.add('album-Card');

        albumCard.innerHTML = `
            <img src="${album.image}" alt="imagem do ${album.name}">
            <p>${album.name}</p>
        `;

        albumCard.addEventListener('click', () => abrirPlayer(album));

        albumsGrid.appendChild(albumCard);
    });
});
