"use strict";
const { parse } = require("csv-parse");
const fs = require("fs");
const results = [];

//filtrando os dados
function isHabitalePlanet(planet) {
  return (
    planet["koi_disposition"] === "CONFIRMED" &&
    planet["koi_insol"] > 0.36 &&
    planet["koi_insol"] < 1.11 &&
    planet["koi_prad"] < 1.6
  );
}

//criando o stream e fazendo um PIPE para redirecionar os dados para o parse
fs.createReadStream("kepler_data.csv")
  .pipe(
    parse({
      comment: "#",
      columns: true,
      delimiter: ","
    })
  )
  .on("data", (data) => {
    if (isHabitalePlanet(data)) {
      results.push(data);
    }
  })
  .on("error", (err) => {
    console.log(err);
  })
  .on("end", () => {
    console.log(
      `foram encontrados ${results.length} planetas habitáveis, são eles: `
    );
    console.log(
      results.map((planet) => {
        return planet["kepler_name"];
      })
    );
    console.log("fim da leitura");
  });
