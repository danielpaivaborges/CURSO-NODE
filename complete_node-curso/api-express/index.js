"use strict";
const express = require("express");
const app = express();
const amigos = [
  { id: 0, nome: "daniel" },
  { id: 1, nome: "arthur" },
  { id: 2, nome: "carolaine" }
];

//criando middleware
app.use(function (req, res, next) {
  const inicio = Date.now();
  next();
  //a execução retorna aqui
  const tempo = Date.now() - inicio;
  console.log(`${req.method} - ${req.url}`);
  console.log(`o programa gastou ${tempo} milisegundos para ser executado`);
});

app.use(express.json());

app.get("/amigos", (req, res) => {
  res.json(amigos);
});

app.get("/amigos/:amigoId", (req, res) => {
  const amigoID = Number(req.params.amigoId);
  const amigo = amigos[amigoID];
  if (amigo) {
    res.json(amigo);
  } else {
    res.status(404).json({ mensagem: "Amigo não encontrado" });
  }
});

//criando amigos
app.post("/amigos", (req, res) => {
  if (req.body.nome) {
    const novoAmigo = { nome: req.body.nome, id: amigos.length };
    amigos.push(novoAmigo);
    res.json(novoAmigo);
  } else {
    res.status(400).json({
      mensagem: "não foi fornecido um nome válido."
    });
  }
});

app.listen(21005, () => {
  console.log("servidor online...");
});
