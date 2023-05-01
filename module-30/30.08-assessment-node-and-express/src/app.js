const express = require("express")
const app = express()
const validateZip = require("./middleware/validateZip")
const getZoos = require("./utils/getZoos")

app.get("/zoos/all", (req, res, next) => {
  if (req.query.admin !== "true") {
    return next("You do not have access to that route.")
  }
    const zoos = getZoos()
    const info = zoos.join("; ")
    return res.send(`All zoos: ${info}`)
})

app.get("/zoos/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip
  const zoos = getZoos(zip)
  if (!zoos.length) {
    return res.send(`${zip} has no zoos.`)
  } 
  const info = zoos.join("; ")
    res.send(`${zip} zoos: ${info}`)
})

app.get("/check/:zip", validateZip, (req, res, next) => {
  const zip = req.params.zip
  const zoos = getZoos(zip)
  if (zoos) {
    res.send(`${zip} exists in our records.`)
  } else {
    res.send(`${zip} does not exist in our records.`)
  }
})

app.use((req,res,next) => {
  next(`That route could not be found!`)
})

app.use((err,req,res,next) => {
  res.send(err || "Internal server error")
})

module.exports = app