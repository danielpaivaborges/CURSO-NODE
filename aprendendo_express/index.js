const express = require("express");

const app = express();
const porta = 21179;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  res.render("index");
});

//criando uma rota com parametro
app.get("/user/:nome", (req, res) => {
  let nomeInformado = req.params.nome;
  res.send(`olá ${nomeInformado}, seja muito bem vindo`);
  res.end();
});

//criando rota com mais de um parametro, e sendo este parametro opcional
app.get("/user/:nome/:empresa?", (req, res) => {
  const nome = req.params.nome;
  const empresa = req.params.empresa;
  res.send(`olá ${nome}, fiquei sabendo que vc trabalha na empresa ${empresa}`);
  res.end();
});

//utilizando query params, no caso a url fica assim http://www.everos.com.br:21179/canal?dia=5
app.get("/canal", (req, res) => {
  const dia = req.query.dia | 'nada';

  res.send(`olá, você nasceu no dia ${dia}`);
  res.end();
});

app.listen(porta, (error) => {
  if (error) {
    console.log(error);
  } else {
    console.log(`Servidor online na porta ${porta}`);
  }
});
