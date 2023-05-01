const { NODE_ENV = "development" } = process.env;
const express = require("express");
const app = express();

// Routes
app.get("/send/:message", (req, res, next) => {
  const message = req.params.message;
  if (message.length < 3) {
    next("Your message is too short!");
  } else {
    res.send(`Your message: ${message}`);
  }
});


app.use((req,res,next) => {
  res.send("An error occurred: Could not find route.")
})

app.use((err, req, res, next) => {
  res.send(`An error occurred: ${err}`);
});


// Error Handling

module.exports = app;
