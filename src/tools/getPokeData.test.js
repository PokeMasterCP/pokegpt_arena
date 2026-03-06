import { getPokeData } from "./getPokeData"
import { expect, test } from "vitest"

test("invalid pokemon name", () => {
    expect(getPokeData("fake-achu")).throw;
});
    
