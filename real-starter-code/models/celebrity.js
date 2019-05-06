const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const celebritySchema = new Schema(
  {
    name: { type: String },
    occupation: { type: String },
    catch_phrase: { type: String },
    movies: [{ type: mongoose.Schema.Types.ObjectId, ref: "Movies" }],
    oscars: { type: String }
  },
  { collection: "Celebrities" }
);

let Celebrity = mongoose.model("Celebrities", celebritySchema);

module.exports = Celebrity;