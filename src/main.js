import { getPokemon } from "./tools/getPokemon.js"
import { Battle } from "./classes/Battle.js"
import { getTypeInteractions } from "./tools/getPokemon.js";

async function main() {
    const typeInteractions = await getTypeInteractions();
    const pokemon1 = await getPokemon("snorlax");
    const pokemon2 = await getPokemon("gengar");

    const battle = new Battle(pokemon1, pokemon2, typeInteractions);
    battle.startBattle();
     
}

main();