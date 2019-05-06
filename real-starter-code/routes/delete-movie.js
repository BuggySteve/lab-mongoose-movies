const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Movie = require("../models/movie.js")

app.get("/delete-movie", (req, res, next) => {
  let objectId = mongoose.Types.ObjectId(req.query.id);
  Movie.deleteOne({ _id: objectId }, (err) => {
    if (err) res.send("Error");
    else res.redirect("/movies");
  });
});

module.exports = app;