const pokeApi = {}

function convertPokeApiDetailToPokemon(pokeDetail){
    const pokemon = new Pokemon()
    pokemon.name = pokeDetail.name
    pokemon.id = pokeDetail.id

    const types = pokeDetail.types.map((typeSlot) => typeSlot.type.name)
    const [type] = types

    pokemon.types = types
    pokemon.type = type

    const stats = pokeDetail.stats.map((statsSlot) =>statsSlot.base_stat)

    pokemon.hp = stats[0]
    pokemon.attack = stats[1]
    pokemon.defense = stats[2]
    pokemon.spAtk = stats[3]
    pokemon.spDef = stats[4]
    pokemon.speed = stats[5]
    pokemon.total = stats[0] + stats[1] + stats[2] + stats[3] + stats[4] + stats[5]
    pokemon.porcentagem = (stats[0] + stats[1] + stats[2] + stats[3] + stats[4] + stats[5]) / 10

    pokemon.photo = pokeDetail.sprites.other.dream_world.front_default

    return pokemon

}

pokeApi.getPokemonDetail = (pokemon) => {
    return fetch(pokemon.url)
    .then((response) => response.json())
    .then(convertPokeApiDetailToPokemon)
}

pokeApi.getPokemons = (offset = 0,limit = 1 ) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
  
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => jsonBody.results)
        .then((pokemons) => pokemons.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails)=> pokemonsDetails)
}
