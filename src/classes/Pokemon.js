import { sentenceCase } from "../tools/helper.js";

export class Pokemon {
  constructor(name, data, moveset) {
    this.name = name;
    this.primaryType = data.primaryType;
    this.secondaryType = data.secondaryType;
   
    this.hp = data.hp;
    this.attack = data.attack;
    this.defense = data.defense;
    this.spAttack = data.spAttack;
    this.spDefense = data.spDefense;
    this.speed = data.speed;
   
    this.currentHp = this.hp;
    this.move1 = moveset[0].bind(this);
    this.move2 = moveset[1].bind(this);
    this.move3 = moveset[2].bind(this);
    this.move4 = moveset[3].bind(this);
  }

  showStats() {
    console.log(`Name: ${sentenceCase(this.name)}`);
    const type = this.secondaryType ? `${sentenceCase(this.primaryType)}/${sentenceCase(this.secondaryType)}` : sentenceCase(this.primaryType);
    console.log(`Type: ${type}`);
    console.log(`HP: ${this.hp}`);
    console.log(`ATK: ${this.attack}`);
    console.log(`DEF: ${this.defense}`);
    console.log(`SP ATK: ${this.spAttack}`);
    console.log(`SP DEF: ${this.spDef}`);
    console.log(`SPD: ${this.speed}`);
  }
}
