// tests/resource.test.ts
import request from "supertest";
import app from "../app";

describe("Resource API", () => {
  it("should create resource", async () => {
    const res = await request(app)
      .post("/resources")
      .send({
        name: "BTC",
        type: "crypto",
        status: "active"
      });

    expect(res.statusCode).toBe(201);
  });

  it("should get resources", async () => {
    const res = await request(app).get("/resources");

    expect(res.statusCode).toBe(200);
  });
});