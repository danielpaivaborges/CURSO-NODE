"use strict";
import send from "./request.mjs";
import read from "./response.mjs";

function request(url, data) {
  send(url, data);
  return read();
}
const resposta = request("www.google.com.br", "ola mundo");
console.log(resposta);
