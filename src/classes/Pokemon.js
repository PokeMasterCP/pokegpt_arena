import { sentenceCase } from "../tools/helper.js";

export class Pokemon {
  constructor(name, data) {
    this.name = name;
    this.primaryType = data.primaryType;
    this.secondaryType = data.secondaryType;
    this.hp = data.hp;
    this.attack = data.attack;
    this.defense = data.defense;
    this.spAttack = data.spAttack;
    this.spDef = data.spDefense;
    this.speed = data.speed;
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
