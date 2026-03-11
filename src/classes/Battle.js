import { sentenceCase } from "../tools/helper.js";

export class Battle {
    constructor(trainerOne, pokemon1, trainerTwo, pokemon2, typeInteractions) {
        this.turn = 1;

        this.trainerOne = trainerOne;
        this.trainerOneChoice = null;

        this.trainerTwo = trainerTwo;
        this.trainerTwoChoice = null;

        this.playerOne = pokemon1;
        this.playerTwo = pokemon2;

        this.typeInteractions = typeInteractions;
    }

    broadcast(message) {
        console.log(message);
        this.trainerOne.queueMessage(`${message}\n`);
        this.trainerTwo.queueMessage(`${message}\n`);
    }

    findTurnOrder() {
        if (this.playerOne.currentSpeed > this.playerTwo.currentSpeed) {
            this.takeTurn(this.playerOne, this.trainerOneChoice, this.playerTwo, this.trainerTwoChoice);
        }

        if (this.playerOne.currentSpeed < this.playerTwo.currentSpeed) {
            this.takeTurn(this.playerTwo, this.trainerTwoChoice, this.playerOne, this.trainerOneChoice);
        }
        // In case of a speed tie, randomly choose order
        if (this.playerOne.currentSpeed === this.playerTwo.currentSpeed) {
            const ranNum = Math.random();
            ranNum > 0.5 ? this.takeTurn(this.playerOne, this.trainerOneChoice, this.playerTwo, this.trainerTwoChoice) : this.takeTurn(this.playerTwo, this.trainerTwoChoice, this.playerOne, this.trainerOneChoice);
        }
    }

    async startBattle() {
        this.broadcast(`Starting battle between Player One: ${sentenceCase(this.trainerOne.modelName)} and Player Two: ${sentenceCase(this.trainerTwo.modelName)}`);
        this.broadcast(`Player One has chosen: ${sentenceCase(this.playerOne.name)} and Player Two has chosen: ${sentenceCase(this.playerTwo.name)}!`);
        this.broadcast("Respond with your desired move to begin the battle!\n");

        this.trainerOneChoice = await this.trainerOne.sendMessage();
        this.trainerTwoChoice = await this.trainerTwo.sendMessage(); 
        this.findTurnOrder();
    }

    takeTurn(first, firstChoice, second, secondChoice) {
        this.broadcast(`\nTurn: ${this.turn}`);

        if (first.resting > 0) {
            this.broadcast(`${sentenceCase(first.name)} is resting this turn!`);
            first.resting--;
        } else {
            first.useMove(firstChoice, second, this);
        }
        
        if (second.currentHp > 0) {
            if (second.resting > 0) {
                this.broadcast(`${sentenceCase(second.name)} is resting this turn!`);
                second.resting--;
            } else {
                second.useMove(secondChoice, first, this);
            }
        }

        this.afterTurnReport();
    }

    async afterTurnReport() {
        if (this.playerOne.currentHp <= 0) {
            console.log(`${sentenceCase(this.trainerTwo.modelName)} has won the battle with ${sentenceCase(this.playerOne.name)}!!`);
            return;
        }

        if (this.playerTwo.currentHp <= 0) {
            console.log(`\n${sentenceCase(this.trainerOne.modelName)} has won the battle with ${sentenceCase(this.playerOne.name)}!!`);
            return;
        }
        
        const userHpUpdate = `${sentenceCase(this.playerOne.name)}: ${this.playerOne.currentHp}/${this.playerOne.hp}`;
        const targetHpUpdate = `${sentenceCase(this.playerTwo.name)}: ${this.playerTwo.currentHp}/${this.playerTwo.hp}`;
        this.broadcast(`${userHpUpdate} || ${targetHpUpdate}`);
        this.turn++;
        this.trainerOneChoice = await this.trainerOne.sendMessage();
        this.trainerTwoChoice = await this.trainerTwo.sendMessage();
        this.findTurnOrder();
    }

}


