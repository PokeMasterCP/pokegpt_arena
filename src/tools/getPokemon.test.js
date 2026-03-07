import { getPokemon } from "./getPokemon.js"
import { expect, test } from "vitest"

test("invalid pokemon name", async () => {
    await expect(getPokemon("fake-achu")).rejects.toThrow("ERROR: Received 404 code for fake-achu from PokeAPI");
});