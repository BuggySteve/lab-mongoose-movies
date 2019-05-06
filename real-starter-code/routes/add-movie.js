const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");
const Movie = require("../models/movie.js");

app.get("/add-movie", (req, res, next) => {
  Celebrity.find({}, (err, result) => {
    res.render("addMovie", { celebrities: result });
  });
});

app.post("/add-movie", (req, res, next) => {

  let celebrityIds = req.body.celebrities.map((id) => {
    return mongoose.Types.ObjectId(id)
  })

  let newMovie = {
    title: req.body.title,
    year: req.body.year,
    director: req.body.director,
    duration: req.body.duration,
    genre: req.body.genre,
    rate: req.body.rate,
    actors: celebrityIds
  };
  Movie.create(newMovie, (err) => {
    if (err) res.send("Error");
    else res.redirect("/movies");
  });
});

module.exports = app;