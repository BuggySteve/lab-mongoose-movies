const express = require("express");
const mongoose = require("mongoose");
const app = express();
const Celebrity = require("../models/celebrity")

app.get("/delete-celebrity", (req, res, next) => {
  let objectId = mongoose.Types.ObjectId(req.query.id);
  Celebrity.deleteOne({ _id: objectId }, (err) => {
    if (err) res.send("Error");
    else res.redirect("/celebrities");
  });
});

module.exports = app;