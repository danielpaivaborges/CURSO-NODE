const express = require("express");

const app = express();
const conexao = require("./database/database");

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

conexao.authenticate().then(() => {
  console.log("banco de dados conectado com sucesso...");
});

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/perguntar", (req, res) => {
  res.render("perguntar");
});

app.post("/salvarpergunta", (req, res) => {
  const titulo = req.body.titulo;
  const descricao = req.body.descricao;
  res.send(`o titulo ${titulo} tem o valor ${descricao}`);
});

app.listen(21005, () => {
  console.log("servidor ativado com sucesso...");
});
