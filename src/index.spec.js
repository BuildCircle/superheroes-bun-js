import { expect, test } from "bun:test";
import startBunServer from "./index";
import request from "supertest";
const baseURL = "http://localhost:8080"

test("Server returns 200", async () => {
    const response = await request(baseURL).get("/battle?hero=Batman&villain=Joker");

    expect(response.statusCode).toBe(200);
});

test('battle should return the hero if they have a higher score', async () => {
    const response = await request(baseURL).get("/battle?hero=Batman&villain=Joker");

    expect(response.body).toEqual({ name: 'Batman', score: 10 })
})