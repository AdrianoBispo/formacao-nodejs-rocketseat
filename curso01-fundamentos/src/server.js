import http from "node:http";

/* Para quê serve e o que podemos fazer com o HTTP e seus métodos?

  O HTTP (Hypertext Transfer Protocol) é o protocolo fundamental para a comunicação na web, permitindo
  a troca de dados entre clientes (como navegadores) e servidores. Seus métodos definem as ações que
  podem ser realizadas nesses requests. Basicamente, o HTTP permite que você acesse páginas web, envie
  formulários, utilize APIs e muito mais.

*/

/* O que é uma API RESTful? Qual a sua utilidade?

  Uma API RESTful é um conjunto de princípios e padrões para projetar interfaces de programação de
  aplicações (APIs) que utilizam a arquitetura REST (Representational State Transfer) para comunicação
  entre sistemas. Em termos simples, é uma forma padronizada de um sistema de software se comunicar com
  outro através da internet, utilizando requisições HTTP para acessar e manipular recursos.

*/

/* Os 5 Principais Métodos HTTP
  GET => Buscar um recurso do back-end
  POST => Criar um recurso no back-end
  PUT => Atualizar um recurso no back-end
  PATCH => Atualizar uma informação específica de um recurso no back-end
  DELETE => Deletar um recurso do back-end
*/

/* Stateful vs Stateless

  Em computação, sistemas stateful mantêm e acessam informações sobre o estado das interações
  anteriores, enquanto sistemas stateless não guardam esse histórico, tratando cada interação como nova
  e independente. Essencialmente, o estado se refere à informação sobre o que aconteceu antes, e a
  forma como essa informação é gerenciada define se um sistema é stateful ou stateless. 

*/

/* Cabeçalhos(Headers) HTTP

  Em HTTP, cabeçalhos HTTP são campos de metadados que acompanham as requisições e respostas HTTP. Eles
  fornecem informações adicionais sobre a mensagem, como tipo de conteúdo, idioma, informações de
  autenticação e controle de cache. Esses cabeçalhos ajudam o cliente e o servidor a entender e
  processar corretamente a comunicação. 

*/

/* HTTP - Status Code

  Os códigos de status HTTP são números de três dígitos que indicam o resultado de uma solicitação
  HTTP. Eles são divididos em cinco classes, cada uma representando um tipo de resposta: informacional
  (1xx), sucesso (2xx), redirecionamento (3xx), erro do cliente (4xx) e erro do servidor (5xx). 

*/

const users = [];

const server = http.createServer((req, res) => {
  const { method, url } = req;

  // GET /users => Buscando usuários no banc-end
  if (method === "GET" && url === "/users") {
    return res
      .setHeader("Content-type", "application-json")
      .end(JSON.stringify(users));
  }

  // POST /users => Criar um usuário no back-end
  if (method === "POST" && url === "/users") {

    // Adiciona usuário à lista de usuários
    users.push({
      id: 1,
      name: "John Doe",
      email: "johndoe@example.com",
    });

    return res.writeHead(201).end()
  }

  return res.writeHead(404).end()
});

server.listen(3333);
