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
    this.currentAttack = this.attack;
    this.currentDefense = this.defense;
    this.currentSpAttack = this.spAttack;
    this.currentSpDefense = this.spDefense;
    this.currentSpeed = this.speed;

    this.resting = 0;

    this.move1 = moveset[0].bind(this);
    this.move2 = moveset[1].bind(this);
    this.move3 = moveset[2].bind(this);
    this.move4 = moveset[3].bind(this);
  }

  useMove(selection, target, typeInteractions) {
    switch (selection) {
      case 1:
        this.move1(target, typeInteractions);
        break;

      case 2:
        this.move2(target, typeInteractions);
        break;

      case 3:
        this.move3(target, typeInteractions);
        break;

      case 4:
        this.move4(target, typeInteractions);
        break;
      
      default:
        break;
    }
  }
}
