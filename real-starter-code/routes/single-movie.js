const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Movie = require("../models/movie.js")

app.get("/single-movie", (req, res, next) => {
  let objectId = mongoose.Types.ObjectId(req.query.id);
  Movie
    .findOne({ _id: objectId })
    .populate("actors")
    .then((result) => {
      res.render("singleMovie", { movie: result });
    })
    .catch((err) => {
      res.send(err)
    });
});

module.exports = app;