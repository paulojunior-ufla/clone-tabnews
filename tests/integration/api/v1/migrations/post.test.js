import database from "infra/database";

beforeAll(cleanDatabase);

async function cleanDatabase() {
  await database.query("drop schema public cascade; create schema public;");
}

test("POST /api/v1/migrations return 200", async () => {
  const responseGet = await fetch("http://localhost:3000/api/v1/migrations");
  const responsePost = await fetch("http://localhost:3000/api/v1/migrations", {
    method: "POST",
  });

  expect(responseGet.status).toBe(200);
  expect(responsePost.status).toBe(200);

  const responseBodyGet = await responseGet.json();
  const responseBodyPost = await responsePost.json();

  expect(responseBodyGet).toEqual(responseBodyPost);
});
