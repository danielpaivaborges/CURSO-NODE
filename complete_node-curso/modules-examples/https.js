"use strict";

const send = require("./request");
const read = require("./response");

function request(url, data) {
  send(url, data);
  return read();
}
const resposta = request("www.google.com.br", "ola mundo");
console.log(resposta);
