const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vacancySchema = new Schema({
  profession: String,
  url: String,
  office: String,
  date: Date,
  quickly: Boolean,
  candidates: [
    { type: Schema.Types.ObjectId, ref: "Candidate" }
  ]
});

const Vacancy = mongoose.model("Vacancy", vacancySchema);

module.exports = Vacancy;
