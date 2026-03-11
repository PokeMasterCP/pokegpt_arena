import { damagePhase } from "../tools/battleLogic.js";
import { sentenceCase } from "../tools/helper.js";

export const moveFuncs = new Map();

function rest(target, battle) {
    this.currentHp = this.hp;
    this.resting += 2;
    battle.broadcast(`${sentenceCase(this.name)} used Rest! It healed HP to full and is now asleep!`);
}
moveFuncs.set("rest", rest);

function bodySlam(target, battle) {
    const movePower = 85;
    const moveType = "normal";
    const moveCategory = "physical";
    damagePhase(battle, "Body Slam", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("body slam", bodySlam);

function gigaImpact(target, battle) {
    const movePower = 150;
    const moveType = "normal";
    const moveCategory = "physical";
    damagePhase(battle, "Giga Impact", movePower, moveType, moveCategory, this, target);
    this.resting++;
}
moveFuncs.set("giga impact", gigaImpact);

function hyperBeam(target, battle) {
    const movePower = 150;
    const moveType = "normal";
    const moveCategory = "special";
    damagePhase(battle, "Hyper Beam", movePower, moveType, moveCategory, this, target);
    this.resting++;
}
moveFuncs.set("hyper beam", hyperBeam);

function zenHeadbutt(target, battle) {
    const movePower = 80;
    const moveType = "psychic";
    const moveCategory = "physical";
    damagePhase(battle, "Zen Headbutt", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("zen headbutt", zenHeadbutt);

function psychic(target, battle) {
    const movePower = 90;
    const moveType = "psychic";
    const moveCategory = "special";
    damagePhase(battle, "Psychic", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("psychic", psychic);

function earthquake(target, battle) { 
    const movePower = 100;
    const moveType = "ground";
    const moveCategory = "physical";
    damagePhase(battle, "Earthquake", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("earthquake", earthquake);

function earthPower(target, battle) {
    const movePower = 90;
    const moveType = "ground";
    const moveCategory = "special";
    damagePhase(battle, "Earth Power", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("earth power", earthPower);

function shadowBall(target, battle) {
    const movePower = 80;
    const moveType = "ghost";
    const moveCategory = "special"; 
    damagePhase(battle, "Shadow Ball", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("shadow ball", shadowBall);

function sludgeWave(target, battle) {
    const movePower = 95;
    const moveType = "poison";
    const moveCategory = "special";
    damagePhase(battle, "Sludge Wave", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("sludge wave", sludgeWave);

function sludgeBomb(target, battle) {
    const movePower = 90;
    const moveType = "poison";
    const moveCategory = "special";
    damagePhase(battle, "Sludge Bomb", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("sludge bomb", sludgeBomb);

function focusBlast(target, battle) {
    const movePower = 120;
    const moveType = "fighting";
    const moveCategory = "special";
    damagePhase(battle, "Focus Blast", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("focus blast", focusBlast);

function auraSphere(target, battle) {
    const movePower = 80;
    const moveType = "fighting";
    const moveCategory = "special";
    damagePhase(battle, "Aura Sphere", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("aura sphere", auraSphere);

function thunder(target, battle) {
    const movePower = 110;
    const moveType = "electric";
    const moveCategory = "special";
    damagePhase(battle, "Thunder", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("thunder", thunder);

function thunderbolt(target, battle) {
    const movePower = 90;
    const moveType = "electric";
    const moveCategory = "special";
    damagePhase(battle, "Thunderbolt", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("thunderbolt", thunderbolt);

function iceBeam(target, battle) {
    const movePower = 90;
    const moveType = "ice";
    const moveCategory = "special";
    damagePhase(battle, "Ice Beam", movePower, moveType, moveCategory, this, target); 
}
moveFuncs.set("ice beam", iceBeam);

function fireBlast(target, battle) {
    const movePower = 110;
    const moveType = "fire";
    const moveCategory = "special";
    damagePhase(battle, "Fire Blast", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("fire blast", fireBlast);

function flamethrower(target, battle) {
    const movePower = 90;
    const moveType = "fire";
    const moveCategory = "special";
    damagePhase(battle, "Flamethrower", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("flamethrower", flamethrower);

function solarBeam(target, battle) {
    const movePower = 120;
    const moveType = "grass";
    const moveCategory = "special";
    damagePhase(battle, "Solar Beam", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("solar beam", solarBeam);

function gigaDrain(target, battle) {
    const movePower = 75;
    const moveType = "grass";
    const moveCategory = "special";
    damagePhase(battle, "Giga Drain", movePower, moveType, moveCategory, this, target, true);
}
moveFuncs.set("giga drain", gigaDrain);

function hiddenPowerFire(target, battle) {
    const movePower = 60;
    const moveType = "fire";
    const moveCategory = "special";
    damagePhase(battle, "Hidden Power Fire", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("hidden power fire", hiddenPowerFire);

function scald(target, battle) {
    const movePower = 80;
    const moveType = "water";
    const moveCategory = "special";
    damagePhase(battle, "Scald", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("scald", scald);

function dragonPulse(target, battle) {
    const movePower = 85;
    const moveType = "dragon";
    const moveCategory = "special";
    damagePhase(battle, "Dragon Pulse", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("dragon pulse", dragonPulse);

function dragonClaw(target, battle) {
    const movePower = 80;
    const moveType = "dragon";
    const moveCategory = "physical";
    damagePhase(battle, "Dragon Claw", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("dragon claw", dragonClaw);

function hurricane(target, battle) {
    const movePower = 110;
    const moveType = "flying";
    const moveCategory = "special";
    damagePhase(battle, "Hurricane", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("hurricane", hurricane);

function alluringVoice(target, battle) {
    const movePower = 80;
    const moveType = "fairy";
    const moveCategory = "special";
    damagePhase(battle, "Alluring Voice", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("alluring voice", alluringVoice);

function roost(target, battle) {
    const healAmount = Math.floor(this.hp / 2);
    if ( (this.currentHp + healAmount) > this.hp) {
        this.currentHp = this.hp;
        battle.broadcast(`${sentenceCase(this.name)} used Roost! It healed to full HP!`);
        return;
    }
    this.currentHp += healAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Roost! It healed for ${healAmount} HP!`); 
}
moveFuncs.set("roost", roost);

function recover(target, battle) { 
    const healAmount = Math.floor(this.hp / 2);
    if ( (this.currentHp + healAmount) > this.hp) {
        this.currentHp = this.hp;
        battle.broadcast(`${sentenceCase(this.name)} used Recover! It healed to full HP!`);
        return;
    }
    this.currentHp += healAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Recover! It healed for ${healAmount} HP!`); 
}
moveFuncs.set("recover", recover);

function growth(target, battle) {
    const attackAmount = Math.floor(this.attack / 2);
    const spAttackAmount = Math.floor(this.spAttack / 2);
    this.currentAttack += attackAmount;
    this.currentSpAttack += spAttackAmount;

    battle.broadcast(`${sentenceCase(this.name)} used Growth! It increased it's Attack and Special Attack by 50% of base!`); 
}
moveFuncs.set("growth", growth);

function dragonDance(target, battle) {
    const attackAmount = Math.floor(this.attack / 2);
    const speedAmount = Math.floor(this.speed / 2);
    this.currentAttack += attackAmount;
    this.currentSpeed += speedAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Dragon Dance! It increased it's Attack and Speed by 50% of base!`); 
}
moveFuncs.set("dragon dance", dragonDance);