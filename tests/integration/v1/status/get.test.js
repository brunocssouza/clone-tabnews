test("GET to /api/v1/status", async () => {
  const response = await fetch("http://www.localhost:3000/api/v1/status");
  expect(response.status).toBe(200);
  const responseBody = await response.json();
  console.log(responseBody);

  // updated_at
  const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
  expect(responseBody.updated_at).toEqual(parsedUpdatedAt); // Verifica se é nulo

  // database
  expect(responseBody.dependencies.database.version).toEqual(16.11);
  expect(responseBody.dependencies.database.max_connections).toEqual(100);
  expect(responseBody.dependencies.database.opened_connections).toEqual(1);
});
