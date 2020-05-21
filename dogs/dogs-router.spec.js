const supertest = require("supertest");

const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

const Dogs = require("./dog-model.js")

afterEach(async () => {
    await db("dogs").truncate();
});

describe("server", () => {
    it("can run the tests", () => {
        expect(true).toBeTruthy();
    });

    describe("GET /", () => {
        it("should return with http status code 200 ", () => {
            return (
                supertest(server)
                    .get("/")
                    .then(response => {
                        expect(response.status).toBe(200)
                    })
            )
        })
    })

    // describe("POST and DEL", () => {
    //     it("should return with http status code 200",  () => {
    //         return supertest(server).post("/").send({
    //             "name": "Titus",
    //             "breed": "Chow-Chow",
    //             "ownerID": 6
    //         })
    //         .then(response=>{
    //             console.log(response.status)
    //             expect(response.status).toBe(201)
    //         })
    //     })
    // })

    describe("insert() and delete()", () => {
        it("Should be able to insert ", async () => {
            await Dogs.addDog({
                name: "Titus",
                breed: "Chow-Chow",
                ownerID: 6
            });
             //var dogs = await db("dogs");
            expect(await db("dogs")).toHaveLength(1)

        })
        it("Should be able to delete the inserted resource", async ()=>{
            await Dogs.delDog(1)
            expect(await db("dogs")).toHaveLength(0)
        })
    })




});