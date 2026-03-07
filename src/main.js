import { getPokemon } from "./tools/getPokemon.js"

async function main() {
    const pokemon1 = await getPokemon("gengar");

    pokemon1.move1();
    pokemon1.move2();
    pokemon1.move3();
    pokemon1.move4();
}

main();