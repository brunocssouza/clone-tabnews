export default function status(request, response) {
  response.status(200).json({
    msg: "Esta é uma mensagem de status",
  });
}
