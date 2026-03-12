import { damagePhase } from "./battleLogic.js";
import { expect, test, vi, afterEach } from "vitest";
import { readFile } from "node:fs/promises"

const contents = await readFile("./src/data/typeInteractions.json", "utf-8");
const fakeBattle = {
    "typeInteractions": JSON.parse(contents),
    broadcast: () => {}
}

const fakeAttacker = {
    "currentHp": 100,
    "currentAttack": 100,
    "currentDefense": 100,
    "currentSpAttack": 100,
    "currentSpDefense": 100,
    "currentSpeed": 100
};

const fakeDefender = {
    "currentHp": 100,
    "currentAttack": 100,
    "currentDefense": 100,
    "currentSpAttack": 100,
    "currentSpDefense": 100,
    "currentSpeed": 100
};

afterEach( () => {
    fakeDefender.currentHp = 100;
    vi.resetAllMocks();
});

// Damage cheat sheet for tests: 46 * crit * 0.93 * STAB * Super Effective
test("critical hit", async () => {
    fakeAttacker.primaryType = "normal";
    fakeDefender.primaryType = "normal";
    const spy = vi.spyOn(Math, 'random').mockReturnValueOnce(0.5).mockReturnValue(0);
    await damagePhase(fakeBattle, "earthquake", 100, "ground", "physical", fakeAttacker, fakeDefender);
    expect(fakeDefender.currentHp).toBe(36);
});

test("non critical hit", async () => {
    fakeAttacker.primaryType = "normal";
    fakeDefender.primaryType = "normal";
    const spy = vi.spyOn(Math, 'random').mockReturnValueOnce(0.5).mockReturnValue(5);
    await damagePhase(fakeBattle, "earthquake", 100, "ground", "physical", fakeAttacker, fakeDefender);
    expect(fakeDefender.currentHp).toBe(58);
});

test("super effective", async () => {
    fakeAttacker.primaryType = "normal";
    fakeDefender.primaryType = "steel";
    const spy = vi.spyOn(Math, 'random').mockReturnValueOnce(0.5).mockReturnValue(5);
    await damagePhase(fakeBattle, "earthquake", 100, "ground", "physical", fakeAttacker, fakeDefender);
    expect(fakeDefender.currentHp).toBe(16);
});

test("double super effective", async () => {
    fakeAttacker.primaryType = "normal";
    fakeDefender.primaryType = "flying";
    fakeDefender.secondaryType = "fire";
    const spy = vi.spyOn(Math, 'random').mockReturnValueOnce(0.5).mockReturnValue(5);
    await damagePhase(fakeBattle, "earthquake", 100, "rock", "physical", fakeAttacker, fakeDefender);
    expect(fakeDefender.currentHp).toBe(-68);
});

test("immunity", async () => {
    fakeAttacker.primaryType = "normal";
    fakeDefender.primaryType = "ghost";
    fakeDefender.secondaryType = "fire";
    const spy = vi.spyOn(Math, 'random').mockReturnValueOnce(0.5).mockReturnValue(5);
    await damagePhase(fakeBattle, "earthquake", 100, "fighting", "physical", fakeAttacker, fakeDefender);
    expect(fakeDefender.currentHp).toBe(100);
});