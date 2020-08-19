const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vacancySchema = new Schema({
  profession: {
    type: Schema.Types.ObjectId,
    ref: "Profession",
    required: true
  },
  url: String,
  office: {
    type: Schema.Types.ObjectId,
    ref: "Office",
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  quickly: Boolean,
  candidates: [
    { type: Schema.Types.ObjectId, ref: "Candidate" }
  ]
});

const Vacancy = mongoose.model("Vacancy", vacancySchema);

module.exports = Vacancy;
