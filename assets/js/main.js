
const pokemonList = document.getElementById('pokemon')

function convertPokemonToHtml (pokemon){
    return ` 
        <li class="pokemon ${pokemon.type}">
        <i class="fa-sharp fa-solid fa-arrow-left"  style="color: #fff; padding: 1rem;"></i>
        <i class="fa-regular fa-heart" style="color: #fff; text-align: right; padding: 1rem;"></i>
        <span class="name">${pokemon.name}</span>
        <span class="number">#00${pokemon.id}</span>

        <div class="detail">
        <ol class="types">
            ${pokemon.types.map((type) => `<li class="${type}">${type}</li>`).join('')}
        </ol>
        </div>
        <ul>
        <i></i>
        </ul>
        <div class="avatarPokemon" id="avatarPokemon">
        <img id="img" src="${pokemon.photo}"
        alt="${pokemon.name}">
        </div> 
        <div class="detailsInformation">
        <ul class="headerDetail">
            <li>About</li>
            <li>Base Stats</li>
            <li>Evolution</li>
            <li>Moves</li>
        </ul>
        <ul id="stats" class="statsDetail">
            <li>HP </li>
            <li>${pokemon.hp}</li>
            <li class="barraColum"><div class="barra" style="width:${pokemon.hp}%;"></div></li>

            <li>Attack</li>
            <li>${pokemon.attack}</li>
            <li class="barraColum"><div class="barra" style="width:${pokemon.attack}%;"></div></li>

            <li>Defense</li>
            <li>${pokemon.defense}</li>
            <li class="barraColum"><div class="barra" style="width:${pokemon.defense}%;"></div></li>

            <li>Sp.Atk</li>
            <li>${pokemon.spAtk} </li>
            <li class="barraColum"><div class="barra" style="width:${pokemon.spAtk}%";"></div></li>

            <li>Sp.Def</li>
            <li>${pokemon.spDef}</li>
            <li class="barraColum"><div class="barra" style="width:${pokemon.spDef}%";"></div></li>

            <li>Speed</li>
            <li>${pokemon.speed}</li>
            <li class="barraColum"><div class="barra" style="width:${pokemon.speed}%";></div></li>

            <li>Total </li>
            <li>${pokemon.total}</li>
            <li class="barraColum"><div class="barra" style="width:${pokemon.porcentagem}%";></div></li>
        </ul>
    <footer id="" class="detailFooter">
        <h4>Type defenses</h4>
        <p>The effectiveness of each type on ${pokemon.name}</p>
    </footer>
    </div>
</ol>
        </li>
        <!--..... Pokemons detail here ......-->  
        
    `
}

pokeApi.getPokemons().then((pokemons = []) => {
    for (let i = 0; i < pokemons.length; i++) {
        const newHTML = pokemons.map(convertPokemonToHtml).join('')
        pokemonList.innerHTML = newHTML
   }
})