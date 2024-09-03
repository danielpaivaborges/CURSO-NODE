const Sequelize = require("sequelize");

const conexao = new Sequelize("everos", "everos", "root2024", {
  host: "mysql30-farm10.kinghost.net",
  dialect: "mysql"
});

module.exports = conexao;
