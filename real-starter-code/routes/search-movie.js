const express = require("express");
const app = express();

app.get("/search-movie", (req, res, next) => {
  res.render("searchMovie");
});

module.exports = app;