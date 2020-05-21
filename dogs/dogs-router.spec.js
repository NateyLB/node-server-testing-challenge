const supertest = require("supertest");

const server = require("../api/server.js");
const db = require("../data/dbConfig.js");

afterEach(async () => {
    await db("dogs").truncate();
  });
  
  describe("server", () => {
    it("can run the tests", () => {
      expect(true).toBeTruthy();
    });


 




});