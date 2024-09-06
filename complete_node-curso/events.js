const EventEmitter = require("events");
const celebridade = new EventEmitter();

celebridade.on("ganhou a corrida", () => {
  console.log("Parabéns");
});

celebridade.on("competiu", (resultado) => {
  if (resultado === "venceu") {
    console.log("parabéns");
  } else {
    console.log("tente novamente");
  }
});

process.on("exit", (code) => {
  console.log("Processo executado", code);
});
celebridade.emit("ganhou a corrida");
celebridade.emit("competiu", "perdeu");
