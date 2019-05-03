const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Movie = require("../models/movie.js");

app.post("/update", (req, res, next) => {
  let updateMovie = {
    title: req.body.title,
    year: req.body.year,
    director: req.body.director,
    duration: req.body.duration,
    genre: req.body.genre,
    rate: req.body.rate
  }
  let objectId = mongoose.Types.ObjectId(req.body.id);
  Movie.updateOne({ _id: objectId }, updateMovie, (err) => {
    if (err) res.send("Movie update failed...")
    else res.redirect(`/single-movie?id=${objectId}`);
  });
});

module.exports = app;