const request = require("supertest");
const connection = require("../../src/database")
const app = require("../../src/app");
const truncate = require("./truncate");

const { cpf } = require("cpf-cnpj-validator");

describe('MANAGERS', ( ) => {
    afterAll(( ) => {
        connection.close();
    })

    beforeEach(async ( done )=>{
        await truncate(connection.models);

        done();
    })
    it("se e possivel criar um novo gerente", async ( ) => {
        const response  = await request(app).post("/managers").send({
            name: "iuri", 
            cpf: cpf.generate(),
            email: "iuri@gmail.com",
            cellphone: "23456787654",
            password: "323434",
        });

        expect(response.ok).toBeTruthy();

        expect(response.body).toHaveProperty("id");
    } );
    it("não pode ser possivel cadastrar um gerente com cpf existente",async() => {
        let CPF = cpf.generate();
        let response  = await request(app).post("/managers").send({
            name: "iuri", 
            cpf: CPF,
            email: "iuri@gmail.com",
            cellphone: "23456787654",
            password: "323434",
        });
        response  = await request(app).post("/managers").send({
            name: "eeiuri", 
            cpf: CPF,
            email: "ieeeuri@gmail.com",
            cellphone: "332347654",
            password: "323333434",
        });

        
        expect(response.ok).toBeFalsy();
        expect(response.body).toHaveProperty("error");
        expect(response.body.error).toEqual("cpf already exists")
        
    })
});
