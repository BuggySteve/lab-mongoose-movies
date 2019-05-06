const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Celebrity = require("../models/celebrity.js");

app.post("/update-celebrity", (req, res, next) => {
  let updateCelebrity = {
    name: req.body.name,
    occupation: req.body.occupation,
    catch_phrase: req.body.catch_phrase,
    movies: req.body.movies,
    oscars: req.body.oscars
  }
  let objectId = mongoose.Types.ObjectId(req.body.id);
  Celebrity.updateOne({ _id: objectId }, updateCelebrity, (err) => {
    if (err) res.send("Celebrity update failed...")
    else res.redirect(`/single-celebrity?id=${objectId}`);
  });
});

module.exports = app;