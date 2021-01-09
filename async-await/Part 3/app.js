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
        
    }
});