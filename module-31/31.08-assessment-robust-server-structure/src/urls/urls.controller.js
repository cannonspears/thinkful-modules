const urls = require("../data/urls-data");
const uses = require("../data/uses-data");

let nextId = 3;

function list(req, res, next) {
  res.send({ data: urls });
}

function validateHref(req, res, next) {
  if (!req.body.data || !req.body.data.href) {
    next({
      status: 400,
      message: `Create request must include an href.`,
    });
  } else {
    next();
  }
}

function create(req, res, next) {
  let newUrl = {
    id: nextId,
    href: req.body.data.href,
  };
  nextId++;
  urls.push(newUrl);
  res.status(201).send({ data: newUrl });
}

function urlExists(req, res, next) {
  const { urlId } = req.params;
  const foundUrl = urls.find((url) => url.id === Number(urlId));
  if (foundUrl) {
    res.locals.url = foundUrl;
    return next();
  }
  next({
    status: 404,
    message: `Url id not found: ${urlId}`,
  });
}

function read(req, res, next) {
  const urlId = Number(req.params.urlId);
  const time = Date.now();

  const newUse = {
    id: nextId,
    urlId: urlId,
    time: time,
  };

  nextId++;
  uses.push(newUse);

  res.json({ data: res.locals.url, use: newUse });
}

function update(req, res, next) {
  const { id } = res.locals.url;
  Object.assign(res.locals.url, req.body.data, { id });
  res.json({ data: res.locals.url });
}

module.exports = {
  list,
  create: [validateHref, create],
  read: [urlExists, read],
  update: [urlExists, update],
  urlExists,
};
