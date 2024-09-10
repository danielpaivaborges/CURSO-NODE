"use strict";
const express = require("express");
const amigosController = require("./controllers/amigos.controller");


const app = express();
const amigosRouter = express.Router()

 app.use('/amigos', amigosRouter)

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

amigosRouter.get("/", amigosController.getFriends);
amigosRouter.get("/:amigoId", amigosController.getFriend);
amigosRouter.post("", amigosController.postFriend);

app.listen(21005, () => {
  console.log("servidor online...");
});
