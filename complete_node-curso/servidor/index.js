const http = require("http");

const server = http.createServer();

const amigos = [
  { id: 1, nome: "Carolaine" },
  { id: 2, nome: "Arthur" },
  { id: 3, nome: "Breno" }
];

server.on("request", (req, res) => {
  const itens = req.url.split("/");

  if (req.method === "POST" && itens[1] === "amigos") {
    req.on("data", (data) => {
      const amigo = data.toString();
      console.log("Request", amigo);
      amigos.push(JSON.parse(amigo));
    });
    req.pipe(res);
  } else if (req.method === "GET" && itens[1] === "amigos") {
    res.statusCode = 200;
    res.setHeader("content-type", "application/json");
    if (itens.length === 3) {
      const amigosIndex = Number(itens[2]);
      res.end(JSON.stringify(amigos[amigosIndex]));
    }
  } else {
    res.end(JSON.stringify(amigos));
  }
});

server.listen(3000, () => {
  console.log("servidor online...");
});
