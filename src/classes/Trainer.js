export class Trainer {
    constructor(modelName, model) {
        this.modelName = modelName;
        this.model = model;
        this.messageHistory = [];
        this.messageQueue = '';
    }

    queueMessage(message) {
        this.messageQueue += message;
    }

    async sendMessage() {
        const message = { role: 'user', content: this.messageQueue };
        this.messageHistory.push(message);
        this.messageQueue = '';

        const completion = await this.model.chat.completions.create({
            model: this.modelName,
            messages: this.messageHistory,
            temperature: 0.7, // Reduces the deterministic nature of AI since they kept defaulting to the same Pokemon choices
            response_format: {
                type: 'json_object',
                json_schema: {
                    "name": "selection",
                    "strict": true,
                    "schema": {
                        "type": "object",
                        "properties": {
                            "choice": {
                                "type": "string",
                                "description": "The Pokemon or Move Name you selected only."
                            },
                        },
                        "required": ["choice"],
                        "additionalProperties": false
                    }
                }
            }
        });
        
        const stringResponse = completion.choices[0].message.content;
        this.messageHistory.push({role: "assistant", content: stringResponse });
        const response = JSON.parse(stringResponse);
        return response.choice.toLowerCase();
    }
}