const items = require("./data.js");
const server = require("./index.js");
const supertest = require("supertest");
const requestWithSupertest = supertest(server);

const items = [
  { id: 1, name: "Milk", price: 1.29 },
  { id: 2, name: "Eggs", price: 1.09 },
  { id: 3, name: "Flour", price: 1.19 },
  { id: 4, name: "Sugar", price: 1.39 },
];

describe("Requests", () => {
  it("get", async () => {
    const res = await requestWithSupertest.get("/");
    expect(res.status).toEqual(200);
    expect(res.body).toEqual([{ id: 1, name: "Bread", price: 2.0 }]);
  });

  //   it("POST items", async () => {
  //     const postData = {};

  //     await requestWithSupertest
  //       .post("*ROUTE*")
  //       .send(postData)
  //       .then((res) => {
  //         expect(res.status).toEqual(200);
  //       });
  //   });
});
