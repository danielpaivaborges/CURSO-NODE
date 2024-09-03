"use strict";
const Sequelize = require("sequelize");
const connection = require("../database/database.js");

const Pergunta = connection.define(
  "perguntas",
  {
    titulo: {
      type: Sequelize.STRING,
      allowNull: false
    },
    descricao: {
      type: Sequelize.TEXT,
      allowNull: false
    }
  },
  {}
);

Pergunta.sync({ force: false }).then(()=>{
    console.log("tabela criada/atualizada com sucesso");
});

module.exports = Pergunta;
