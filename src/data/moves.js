import { damagePhase } from "../tools/battleLogic.js";
import { sentenceCase } from "../tools/helper.js";

export const moveFuncs = new Map();

function rest(target, typeInteractions) {
    this.currentHp = this.hp;
    this.resting += 2;
    console.log(`${sentenceCase(this.name)} used Rest! It healed HP to full and is now asleep!`);
}
moveFuncs.set("rest", rest);

function bodySlam(target, typeInteractions) {
    const movePower = 85;
    const moveType = "normal";
    const moveCategory = "physical";
    damagePhase(typeInteractions, "Body Slam", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("body slam", bodySlam);

function gigaImpact(target, typeInteractions) {
    const movePower = 150;
    const moveType = "normal";
    const moveCategory = "physical";
    damagePhase(typeInteractions, "Giga Impact", movePower, moveType, moveCategory, this, target);
    this.resting++;
}
moveFuncs.set("giga impact", gigaImpact);

function hyperBeam(target, typeInteractions) {
    const movePower = 150;
    const moveType = "normal";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Hyper Beam", movePower, moveType, moveCategory, this, target);
    this.resting++;
}
moveFuncs.set("hyper beam", hyperBeam);

function zenHeadbutt(target, typeInteractions) {
    const movePower = 80;
    const moveType = "psychic";
    const moveCategory = "physical";
    damagePhase(typeInteractions, "Zen Headbutt", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("zen headbutt", zenHeadbutt);

function psychic(target, typeInteractions) {
    const movePower = 90;
    const moveType = "psychic";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Psychic", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("psychic", psychic);

function earthquake(target, typeInteractions) { 
    const movePower = 100;
    const moveType = "ground";
    const moveCategory = "physical";
    damagePhase(typeInteractions, "Earthquake", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("earthquake", earthquake);

function earthPower(target, typeInteractions) {
    const movePower = 90;
    const moveType = "ground";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Earth Power", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("earth power", earthPower);

function shadowBall(target, typeInteractions) {
    const movePower = 80;
    const moveType = "ghost";
    const moveCategory = "special"; 
    damagePhase(typeInteractions, "Shadow Ball", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("shadow ball", shadowBall);

function sludgeWave(target, typeInteractions) {
    const movePower = 95;
    const moveType = "poison";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Sludge Wave", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("sludge wave", sludgeWave);

function sludgeBomb(target, typeInteractions) {
    const movePower = 90;
    const moveType = "poison";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Sludge Bomb", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("sludge bomb", sludgeBomb);

function focusBlast(target, typeInteractions) {
    const movePower = 120;
    const moveType = "fighting";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Focus Blast", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("focus blast", focusBlast);

function auraSphere(target, typeInteractions) {
    const movePower = 80;
    const moveType = "fighting";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Aura Sphere", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("aura sphere", auraSphere);

function thunder(target, typeInteractions) {
    const movePower = 110;
    const moveType = "electric";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Thunder", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("thunder", thunder);

function thunderbolt(target, typeInteractions) {
    const movePower = 90;
    const moveType = "electric";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Thunderbolt", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("thunderbolt", thunderbolt);

function iceBeam(target, typeInteractions) {
    const movePower = 90;
    const moveType = "ice";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Ice Beam", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("ice beam", iceBeam);

function fireBlast(target, typeInteractions) {
    const movePower = 110;
    const moveType = "fire";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Fire Blast", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("fire blast", fireBlast);

function flamethrower(target, typeInteractions) {
    const movePower = 90;
    const moveType = "fire";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Flamethrower", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("flamethrower", flamethrower);

function solarBeam(target, typeInteractions) {
    const movePower = 120;
    const moveType = "grass";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Solar Beam", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("solar beam", solarBeam);

function gigaDrain(target, typeInteractions) {
    const movePower = 75;
    const moveType = "grass";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Giga Drain", movePower, moveType, moveCategory, this, target, true);
}
moveFuncs.set("giga drain", gigaDrain);

function hiddenPowerFire(target, typeInteractions) {
    const movePower = 60;
    const moveType = "fire";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Hidden Power Fire", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("hidden power fire", hiddenPowerFire);

function scald(target, typeInteractions) {
    const movePower = 80;
    const moveType = "water";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Scald", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("scald", scald);

function dragonPulse(target, typeInteractions) {
    const movePower = 85;
    const moveType = "dragon";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Dragon Pulse", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("dragon pulse", dragonPulse);

function dragonClaw(target, typeInteractions) {
    const movePower = 80;
    const moveType = "dragon";
    const moveCategory = "physical";
    damagePhase(typeInteractions, "Dragon Claw", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("dragon claw", dragonClaw);

function hurricane(target, typeInteractions) {
    const movePower = 110;
    const moveType = "flying";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Hurricane", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("hurricane", hurricane);

function alluringVoice(target, typeInteractions) {
    const movePower = 80;
    const moveType = "fairy";
    const moveCategory = "special";
    damagePhase(typeInteractions, "Alluring Voice", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("alluring voice", alluringVoice);

function roost() {
    const healAmount = Math.floor(this.hp / 2);
    if ( (this.currentHp + healAmount) > this.hp) {
        this.currentHp = this.hp;
        console.log(`${sentenceCase(this.name)} used Roost! It healed to full HP!`);
        return;
    }
    this.currentHp += healAmount;
    console.log(`${sentenceCase(this.name)} used Roost! It healed for ${healAmount} HP!`); 
}
moveFuncs.set("roost", roost);

function recover() { 
    const healAmount = Math.floor(this.hp / 2);
    if ( (this.currentHp + healAmount) > this.hp) {
        this.currentHp = this.hp;
        console.log(`${sentenceCase(this.name)} used Recover! It healed to full HP!`);
        return;
    }
    this.currentHp += healAmount;
    console.log(`${sentenceCase(this.name)} used Recover! It healed for ${healAmount} HP!`); 
}
moveFuncs.set("recover", recover);

function growth() {
    const attackAmount = Math.floor(this.attack / 2);
    const spAttackAmount = Math.floor(this.spAttack / 2);
    this.currentAttack += attackAmount;
    this.currentSpAttack += spAttackAmount;

    console.log(`${sentenceCase(this.name)} used Growth! It increased it's Attack and Special Attack by 50% of base!`); 
}
moveFuncs.set("growth", growth);

function dragonDance() {
    const attackAmount = Math.floor(this.attack / 2);
    const speedAmount = Math.floor(this.speed / 2);
    this.currentAttack += attackAmount;
    this.currentSpeed += speedAmount;
    console.log(`${sentenceCase(this.name)} used Dragon Dance! It increased it's Attack and Speed by 50% of base!`); 
}
moveFuncs.set("dragon dance", dragonDance);