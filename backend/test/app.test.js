const request = require("supertest");

const app = require("../src/app");

describe("GET /", () => {
  it("responds with Hello Backend Developer!", (done) => {
    request(app).get("/").expect("Hello Backend Developer!", done);
  });
});
