const express = require("express");
const hbs = require("hbs");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const bodyParser = require("body-parser");

app.use(express.static(path.join(__dirname, "/public")));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.set("view engine", "hbs");
app.set("views", __dirname + "/views");

hbs.registerPartials(__dirname + "/views/partials");

mongoose
  .connect("mongodb://localhost:27017/IMDB", { useNewUrlParser: true })
  .then(x => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  .catch(err => {
    console.error("Error connecting to mongo", err);
  });

app.use("/", require("./routes/index"));
app.use("/", require("./routes/movies"));
app.use("/", require("./routes/single-movie"));
app.use("/", require("./routes/add-movie"));
app.use("/", require("./routes/delete"));
app.use("/", require("./routes/update"));

app.listen(3000, () => {
  console.log(".get and thou shalt receive");
});
