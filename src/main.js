import { getPokemon } from "./tools/getPokemon.js"

async function main() {
    const pokemon1 = await getPokemon("snorlax");
    const pokemon2 = await getPokemon("gengar");

    pokemon1.showStats();
    console.log('');
    pokemon2.showStats();
}

main();