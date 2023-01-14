// Um controlador é o responsável por armazenar toda a regra de negócio da nossa aplicação
const users = require("../mocks/users");

module.exports = {
  listUsers(request, response) {
    const { order } = request.query;
    
    const sortedUsers = users.sort((a, b) => {
      if (order === "desc") {
        return a.id < b.id ? 1 : -1;
      }

      return a.id > b.id ? 1 : -1;
    });

    response.writeHead(200, { "Content-Type": "text/json" });
    response.end(JSON.stringify(sortedUsers));
  }
};