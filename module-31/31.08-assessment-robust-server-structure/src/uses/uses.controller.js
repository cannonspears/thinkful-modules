const uses = require("../data/uses-data");

let nextId = 3;

function list(req, res, next) {
  let { urlId } = req.params;
  if (urlId) {
    urlId = Number(urlId);
    res.send({ data: uses.filter((use) => use.urlId === urlId) });
  } else {
    res.send({ data: uses });
  }
}

function validateUseExists(req, res, next) {
  let { useId } = req.params;
  useId = Number(useId);
  let index = uses.findIndex((use) => use.id === useId);
  if (index < 0) {
    next({
      status: 404,
      message: `Could not find use with id: ${useId}`,
    });
  } else {
    res.locals.index = index;
    res.locals.use = uses[index];
    next();
  }
}

function read(req, res, next) {
  res.send({ data: res.locals.use });
}

function destroy(req, res, next) {
  const { useId } = req.params;
  const index = uses.findIndex((use) => use.id === Number(useId));
  const deletedOrders = uses.splice(index, 1);
  res.sendStatus(204);
}

module.exports = {
  list,
  read: [validateUseExists, read],
  destroy: [validateUseExists, destroy],
};
