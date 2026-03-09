import { typeMultiplier } from "./tools/battleLogic.js";
import { sentenceCase } from "./tools/helper.js";

export const moveFuncs = new Map();

function curse(target) { 
    console.log(`${this.name} used curse! Did 20 dmg to ${target.name}!`);
    target.currentHp -= 20;
}
moveFuncs.set("curse", curse);

function bodySlam() { console.log(`${this.name} used body slam!`); }
moveFuncs.set("body slam", bodySlam);

function rest() { console.log(`${this.name} used rest!`); }
moveFuncs.set("rest", rest);

function earthquake(target, typeInteractions) { 
    const power = 100;
    const type = "ground";
    const category = "physical";
    const damage = power * typeMultiplier(type, target.primaryType, typeInteractions);
    console.log(`${sentenceCase(this.name)} used Earthquake! Did ${damage} to ${sentenceCase(target.name)}!`);
    target.currentHp -= damage;
}
moveFuncs.set("earthquake", earthquake);

function shadowBall(target, typeInteractions) {
    const power = 80;
    const type = "ghost";
    const category = "special"; 
    const damage = power * typeMultiplier(type, target.primaryType, typeInteractions);
    console.log(`${sentenceCase(this.name)} used Shadow Ball! Did ${damage} damage to ${sentenceCase(target.name)}!`);
    target.currentHp -= damage;
}
moveFuncs.set("shadow ball", shadowBall);

function sludgeWave() { console.log(`${this.name} used sludge wave!`); }
moveFuncs.set("sludge wave", sludgeWave);

function focusBlast() { console.log(`${this.name} used focus blast!`); }
moveFuncs.set("focus blast", focusBlast);

function thunder() { console.log(`${this.name} used thunder!`); }
moveFuncs.set("thunder", thunder);

function earthPower() { console.log(`${this.name} used earth power!`); }
moveFuncs.set("earth power", earthPower);

function iceBeam() { console.log(`${this.name} used ice beam!`); }
moveFuncs.set("ice beam", iceBeam);

function fireBlast() { console.log(`${this.name} used fire blast!`); }
moveFuncs.set("fire blast", fireBlast);

function flamethrower() { console.log(`${this.name} used flamethrower!`); }
moveFuncs.set("flamethrower", flamethrower);

function solarBeam() { console.log(`${this.name} used solar beam!`); }
moveFuncs.set("solar beam", solarBeam);

function roost() { console.log(`${this.name} used roost!`); }
moveFuncs.set("roost", roost);

function scald() { console.log(`${this.name} used scald!`); }
moveFuncs.set("scald", scald);

function toxic() { console.log(`${this.name} used toxic!`); }
moveFuncs.set("toxic", toxic);

function auraSphere() { console.log(`${this.name} used aura sphere!`); }
moveFuncs.set("aura sphere", auraSphere);

function sludgeBomb() { console.log(`${this.name} used sludge bomb!`); }
moveFuncs.set("sludge bomb", sludgeBomb);

function gigaDrain() { console.log(`${this.name} used giga drain!`); }
moveFuncs.set("giga drain", gigaDrain);

function hiddenPowerFire() { console.log(`${this.name} used hidden power fire!`); }
moveFuncs.set("hidden power fire", hiddenPowerFire);

function growth() { console.log(`${this.name} used growth!`); }
moveFuncs.set("growth", growth);

function dragonDance() { console.log(`${this.name} used dragon dance!`); }
moveFuncs.set("dragon dance", dragonDance);

function extremeSpeed() { console.log(`${this.name} used extreme speed!`); }
moveFuncs.set("extreme speed", extremeSpeed);

function dragonClaw() { console.log(`${this.name} used dragon claw!`); }
moveFuncs.set("dragon claw", dragonClaw);

function psychic() { console.log(`${this.name} used psychic!`); }
moveFuncs.set("psychic", psychic);

function recover() { console.log(`${this.name} used recover!`); }
moveFuncs.set("recover", recover);

function thunderbolt() { console.log(`${this.name} used thunderbolt!`); }
moveFuncs.set("thunderbolt", thunderbolt);

function alluringVoice() { console.log(`${this.name} used alluring voice!`); }
moveFuncs.set("alluring voice", alluringVoice);

function hyperBeam() { console.log(`${this.name} used hyper beam!`); }
moveFuncs.set("hyper beam", hyperBeam);

function hurricane() { console.log(`${this.name} used hurricane!`); }
moveFuncs.set("hurricane", hurricane);