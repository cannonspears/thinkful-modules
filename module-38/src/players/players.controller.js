const service = require("./players.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function playerExists(req, res, next) {
  const { playerId } = req.params;

  const player = await service.read(playerId);

  if (player) {
    res.locals.player = player;
    return next();
  }
  next({ status: 404, message: `Player id not found: ${playerId}` });
}

async function list(req, res, next) {
  res.json({ data: await service.list() });
}

function read(req, res) {
  res.json({ data: res.locals.player });
}

async function create(req, res) {
  res.status(201).json({ data: await service.create(req.body.data) });
}

// Make sure exports are correct.
module.exports = {
  list,
  read: [asyncErrorBoundary(playerExists), read],
  create,
};
