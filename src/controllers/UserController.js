// Um controlador é o responsável por armazenar toda a regra de negócio da nossa aplicação
const users = require("../mocks/users");

module.exports = {
  listUsers(request, response) {
    response.writeHead(200, { "Content-Type": "text/json" });
    response.end(JSON.stringify(users));
  }
};