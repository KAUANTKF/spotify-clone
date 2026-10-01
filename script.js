document.addEventListener('DOMContentLoaded',() =>{
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

const albumsData = [
    {
        name: 'The Razors Edge',
        artist: 'AC/DC',
        image: './img/thunderstruck.jpeg'
    },
    {
        name: 'Back in Black',
        artist: 'AC/DC',
        image: './img/back in black.png'
    },
    {
        name: 'Highway to Hell',
        artist: 'AC/DC',
        image: './img/highway-to-hell.jpeg'
    },
    {
        name: 'Slipknot',
        artist: 'Slipknot',
        image: './img/slipknot(vol3).jpeg'
    },
    {
        name: 'Iowa',
        artist: 'Slipknot',
        image: './img/iowa(vol2).jpeg'
    },
    {
        name: 'Super Trouper',
        artist: 'ABBA',
        image: './img/super trouper.jpeg'
    },
    {
        name: 'Arrival',
        artist: 'ABBA',
        image: './img/Abba-Arrival.jpeg'
    }
];

const artistGrid = document.querySelector('.artist-grid')
const albumsGrid = document.querySelector('.albums-grid')

artistsData.forEach(artist =>{
    const artistCard = document.createElement('div')
    artistCard.classList.add('artist-Card')

artistCard.innerHTML = `
<img src = "${artist.image}" alt ="imagem do  ${artist.name}">
<h3>${artist.name}</h3>
<p>artist</P>
`

artistGrid.appendChild(artistCard)
})

albumsData.forEach(album =>{
    const albumCard = document.createElement('div')
    albumCard.classList.add('album-Card')

albumCard.innerHTML = `
<img src = "${album.image}" alt ="imagem do  ${album.name}">
<p>${album.name}</P>
`

albumsGrid.appendChild(albumCard)
})
})


