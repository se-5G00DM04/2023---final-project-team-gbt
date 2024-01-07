const request = require("supertest");

const app = require("../src/app");

describe("GET /", () => {
  it("responds with Hello Backend Developer!", (done) => {
    request(app).get("/").expect("Hello Backend Developer!", done);
  });
});

describe("GET /api", () => {
  it("responds with a message", (done) => {
    request(app).get("/api").expect("My super duper TeamGBT!", done);
  });
});

describe("GET /api/shopping", () => {
  it("responds with a json message", (done) => {
    request(app)
      .get("/api/shopping")
      .expect("Content-Type", /json/)
      .expect(
        200,
        [
          { name: "Apple", items: 5, id: 1 },
          { name: "Banana", items: 20, id: 2 },
          { name: "Orange", items: 25, id: 3 },
        ],
        done
      );
  });
});

describe("POST /api/shopping", () => {
  it("responds with a json message", (done) => {
    request(app)
      .post("/api/shopping")
      .send({ name: "Apple", items: 5 })
      .expect("Content-Type", /json/)
      .expect(201, { name: "Apple", items: 5, id: 4 }, done);
  });
});

describe("DELETE /api/shopping/:id", () => {
  it("responds with a json message", (done) => {
    request(app)
      .delete("/api/shopping/4")
      .expect("Content-Type", /json/)
      .expect(200, { message: "Shopping deleted" }, done);
  });
});
