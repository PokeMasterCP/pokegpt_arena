import { sentenceCase } from "../tools/helper.js";

export class Battle {
    constructor(pokemon1, pokemon2) {
        this.turn = 1;
        this.playerOne = pokemon1;
        this.playerTwo = pokemon2;
        this.winner = null;
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
        console.log(`\nTurn: ${this.turn}`);
        first.move1(second);
        if (second.currentHp > 0) {
            second.move1(first);
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

        this.turn++;
        console.log(`${sentenceCase(this.playerOne.name)} has ${this.playerOne.currentHp} hp left.`)
        console.log(`${sentenceCase(this.playerTwo.name)} has ${this.playerTwo.currentHp} hp left.`)
        this.findTurnOrder();
    }




}


