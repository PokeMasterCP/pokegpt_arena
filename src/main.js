import { getPokemon } from "./tools/getPokemon.js"
import { Battle } from "./classes/Battle.js"

async function main() {
    const pokemon1 = await getPokemon("snorlax");
    const pokemon2 = await getPokemon("gengar");

    const battle = new Battle(pokemon1, pokemon2);
    battle.startBattle();
     
}

main();