const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity.js");
const Movie = require("../models/movie.js");

app.get("/add-celebrity", (req, res, next) => {
  Movie.find({}, (err, result) => {
    res.render("addCelebrity", { movies: result });
  });
});

app.post("/add-celebrity", (req, res, next) => {

  let movieIds = req.body.movies.map((id) => {
    return mongoose.Types.ObjectId(id)
  })

  let newCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catch_phrase: req.body.catch_phrase,
    movies: movieIds,
    oscars: req.body.oscars
  };
  Celebrity.create(newCelebrity, (err) => {
    if (err) res.send("Error");
    else res.redirect("/celebrities");
  });
});

module.exports = app;