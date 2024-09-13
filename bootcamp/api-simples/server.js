"use strict";
const fs = require("fs");
const http = require("http");
const url = require("url");

const replaceTemplate = (temp, product) => {
  let output = temp.replace("{%IMAGE%}", product.image);
  output = output.replace("{%PRICE%}", product.price);
  output = output.replace("{%NUTRIENTS%}", product.nutrients);
  output = output.replace("{%FROM%}", product.from);
  output = output.replace("{%QUANTITY%}", product.quantity);
  output = output.replace("{%DESCRIPTION%}", product.description);
  output = output.replace("{%uvapassa%}", product.productName);
  output = output.replace("{%ID%}", product.id);
  if (!product.organic)
    output = output.replace("{%NOT_ORGANIC%}", "not-organic");
  return output;
};

//lendo o arquivo
const dados = fs.readFileSync(`${__dirname}/data.json`, "utf-8");
//carregando os templates
const tempOverview = fs.readFileSync(
  `${__dirname}/templates/template_overview.html`,
  "utf-8"
);

const tempProduct = fs.readFileSync(
  `${__dirname}/templates/product.html`,
  "utf-8"
);
const tempCard = fs.readFileSync(`${__dirname}/templates/card.html`, "utf-8");
//carregando os dados em um objeto
const dadosObjeto = JSON.parse(dados);
const servidor = http.createServer((req, res) => {
  const link = req.url
  const { query, pathName } = url.parse(req.url, true);

  //overview page
  if (link === "/" || link === "/overview") {
    res.writeHead(200, { "Content-Type": "text/html" });
    const cardsHTML = dadosObjeto
      .map((el) => replaceTemplate(tempCard, el))
      .join("");
    const output = tempOverview.replace("{%PRODUCT_CARDS%}", cardsHTML);
    res.end(output);
    //product page
  } else if (link === `/product?id=${query.id}`) {
    res.writeHead(200, { "Content-Type": "text/html" });
    const product = dadosObjeto[query.id];
    const output = replaceTemplate(tempProduct, product)
    res.end(output);
    //not found page
  } else {
    res.writeHead(404, {
      "content-type": "text/html",
      "texto-que-eu-quero": "daniel paiva"
    });
    res.end("<h1>pagina não encontrada</h1>");
  }
});

servidor.listen(3000, (error) => {
  if (!error) {
    console.log("servidor online...");
  } else {
    console.log(error);
  }
});
