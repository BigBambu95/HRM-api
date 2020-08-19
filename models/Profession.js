const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const professionSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const Profession = mongoose.model("Profession", professionSchema, "vacancy-templates");

module.exports = Profession;
