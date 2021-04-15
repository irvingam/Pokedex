                    //// Selectors ////
const container = document.getElementById('container')
const pokemonCount = 150
const colors = {
    fire: '#fddfdf',
    grass: '#defde0',
    electric: '#fcf7de',
    water: '#def3fd',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaedal',
    flying: '#f5f5f5',
    fighting: '#e6e0d4',
    normal: '#f5f5f5'
}
                    //// Events ////


                    //// Functions ////

// change background based on type
const mainTypes = Object.keys(colors)

// fetches number of pokemon from API
const pokemonFetch = async () => {
    for(let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i)
    }
}

// API fetch function and data collection
const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createCard(data)
}

// generates pokemon cards based on API data
const createCard = (pokemon) => {
    const pokemonElement = document.createElement('div')
    pokemonElement.classList.add('container_pokemon')

    const name = pokemon.name[0].toUpperCase() + pokemon.name.slice(1)
    const id = pokemon.id.toString().padStart(3, '0')
    const pokemonTypes = pokemon.types.map(type => type.type.name)
    const type = mainTypes.find(type => pokemonTypes.indexOf(type) > -1)
    const color = colors[type]

    pokemonElement.style.backgroundColor = color

    const pokemonInnerHTML = `
    <div class="img-container">
        <img src="https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png" alt="">
    </div>
    <div class="info-container">
        <span class="index">${id}</span>
        <h3 class="name">${name}</h3>
        <span class="type">${type}</span>
    </div>`

    pokemonElement.innerHTML = pokemonInnerHTML

    container.appendChild(pokemonElement)
}

// fetch funcion call
pokemonFetch()