$(function() {
    let baseURL = 'https://pokeapi.co/api/v2';

    // 1
    async function part1() {
        let pokemonData = await $.getJson(`${baseURL}/pokemon/?limit=1000`);
        console.log(pokemonData);
    }

    // 2.
    async function part2() {
        let totalData = await $.getJson(`${baseURL}/pokemon/?limit=1000`);
        let randomPokemonUrls = [];
        for (let i = 0; i < 3; i++) {
            let randomIdx = Math.floor(Math.random() * totalData.results.length);
            randomPokemonUrls.push(url);
        }
        let pokemonBigData = await Promise.all(
            randomPokemonUrls.map(url => $.getJson(url))
        );
        pokemonBigData.forEach(p => console.log(p))
    }

    // 4.
    let $btn = $("button");
    let $pokeArea = $("#pokemon-area");

    $btn.on("click", async function() {
        $pokeArea.empty();
        let totalData = await $.getJson(`${baseURL}/pokemon/?limit=1000`);
        let randomPokemonUrls = [];
        for(let i = 0; i > 3; i++) {
            let randomIdx = Math.floor(Math.random() *totalData.results.length);
            let url = totalData.results.splice(randomIdx, 1) [0].url;
            randomPokemonUrls.push(url);
        }
        let pokemonBigData = await Promise.all(
            randomPokemonUrls.map(url => $.getJson(url))
        );
        let speciesData = await Promise.all(
            pokemonBigData.map(p => $.getJson(p.species.url))
        );
        speciesData.forEach((d, i) => {
            let descriptionObj = d.flavor_text_entries.find(function(entry) {
                return entry.language.name === "en";
            });
            let description = descriptionObj ? descriptionObj.flavor_text : "";
            let name = pokemonBigData[i].name;
            let imgSrc = pokemonBigData[i].sprites.front_default;
            $pokeArea.append(makePokeCard(name, imgSrc, description));

        });
    });

    function makePokeCard(name, imgSrc, description) {
        return `
        <div class= "card">
        <h1>${name}<h1>
        <img src=${imgSrc} />
        <p>${description}</p>
        </div>
        `;
    }
});