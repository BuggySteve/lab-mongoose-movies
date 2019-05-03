const express = require("express");
const app = express();
const Movie = require("../models/movie.js")

app.get("/add-movie", (req, res, next) => {
  res.render("addMovie");
});

app.post("/add-movie", (req, res, next) => {
  let newMovie = {
    title: req.body.title,
    year: req.body.year,
    director: req.body.director,
    duration: req.body.duration,
    genre: req.body.genre,
    rate: req.body.rate
  };
  Movie.create(newMovie, (err) => {
    if (err) res.send("Error");
    else res.redirect("/movies");
  });
});

module.exports = app;