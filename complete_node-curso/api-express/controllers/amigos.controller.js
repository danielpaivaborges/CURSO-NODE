"use strict";

const amigos = require("../models/amigos.model");

//criando amigos
function postFriend(req, res) {
  if (req.body.nome) {
    const novoAmigo = { nome: req.body.nome, id: amigos.length };
    amigos.push(novoAmigo);
    res.json(novoAmigo);
  } else {
    res.status(400).json({
      mensagem: "não foi fornecido um nome válido."
    });
  }
}

function getFriend(req, res) {
  const amigoID = Number(req.params.amigoId);
  const amigo = amigos[amigoID];
  if (amigo) {
    res.json(amigo);
  } else {
    res.status(404).json({ mensagem: "Amigo não encontrado" });
  }
}

function getFriends(req, res) {
  res.json(amigos);
}

module.exports = {
  postFriend,
  getFriend,
  getFriends
};
