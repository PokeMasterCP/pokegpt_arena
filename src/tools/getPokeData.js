async function queryPokeAPI(name) {
  try {
    const URL = "https://pokeapi.co/api/v2/pokemon"
    const response = await fetch(`${URL}/${name}`)
    return response.json();
  } catch (error) {
    return new Error(`Error querying PokeAPI: ${error}`);
  }
}

function getStats(statsData) {
  const stats = {};

  for (let stat of statsData) {
    const statName = stat.stat.name;
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

export async function getPokeData(name) {
  const allData = await queryPokeAPI(name);
  const types = getTypes(allData.types);
  const stats = getStats(allData.stats);
  const pokeData = {...types, ...stats};


  console.log(allData.moves[0]);
}

getPokeData("snorlax");