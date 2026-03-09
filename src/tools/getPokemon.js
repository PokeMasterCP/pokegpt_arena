import { readFile } from "node:fs/promises"
import { Pokemon } from "../classes/Pokemon.js"
import { moveFuncs } from "../moves.js"

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

async function getMoves(name) {
  const contents = await readFile("./src/data/movesets.json", 'utf-8');
  const moveNames = JSON.parse(contents);
  const moveset = [];
   
  for (let move of moveNames[name]) {
    moveset.push(moveFuncs.get(move));
  }
  return moveset;
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

export async function getPokemon(name) {
    const pokeData = await getPokeData(name);
    const moveset = await getMoves(name);
    return new Pokemon(name, pokeData, moveset);
}