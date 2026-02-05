const { query } = require("infra/database");

beforeAll(async () => {
  await query("DROP SCHEMA public CASCADE; CREATE SCHEMA public");
});

test("GET to /api/v1/migrations", async () => {
  const response = await fetch("http://www.localhost:3000/api/v1/migrations");
  expect(response.status).toBe(200);
  const responseBody = await response.json();

  expect(Array.isArray(responseBody)).toBe(true);
  expect(responseBody.length).toBeGreaterThan(0);

  console.log(responseBody);
});
