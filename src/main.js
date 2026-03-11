import { choosePokemon, getTypeInteractions } from "./tools/getPokemon.js"
import { Battle } from "./classes/Battle.js"
import OpenAI from 'openai';
import 'dotenv/config';
import { readFile } from "node:fs/promises"
import { Trainer } from "./classes/Trainer.js"
import { sentenceCase } from "./tools/helper.js";

function generateAITrainer(modelName) {
    const apiKey = process.env.OPENROUTER_API_KEY;
    const model = new OpenAI({
        baseURL: 'https://openrouter.ai/api/v1',
        apiKey: apiKey,
        defaultHeaders: {},
    });

    return new Trainer(modelName, model);
}

function getRandomSubset(array, size) {
    const shuffled = [...array].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, size);
}

async function main() {
    console.log(`
        ██████   ██████  ██   ██ ███████  ██████  ██████  ████████      █████  ██████  ███████ ███    ██  █████  
        ██   ██ ██    ██ ██  ██  ██      ██       ██   ██    ██        ██   ██ ██   ██ ██      ████   ██ ██   ██ 
        ██████  ██    ██ █████   █████   ██   ███ ██████     ██        ███████ ██████  █████   ██ ██  ██ ███████ 
        ██      ██    ██ ██  ██  ██      ██    ██ ██         ██        ██   ██ ██   ██ ██      ██  ██ ██ ██   ██ 
        ██       ██████  ██   ██ ███████  ██████  ██         ██        ██   ██ ██   ██ ███████ ██   ████ ██   ██ 
                                                                                                     
                                                                                                     `);
   
    const prompt = await readFile("./src/data/PROMPT.md", "utf-8");
    const rawMovesets = await readFile("./src/data/movesets.json", "utf-8");
    const allPokemon = Object.keys(JSON.parse(rawMovesets));
    const typeInteractions = await getTypeInteractions();
    const trainerOne = generateAITrainer(process.env.MODEL_1);
    const trainerTwo = generateAITrainer(process.env.MODEL_2);
    console.log(`${sentenceCase(trainerOne.modelName)} VS ${sentenceCase(trainerTwo.modelName)}! The trainers are choosing their Pokemon.\n`);

    const sampleSize = 8;
    const trainerOneOptions = getRandomSubset(allPokemon, sampleSize);
    const trainerTwoOptions = getRandomSubset(allPokemon, sampleSize);

    const optionsMessage = (options) =>
        `\n\n## Your Available Pokémon\nYou MUST choose from the following Pokémon only: ${options.map(option => sentenceCase(option)).join(", ")}.\nYour opponent has a different random selection, so study the full roster above to understand what you might face.`;

    trainerOne.queueMessage(prompt + optionsMessage(trainerOneOptions));
    trainerTwo.queueMessage(prompt + optionsMessage(trainerTwoOptions));
    const trainerOnePick = await trainerOne.sendMessage();
    const trainerTwoPick = await trainerTwo.sendMessage();

    const chosenPokemon = await choosePokemon(trainerOnePick, trainerTwoPick);
    const battle = new Battle(trainerOne, chosenPokemon[0], trainerTwo, chosenPokemon[1], typeInteractions);
    
    battle.startBattle();
    //Read chat, seems like we forgot to update move selection from numbers to strings. 
}


main();