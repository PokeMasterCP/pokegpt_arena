import { sentenceCase } from "../tools/helper.js";

export class Battle {
    constructor(pokemon1, pokemon2, typeInteractions) {
        this.turn = 1;
        this.playerOne = pokemon1;
        this.playerTwo = pokemon2;
        this.winner = null;
        this.typeInteractions = typeInteractions;
    }

    findTurnOrder() {
        if (this.playerOne.speed > this.playerTwo.speed) {
            this.takeTurn(this.playerOne, this.playerTwo);
        }

        if (this.playerOne.speed < this.playerTwo.speed) {
            this.takeTurn(this.playerTwo, this.playerOne);
        }
        // In case of a speed tie, randomly choose order
        if (this.playerOne.speed === this.playerTwo.speed) {
            const ranNum = Math.random();
            ranNum > 0.5 ? this.takeTurn(this.playerOne, this.playerTwo) : this.takeTurn(this.playerTwo, this.playerOne);
        }
    }

    startBattle() {
        console.log(`Starting battle between ${sentenceCase(this.playerOne.name)} and ${sentenceCase(this.playerTwo.name)}!`);
        this.findTurnOrder();
        console.log(`\n${sentenceCase(this.winner.name)} has won!!`);
    }

    takeTurn(first, second) {
        // Temporary randomness until AI
        const selection = Math.floor(Math.random() * 4) + 1;
        //

        console.log(`\nTurn: ${this.turn}`);

        if (first.resting > 0) {
            console.log(`${sentenceCase(first.name)} is resting this turn!`);
            first.resting--;
        } else {
            first.useMove(selection, second, this.typeInteractions);
        }
        
        if (second.currentHp > 0) {
            if (second.resting > 0) {
                console.log(`${sentenceCase(second.name)} is resting this turn!`);
                second.resting--;
            } else {
                second.useMove(selection, first, this.typeInteractions);
            }
        }

        this.afterTurnReport();
    }

    afterTurnReport() {
        if (this.playerOne.currentHp <= 0) {
            this.winner = this.playerTwo;
            return;
        }

        if (this.playerTwo.currentHp <= 0) {
            this.winner = this.playerOne;
            return;
        }
        
        const userHpUpdate = `${sentenceCase(this.playerOne.name)}: ${this.playerOne.currentHp}/${this.playerOne.hp}`;
        const targetHpUpdate = `${sentenceCase(this.playerTwo.name)}: ${this.playerTwo.currentHp}/${this.playerTwo.hp}`;
        console.log(`${userHpUpdate} || ${targetHpUpdate}`);
        this.turn++;
        this.findTurnOrder();
    }
}


