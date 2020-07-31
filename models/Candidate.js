const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema({
  name: String,
  age: Number,
  exp: Number,
  desiredSalary: Number,
  status: String,
  desiredProfession: String,
  desiredProfessionEng: String,
});

const Candidate = mongoose.model("Candidate", candidateSchema);

module.exports = Candidate;
