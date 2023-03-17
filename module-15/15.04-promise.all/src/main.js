const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

function bulkDelete(ids) {
  const deleteRequests = ids.map((id) => {
    return axios.delete(`${BASE_URL}/constellations/${id}`)
      .then((response) => {
        return {id}
    })
  })
  return Promise.all(deleteRequests)
}

module.exports = {
  bulkDelete,
};
