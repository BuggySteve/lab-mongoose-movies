const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Celebrity = require("../models/celebrity.js");

app.get("/single-celebrity", (req, res, next) => {
  let objectId = mongoose.Types.ObjectId(req.query.id);
  Celebrity
    .findOne({ _id: objectId })
    .populate("movies")
    .then((result) => {
      res.render("singleCelebrity", { celebrity: result });
    })
    .catch((err) => {
      res.send(err)
    });
});

module.exports = app;