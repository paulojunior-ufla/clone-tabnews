function status(request, response) {
  response.status(200).json({ chave: "funcionou bão" });
}

export default status;
