const planets = require("../../models/planets.model");

//boa pratica adicionar o return
function getAllPlanets(req, res) {
  return res.status(200).json(planets);
}

module.exports = {
  getAllPlanets
};
