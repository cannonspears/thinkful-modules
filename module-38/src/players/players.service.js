const knex = require("../db/connection");

const tableName = "players";

function list() {
  return knex("players").select("*");
}

function read(playerId) {
  return knex("players").select("*").where({ "players.id": playerId }).first();
}

function create(newPlayer) {
  return knex("players")
    .insert(newPlayer)
    .returning("*")
    .then((createdRecords) => createdRecords[0]);
}

module.exports = {
  list,
  create,
  read,
};
