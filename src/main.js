import { choosePokemon, getTypeInteractions } from "./tools/getPokemon.js"
import { Battle } from "./classes/Battle.js"

async function main() {
    const typeInteractions = await getTypeInteractions();

    // Temporary randomization until AI is built in
    const pokemonChoices = ["snorlax", "gengar", "nidoking", "charizard", "blastoise", "venusaur", "dragonite", "alakazam", "jolteon", "pidgeot"];
    //const playerOnePick = pokemonChoices[Math.floor(Math.random() * 9) + 1];
    const playerOnePick = "dragonite";
    const playerTwoPick = pokemonChoices[Math.floor(Math.random() * 9) + 1];
    //

    const players = await choosePokemon(playerOnePick, playerTwoPick);
    const battle = new Battle(players[0], players[1], typeInteractions);
    battle.startBattle();
     
}

main();