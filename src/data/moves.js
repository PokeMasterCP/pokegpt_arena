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

function ironHead(target, battle) {
    const movePower = 80;
    const moveType = "steel";
    const moveCategory = "physical";
    damagePhase(battle, "Iron Head", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("iron head", ironHead);

function ironTail(target, battle) {
    const movePower = 100;
    const moveType = "steel";
    const moveCategory = "physical";
    damagePhase(battle, "Iron Tail", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("iron tail", ironTail);

function flashCannon(target, battle) {
    const movePower = 80;
    const moveType = "steel";
    const moveCategory = "special";
    damagePhase(battle, "Flash Cannon", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("flash cannon", flashCannon);

function ironDefense(target, battle) {
    const defenseAmount = Math.floor(this.defense);
    this.currentDefense += defenseAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Iron Defense! It sharply raised it's Defense!`);
}
moveFuncs.set("iron defense", ironDefense);

function crunch(target, battle) {
    const movePower = 80;
    const moveType = "dark";
    const moveCategory = "physical";
    damagePhase(battle, "Crunch", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("crunch", crunch);

function knockOff(target, battle) {
    const movePower = 65;
    const moveType = "dark";
    const moveCategory = "physical";
    damagePhase(battle, "Knock Off", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("knock off", knockOff);

function darkPulse(target, battle) {
    const movePower = 80;
    const moveType = "dark";
    const moveCategory = "special";
    damagePhase(battle, "Dark Pulse", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("dark pulse", darkPulse);

function nastyPlot(target, battle) {
    const spAttackAmount = Math.floor(this.spAttack);
    this.currentSpAttack += spAttackAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Nasty Plot! It sharply raised it's Special Attack!`);
}
moveFuncs.set("nasty plot", nastyPlot);

function stoneEdge(target, battle) {
    const movePower = 100;
    const moveType = "rock";
    const moveCategory = "physical";
    damagePhase(battle, "Stone Edge", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("stone edge", stoneEdge);

function rockSlide(target, battle) {
    const movePower = 75;
    const moveType = "rock";
    const moveCategory = "physical";
    damagePhase(battle, "Rock Slide", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("rock slide", rockSlide);

function powerGem(target, battle) {
    const movePower = 80;
    const moveType = "rock";
    const moveCategory = "special";
    damagePhase(battle, "Power Gem", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("power gem", powerGem);

function rockWrecker(target, battle) {
    const movePower = 150;
    const moveType = "rock";
    const moveCategory = "physical";
    damagePhase(battle, "Rock Wrecker", movePower, moveType, moveCategory, this, target);
    this.resting++;
}
moveFuncs.set("rock wrecker", rockWrecker);

function xScissor(target, battle) {
    const movePower = 80;
    const moveType = "bug";
    const moveCategory = "physical";
    damagePhase(battle, "X-Scissor", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("x-scissor", xScissor);

function bugBuzz(target, battle) {
    const movePower = 90;
    const moveType = "bug";
    const moveCategory = "special";
    damagePhase(battle, "Bug Buzz", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("bug buzz", bugBuzz);

function leechLife(target, battle) {
    const movePower = 80;
    const moveType = "bug";
    const moveCategory = "physical";
    damagePhase(battle, "Leech Life", movePower, moveType, moveCategory, this, target, true);
}
moveFuncs.set("leech life", leechLife);

function icePunch(target, battle) {
    const movePower = 75;
    const moveType = "ice";
    const moveCategory = "physical";
    damagePhase(battle, "Ice Punch", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("ice punch", icePunch);

function blizzard(target, battle) {
    const movePower = 110;
    const moveType = "ice";
    const moveCategory = "special";
    damagePhase(battle, "Blizzard", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("blizzard", blizzard);

function freezeDry(target, battle) {
    const movePower = 70;
    const moveType = "ice";
    const moveCategory = "special";
    damagePhase(battle, "Freeze-Dry", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("freeze-dry", freezeDry);

function moonblast(target, battle) {
    const movePower = 95;
    const moveType = "fairy";
    const moveCategory = "special";
    damagePhase(battle, "Moonblast", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("moonblast", moonblast);

function playRough(target, battle) {
    const movePower = 90;
    const moveType = "fairy";
    const moveCategory = "physical";
    damagePhase(battle, "Play Rough", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("play rough", playRough);

function dazzlingGleam(target, battle) {
    const movePower = 80;
    const moveType = "fairy";
    const moveCategory = "special";
    damagePhase(battle, "Dazzling Gleam", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("dazzling gleam", dazzlingGleam);

function moonlight(target, battle) {
    const healAmount = Math.floor(this.hp / 2);
    if ( (this.currentHp + healAmount) > this.hp) {
        this.currentHp = this.hp;
        battle.broadcast(`${sentenceCase(this.name)} used Moonlight! It healed to full HP!`);
        return;
    }
    this.currentHp += healAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Moonlight! It healed for ${healAmount} HP!`);
}
moveFuncs.set("moonlight", moonlight);

function waterfall(target, battle) {
    const movePower = 80;
    const moveType = "water";
    const moveCategory = "physical";
    damagePhase(battle, "Waterfall", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("waterfall", waterfall);

function surf(target, battle) {
    const movePower = 90;
    const moveType = "water";
    const moveCategory = "special";
    damagePhase(battle, "Surf", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("surf", surf);

function hydroPump(target, battle) {
    const movePower = 110;
    const moveType = "water";
    const moveCategory = "special";
    damagePhase(battle, "Hydro Pump", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("hydro pump", hydroPump);

function shadowClaw(target, battle) {
    const movePower = 70;
    const moveType = "ghost";
    const moveCategory = "physical";
    damagePhase(battle, "Shadow Claw", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("shadow claw", shadowClaw);

function closeCombat(target, battle) {
    const movePower = 120;
    const moveType = "fighting";
    const moveCategory = "physical";
    damagePhase(battle, "Close Combat", movePower, moveType, moveCategory, this, target);
    this.currentDefense -= Math.floor(this.defense / 2);
    this.currentSpDefense -= Math.floor(this.spDefense / 2);
    battle.broadcast(`${sentenceCase(this.name)}'s Defense and Special Defense fell!`);
}
moveFuncs.set("close combat", closeCombat);

function drainPunch(target, battle) {
    const movePower = 75;
    const moveType = "fighting";
    const moveCategory = "physical";
    damagePhase(battle, "Drain Punch", movePower, moveType, moveCategory, this, target, true);
}
moveFuncs.set("drain punch", drainPunch);

function bulkUp(target, battle) {
    const attackAmount = Math.floor(this.attack / 2);
    const defenseAmount = Math.floor(this.defense / 2);
    this.currentAttack += attackAmount;
    this.currentDefense += defenseAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Bulk Up! It increased it's Attack and Defense by 50% of base!`);
}
moveFuncs.set("bulk up", bulkUp);

function meteorAssault(target, battle) {
    const movePower = 150;
    const moveType = "fighting";
    const moveCategory = "physical";
    damagePhase(battle, "Meteor Assault", movePower, moveType, moveCategory, this, target);
    this.resting++;
}
moveFuncs.set("meteor assault", meteorAssault);

function firePunch(target, battle) {
    const movePower = 75;
    const moveType = "fire";
    const moveCategory = "physical";
    damagePhase(battle, "Fire Punch", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("fire punch", firePunch);

function flareBlitz(target, battle) {
    const movePower = 120;
    const moveType = "fire";
    const moveCategory = "physical";
    damagePhase(battle, "Flare Blitz", movePower, moveType, moveCategory, this, target, false, 0.33);
}
moveFuncs.set("flare blitz", flareBlitz);

function wildCharge(target, battle) {
    const movePower = 90;
    const moveType = "electric";
    const moveCategory = "physical";
    damagePhase(battle, "Wild Charge", movePower, moveType, moveCategory, this, target, false, 0.25);
}
moveFuncs.set("wild charge", wildCharge);

function voltSwitch(target, battle) {
    const movePower = 70;
    const moveType = "electric";
    const moveCategory = "special";
    damagePhase(battle, "Volt Switch", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("volt switch", voltSwitch);

function thunderPunch(target, battle) {
    const movePower = 75;
    const moveType = "electric";
    const moveCategory = "physical";
    damagePhase(battle, "Thunder Punch", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("thunder punch", thunderPunch);

function leafBlade(target, battle) {
    const movePower = 90;
    const moveType = "grass";
    const moveCategory = "physical";
    damagePhase(battle, "Leaf Blade", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("leaf blade", leafBlade);

function energyBall(target, battle) {
    const movePower = 90;
    const moveType = "grass";
    const moveCategory = "special";
    damagePhase(battle, "Energy Ball", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("energy ball", energyBall);

function hornLeech(target, battle) {
    const movePower = 75;
    const moveType = "grass";
    const moveCategory = "physical";
    damagePhase(battle, "Horn Leech", movePower, moveType, moveCategory, this, target, true);
}
moveFuncs.set("horn leech", hornLeech);

function synthesis(target, battle) {
    const healAmount = Math.floor(this.hp / 2);
    if ( (this.currentHp + healAmount) > this.hp) {
        this.currentHp = this.hp;
        battle.broadcast(`${sentenceCase(this.name)} used Synthesis! It healed to full HP!`);
        return;
    }
    this.currentHp += healAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Synthesis! It healed for ${healAmount} HP!`);
}
moveFuncs.set("synthesis", synthesis);

function braveBird(target, battle) {
    const movePower = 120;
    const moveType = "flying";
    const moveCategory = "physical";
    damagePhase(battle, "Brave Bird", movePower, moveType, moveCategory, this, target, false, 0.33);
}
moveFuncs.set("brave bird", braveBird);

function airSlash(target, battle) {
    const movePower = 75;
    const moveType = "flying";
    const moveCategory = "special";
    damagePhase(battle, "Air Slash", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("air slash", airSlash);

function poisonJab(target, battle) {
    const movePower = 80;
    const moveType = "poison";
    const moveCategory = "physical";
    damagePhase(battle, "Poison Jab", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("poison jab", poisonJab);

function outrage(target, battle) {
    const movePower = 120;
    const moveType = "dragon";
    const moveCategory = "physical";
    damagePhase(battle, "Outrage", movePower, moveType, moveCategory, this, target);
    this.resting++;
}
moveFuncs.set("outrage", outrage);

function dracoMeteor(target, battle) {
    const movePower = 130;
    const moveType = "dragon";
    const moveCategory = "special";
    damagePhase(battle, "Draco Meteor", movePower, moveType, moveCategory, this, target);
    this.currentSpAttack -= Math.floor(this.spAttack);
    battle.broadcast(`${sentenceCase(this.name)}'s Special Attack sharply fell!`);
}
moveFuncs.set("draco meteor", dracoMeteor);

function facade(target, battle) {
    const movePower = 70;
    const moveType = "normal";
    const moveCategory = "physical";
    damagePhase(battle, "Facade", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("facade", facade);

function swordsDance(target, battle) {
    const attackAmount = Math.floor(this.attack);
    this.currentAttack += attackAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Swords Dance! It sharply raised it's Attack!`);
}
moveFuncs.set("swords dance", swordsDance);

function slackOff(target, battle) {
    const healAmount = Math.floor(this.hp / 2);
    if ( (this.currentHp + healAmount) > this.hp) {
        this.currentHp = this.hp;
        battle.broadcast(`${sentenceCase(this.name)} used Slack Off! It healed to full HP!`);
        return;
    }
    this.currentHp += healAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Slack Off! It healed for ${healAmount} HP!`);
}
moveFuncs.set("slack off", slackOff);

function psyshock(target, battle) {
    const movePower = 80;
    const moveType = "psychic";
    const moveCategory = "special";
    damagePhase(battle, "Psyshock", movePower, moveType, moveCategory, this, target);
}
moveFuncs.set("psyshock", psyshock);

function calmMind(target, battle) {
    const spAttackAmount = Math.floor(this.spAttack / 2);
    const spDefenseAmount = Math.floor(this.spDefense / 2);
    this.currentSpAttack += spAttackAmount;
    this.currentSpDefense += spDefenseAmount;
    battle.broadcast(`${sentenceCase(this.name)} used Calm Mind! It increased it's Special Attack and Special Defense by 50% of base!`);
}
moveFuncs.set("calm mind", calmMind);

function prismaticLaser(target, battle) {
    const movePower = 150;
    const moveType = "psychic";
    const moveCategory = "special";
    damagePhase(battle, "Prismatic Laser", movePower, moveType, moveCategory, this, target);
    this.resting++;
}
moveFuncs.set("prismatic laser", prismaticLaser);