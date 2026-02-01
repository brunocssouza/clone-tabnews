import database from "../../../../infra/database";

export default async function status(request, response) {
  const result = await database.query("SELECT 1 + 1 AS sum;");
  console.log(result.rows);
  response.status(200).json({
    msg: "Esta é uma mensagem de status",
  });
}
