const axios = require("../utils/axios");
const BASE_URL = "http://localhost:5000";

const url = `${BASE_URL}/constellations`;

function index() {
  return axios.get(url).then((response) => {
    console.log(response.data)
  });
}

function create(body) {
  return axios.post(url, body)
    .then((response) => {
      console.log(response.data)
  })
}

function show(id) {
  return axios.get(`${url}/${id}`).then((response) => {
    console.log(response.data);
  });
}

function update(id, body) {
  return axios.put(`${url}/${id}`, body).then((response) => {
    console.log(response.data);
  });
}

function destroy(id) {
  return axios.delete(`${url}/${id}`).then((response) => {
    console.log(response.data);
  });
}

module.exports = {
  index,
  create,
  show,
  update,
  destroy,
};
