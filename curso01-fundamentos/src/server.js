import http from "node:http";

const server = http.createServer((request, response) => {
  return response.end("Hellow, World!");
});

server.listen(3333);
