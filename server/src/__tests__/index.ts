import app from "../app";
import request from "supertest";

describe("Get / - simple endpoint", () => {
  it("API request", async () => {
    const result = await request(app).get("/").send();

    expect(result.body).toEqual("Hi");
  });
});
