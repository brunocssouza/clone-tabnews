// Verifica se foi possível carregar a página.
test("GET test to /api/v1/status", async () => {
  const res = await fetch("http://www.localhost:3000/api/v1/status");
  expect(res.status).toBe(200);
});
