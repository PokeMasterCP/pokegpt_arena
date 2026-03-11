import OpenAI from 'openai';
import 'dotenv/config';
import { readFile } from "node:fs/promises"

const apiKey = process.env.OPENROUTER_API_KEY;
const model1 = process.env.MODEL_1;
const model2 = process.env.MODEL_2;
const prompt = await readFile("./src/data/PROMPT.md", 'utf-8');
const openai = new OpenAI({
  baseURL: 'https://openrouter.ai/api/v1',
  apiKey: apiKey,
  defaultHeaders: {},
});

export async function AIPokemonChoice() {
  const completion = await openai.chat.completions.create({
    model: model1,
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
    response_format: {
        type: 'json_object',
        json_schema: {
            "name": "selection",
            "strict": true,
            "schema": {
                "type": "object",
                "properties": {
                    "selection": {
                        "type": "string",
                        "description": "The Pokemon or Move Name you selected only."
                    },
                "required": ["selection"],
                "additionalProperties": false
                }
            }
        }
    }
  });

  const rawReply = completion.choices[0].message.content;
  const reasoning = completion.choices[0].message.reasoning;
  const parsedReply = JSON.parse(rawReply);
  //console.log(completion.choices[0].message);
  //console.log(`Reply: ${reply}`);
  //console.log(`Reasoning: ${reasoning}`);
  return parsedReply.selection.toLowerCase();
}