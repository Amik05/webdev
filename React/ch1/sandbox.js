// fetch("https://pokeapi.co/api/v2/pokemon/charizard")
//     .then(response => {
//         if (!response.ok) {
//             throw new Error("Could not fetch data");
//         }

//         return response.json();
//     })
//     .then(data => console.log(data.weight))
//     .catch(error => console.error(error));


async function fetchPokemonData() {
    try {
        const pokemonName = document.querySelector("#pokemon-name").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
        if (!response.ok) {
            throw new Error("Could not fetch data");
        }

        const data = await response.json();
        return data.sprites.front_shiny;
    }
    catch(error) {
        console.error(error);
    }
}

async function changePokemonImage() {
    let img = document.querySelector("#pokemon");
    img.src = await fetchPokemonData("charizard");
    img.style.display = "block";
}




async function fetchData() {
    try {
        const pokemonName = document.querySelector("#pokemon-name").value.toLowerCase();
        const [res1, res2] = await Promise.all([
            fetch("https://api.giphy.com/v1/gifs/random?api_key=Sc0EqPPJ6loA1NJX6ASSiuAGHLefak9F"),
            fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`)
        ]);

        const gif = await res1.json();
        const pokemon = await res2.json();

        let img = document.querySelector("#gif");
        img.src = gif.data.images.original.url;

        let pokemonSprite = document.querySelector("#pokemon");
        pokemonSprite.src = pokemon.sprites.front_shiny;
        pokemonSprite.style.display = "block";

    }

    catch(error) {
        console.error(error);
    }
}

async function changeImage() {
    let img = document.querySelector("#gif");
    img.src = await fetchGif();
}