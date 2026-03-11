import { choosePokemon, getTypeInteractions } from "./tools/getPokemon.js"
import { Battle } from "./classes/Battle.js"
import { AIPokemonChoice } from "./tools/aiConfig.js";

async function main() {
    const typeInteractions = await getTypeInteractions();
    const playerOnePick = await AIPokemonChoice();
    const playerTwoPick = await AIPokemonChoice();
    const players = await choosePokemon(playerOnePick, playerTwoPick);
    const battle = new Battle(players[0], players[1], typeInteractions);
    
    battle.startBattle();
     
}

main();