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
});