const express = require("express");
const app = express();
app.use(express.json());

const urlsRouter = require("./urls/urls.router");
app.use("/urls", urlsRouter);

const usesRouter = require("./uses/uses.router");
app.use("/uses", usesRouter);

app.use((req, res, next) => {
  next({ status: 404, message: `Path not found: ${req.originalUrl}` });
});

app.use((err, req, res, next) => {
  const { status = 500, message = "Something went wrong!" } = err;
  res.status(status).json({ error: message });
});

module.exports = app;
