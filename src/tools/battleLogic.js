import { sentenceCase } from "./helper.js";

function getTypeMultiplier(moveType, targetType, typeInteractions) {
    return typeInteractions[moveType][targetType] ?? 1;
}

function getSTABMultiplier(moveType, userPrimaryType, userSecondaryType) {
    if (moveType === userPrimaryType || moveType === userSecondaryType) {
        return 1.5;
    }
    return 1;
}

function getRandomMultiplier() {
    const ranNum = Math.floor(Math.random() * 16) + 85;
    return ranNum / 100;
}

function getCriticalMultiplier() {
    const ranNum = Math.floor(Math.random() * 24) + 1; // 1/24 odds of getting a crit
    if (ranNum === 1) {
        return 1.5;
    }
    return 1;
}

function getStatMultiplier(moveCategory, user, target) {
    if (moveCategory === "physical") {
        return user.attack / target.defense;
    }

    if (moveCategory === "special") {
        return (user.spAttack / target.spDefense);
    }
}

function damageReport(moveName, typeMultiple, criticalMultiple, damage, user, target) {
    const userName = sentenceCase(user.name);
    const targetName = sentenceCase(target.name);

    if (typeMultiple === 0) {
        console.log(`${userName} used ${moveName} but ${targetName} was immune!!`);
        return;
    }

    if (criticalMultiple > 1) {
        console.log("Critical Hit!!!\n");
    }

    if (typeMultiple > 1) {
        console.log(`${userName} used ${moveName} and it was Super Effective!! Dealt ${damage} damage to ${targetName}`);
        return;
    }

    if (typeMultiple < 1) {
        console.log(`${userName} used ${moveName} but it was resisted! Dealt ${damage} to ${targetName}`);
        return;
    }

    console.log(`${userName} used ${moveName}! Dealt ${damage} to ${targetName}`);



}

export function damagePhase(typeInteractions, moveName, movePower, moveType, moveCategory, user, target) {
    let typeMultiple = getTypeMultiplier(moveType, target.primaryType, typeInteractions);
    if (target.secondaryType) {
        typeMultiple *= getTypeMultiplier(moveType, target.secondaryType, typeInteractions);
    }

    const stabMultiple = getSTABMultiplier(moveType, user.primaryType, user.secondaryType);
    const randomMultiple = getRandomMultiplier();
    const criticalMultiple = getCriticalMultiplier();
    const statMultiple = getStatMultiplier(moveCategory, user, target);
    
    const damage = Math.floor(((( 22 * movePower * statMultiple) / 50) + 2) * criticalMultiple * randomMultiple * stabMultiple * typeMultiple);
    target.currentHp -= damage;
    damageReport(moveName, typeMultiple, criticalMultiple, damage, user, target);
}