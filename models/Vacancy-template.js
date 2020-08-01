const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const vacancyTemplateSchema = new Schema({
  name: {
    type: String,
    required: true
  }
});

const VacancyTemplate = mongoose.model("VacancyTemplate", vacancyTemplateSchema, "vacancy-templates");

module.exports = VacancyTemplate;
