"use strict";
const express = require("express");
const app = express();
const amigos = [
  { id: 0, nome: "daniel" },
  { id: 1, nome: "arthur" },
  { id: 2, nome: "carolaine" }
];

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

app.listen(21005, () => {
  console.log("servidor online...");
});
