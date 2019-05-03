const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Movie = require("../models/movie.js")

app.get("/movies", (req, res, next) => {
  Movie.find({}, (err, result) => {
    res.render("movieList", { movies: result });
  });
});

module.exports = app;