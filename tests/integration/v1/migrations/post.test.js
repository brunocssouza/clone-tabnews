const { query } = require("infra/database");

beforeAll(async () => {
  await query("DROP SCHEMA public CASCADE; CREATE SCHEMA public");
});

test("POST to /api/v1/migrations", async () => {
  const response1 = await fetch("http://www.localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response1.status).toBe(201);
  const response1Body = await response1.json();
  expect(response1Body.length).toBeGreaterThan(0);
  console.log(response1Body);

  //
  const response2 = await fetch("http://www.localhost:3000/api/v1/migrations", {
    method: "POST",
  });
  expect(response2.status).toBe(200);
  const response2Body = await response2.json();
  expect(response2Body.length).toBe(0);
  console.log(response2Body);
});
