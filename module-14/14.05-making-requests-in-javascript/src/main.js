const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function getAllNames() {
  axios.get(BASE_URL + "/constellations")
    .then((response) => {
      let names = response.data.map((constellation) => {
        return constellation.name;
      });
    console.log(names);
  });
}

function getConstellationsByQuadrant(quadrant) {
  axios.get(BASE_URL + "/constellations")
    .then((response) => {
      let quadrants = response.data.filter((constellation) => {
        return quadrant === constellation.quadrant;
      });
    console.log(quadrants);
  });
}

module.exports = {
  getAllNames,
  getConstellationsByQuadrant,
};
