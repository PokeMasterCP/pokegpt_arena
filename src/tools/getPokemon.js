import { readFile } from "node:fs/promises"
import { Pokemon } from "../classes/Pokemon.js"
import { moveFuncs } from "../data/moves.js"

async function queryPokeAPI(name) {
  const URL = "https://pokeapi.co/api/v2/pokemon"
  const response = await fetch(`${URL}/${name}`)
  
  if (response.status != 200) {
    throw new Error(`ERROR: Received ${response.status} code for ${name} from PokeAPI`);
  }
  
  try {
    return await response.json();
  } catch (error) {
    throw new Error(`ERROR: Failed to parse JSON data from PokeAPI`);
  }
}

function getStats(statsData) {
  const stats = {};

  for (let stat of statsData) {
    let statName = stat.stat.name;
    
    /* PokeAPI returns special-attack and special-defense which caused some issues,
       so I opted to normalize it to spAttack and spDefense */
    if (statName === "special-attack") {
      statName = 'spAttack';
    }

    if (statName === "special-defense") {
      statName = 'spDefense';
    }
    const statValue = scaleStatToLvl50(statName, stat.base_stat);
    stats[statName] = statValue;
  }
  return stats;
}

function scaleStatToLvl50(statName, baseStat) {
  let scaledStat = (( 2 * baseStat * 50) / 100) + 5;
  if (statName === "hp") {
    scaledStat += 55;
  }
  return scaledStat;
}

function getTypes(typeData) {
  const primaryType = typeData[0].type.name;
  const secondaryType = typeData[1]?.type.name;

  if (secondaryType) {
    return {primaryType, secondaryType};
  } else {
    return {primaryType};
  }
}

async function getPokeData(name) {
  const allData = await queryPokeAPI(name);
  const types = getTypes(allData.types);
  const stats = getStats(allData.stats);
  const pokeData = {name, ...types, ...stats};
  return pokeData;
}

export async function getTypeInteractions() {
  const contents = await readFile("./src/data/typeInteractions.json");
  return JSON.parse(contents);
}

export async function choosePokemon(playerOnePick, playerTwoPick) {
  const rawContent = await readFile("./src/data/movesets.json", "utf-8");
  const pokemonMap = new Map(Object.entries(JSON.parse(rawContent)));

  const playerOneMoveNames = pokemonMap.get(playerOnePick);
  const playerOneMoves = playerOneMoveNames.map(move => moveFuncs.get(move));
  const playerOneData = await getPokeData(playerOnePick);
  const playerOne = new Pokemon(playerOnePick, playerOneData, playerOneMoves, playerOneMoveNames);

  const playerTwoMoveNames = pokemonMap.get(playerOnePick);
  const playerTwoMoves = playerTwoMoveNames.map(move => moveFuncs.get(move));
  const playerTwoData = await getPokeData(playerTwoPick);
  const playerTwo = new Pokemon(playerTwoPick, playerTwoData, playerTwoMoves, playerTwoMoveNames);

  return [playerOne, playerTwo];
}