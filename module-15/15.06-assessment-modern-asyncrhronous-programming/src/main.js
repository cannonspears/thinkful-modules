const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function isValid({ id, name, meaning, quadrant, starsWithPlanets }) {
  return id && name && meaning && quadrant && starsWithPlanets;
}

function update(constellation) {
  const {id} = constellation
  return axios.put(`${BASE_URL}/constellations/${id}`, constellation)
    .then((response) => {
      return response
  }).catch((error) => {
      return `Updating constellation (id: ${id}) failed.`
  })
}

function bulkImport(constellations) {
  if (!Array.isArray(constellations)) return Promise.reject({ error: "Inputted argument must be an array." })
  let isDataSetValid = constellations.every(constellation => {
    let result = isValid(constellation)
    return result
  }) 
  if (!isDataSetValid) return Promise.reject({ error: "All constellations must include relevant fields." })
  
  let constellationArray = constellations.map(constellation => {
    return update(constellation)
  })
 
  return Promise.allSettled(constellationArray)

}

module.exports = { bulkImport, update };
