const generateId = require("../../src/utils/generateUUID");


describe("generateUUID", () => {
    it("se é possivel gerar um id unico", () => {
        const id = generateId();

        expect ( id ).toBeDefined ( );
        expect ( typeof id ).toBe ( "string" );
        expect ( id ).toHaveLength ( 36 );
    })
});