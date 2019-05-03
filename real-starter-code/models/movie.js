const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const movieSchema = new Schema(
  {
    title: { type: String },
    year: { type: String },
    director: { type: String },
    duration: { type: String },
    genre: { type: Array },
    rate: { type: String }
  },
  { collection: "Movies" }
);

let Movie = mongoose.model("Movies", movieSchema);

module.exports = Movie;