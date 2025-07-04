import http from "node:http";

// Qual é a utilidade de uma API?
// - Criar um recurso no back-end
// - Listar um recurso no back-end
// - Editar um recurso no back-end
// - Remover um recurso no back-end

// O que é uma API RESTful? Qual a sua utilidade?
//  - Métodos HTTP
//  - URL

// Os 5 Principais Métodos HTTP
// GET => Buscar um recurso do back-end
// POST => Criar um recurso no back-end
// PUT => Atualizar um recurso no back-end
// PATCH => Atualizar uma informação específica de um recurso no back-end
// DELETE => Deletar um recurso do back-end

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // GET /users => Buscando usuários no banc-end
  if(method === "GET" && url === "/users") {
    return res.end("Lista de usuários")
  }

  // POST /users => Criar um usuário no back-end
  if(method === "GET" && url === "/users") {
    return res.end("Cria um usuários e adiciona à lista de usuários")
  }

  return res.end("Hellow, World!");
});

server.listen(3333);
