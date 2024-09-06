"use strict";
const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  const readableStream = fs.createReadStream("teste.txt");

  res.writeHead(200, { "content-type": "text/plain" });
  readableStream.pipe(res);
  //res.write(readableStream)
});

server.listen(3000, () => {
  console.log("servidor ativo");
});
