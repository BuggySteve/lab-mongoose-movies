const express = require("express");
const app = express();
const mongoose = require("mongoose");
const Celebrity = require("../models/celebrity")

app.get("/celebrities", (req, res, next) => {
  Celebrity.find({}, (err, result) => {
    res.render("celebrityList", { celebrities: result });
  });
});

module.exports = app;