                    //// Selectors ////
const container = document.getElementById('container')
const pokemonCount = 150
const colors = {
    fire: '#fddfd',
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

const pokemonFetch = async () => {
    for(let i = 1; i <= pokemonCount; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json
    createCard(data)
}

const createCard = (pokemon) => {
    
}
