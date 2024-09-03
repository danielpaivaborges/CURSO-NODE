"use strict";
const express = require("express");
//importando o banco
const conexao = require("./database/database.js");
//importando os models
const perguntaModel = require("./models/pergunta.js");

//atribuindo express ao app
const app = express();

//configurando a aplicação
app.set("view engine", "ejs");
app.use(express.static("public"));
//ESTA PARTE É ESSENCIAL PARA RECEBER OS DADOS DOS FORMULÁRIOS
app.use(express.json()); //ESTE É MAIS USADO COM API
app.use(express.urlencoded({ extended: false }));

//iniciando conexao
conexao
  .authenticate()
  .then(() => {
    console.log("banco de dados conectado com sucesso...");
  })
  .catch((error) => {
    console.log("houve um erro...", error);
  });

//ROTAS
//criando a rota principal
app.get("/", (req, res) => {
  res.render("index");
});

//criando a rota de perguntas
app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});
//RECEBENDO DADOS DO FORMULÁRIO
app.post("/salvarpergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  perguntaModel.create({ titulo, descricao }).then(() => res.redirect("/"));
});

//criando o servidor
app.listen(21005, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log("Servidor iniciado com sucesso!!!");
  }
});
