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

async function main() {
    console.log(`
        ██████   ██████  ██   ██ ███████  ██████  ██████  ████████      █████  ██████  ███████ ███    ██  █████  
        ██   ██ ██    ██ ██  ██  ██      ██       ██   ██    ██        ██   ██ ██   ██ ██      ████   ██ ██   ██ 
        ██████  ██    ██ █████   █████   ██   ███ ██████     ██        ███████ ██████  █████   ██ ██  ██ ███████ 
        ██      ██    ██ ██  ██  ██      ██    ██ ██         ██        ██   ██ ██   ██ ██      ██  ██ ██ ██   ██ 
        ██       ██████  ██   ██ ███████  ██████  ██         ██        ██   ██ ██   ██ ███████ ██   ████ ██   ██ 
                                                                                                     
                                                                                                     `);
   
    const prompt = await readFile("./src/data/PROMPT.md", "utf-8");
    const typeInteractions = await getTypeInteractions();
    const trainerOne = generateAITrainer(process.env.MODEL_1);
    const trainerTwo = generateAITrainer(process.env.MODEL_2);
    console.log(`${sentenceCase(trainerOne.modelName)} VS ${sentenceCase(trainerTwo.modelName)}! The trainers are choosing their Pokemon.`);
    trainerOne.queueMessage(prompt);
    trainerTwo.queueMessage(prompt);
    const trainerOnePick = await trainerOne.sendMessage();
    const trainerTwoPick = await trainerTwo.sendMessage();

    const chosenPokemon = await choosePokemon(trainerOnePick, trainerTwoPick);
    const battle = new Battle(trainerOne, chosenPokemon[0], trainerTwo, chosenPokemon[1], typeInteractions);
    
    battle.startBattle();
    //Read chat, seems like we forgot to update move selection from numbers to strings. 
}


main();