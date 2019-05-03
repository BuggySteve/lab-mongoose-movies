const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Movie = require("../models/movie.js")

app.get("/single-movie", (req, res, next) => {
  let objectId = mongoose.Types.ObjectId(req.query.id);
  Movie.find({ _id: objectId }, (err, result) => {
    res.render("singleMovie", { movie: result[0] });
  });
});

module.exports = app;