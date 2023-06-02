const router = require("express").Router();
const controller = require("./players.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");

router.route("/").get(controller.list).post(controller.create);

router.route("/:playerId").get(controller.read);

module.exports = router;
