const express = require("express");
const http = require("http");
const PORT = process.env.PORT || 8000;
const app = express();
const server = http.createServer(app);
const planetsRouter = require("./routes/planets/planets.router");
const cors = require("cors");

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(planetsRouter);
app.use(cors({ origin: "http://localhost:3000" }));

server.listen(PORT, () => {
  console.log("Servidor online...", `Porta: ${PORT}`);
});

module.exports = app;
