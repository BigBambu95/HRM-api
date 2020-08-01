const mongoose = require('mongoose');
const { off } = require('./Vacancy');
const Schema = mongoose.Schema;

const officeSchema = new Schema({
  name: {
    type: String,
    required: true
  }
})

const Office = mongoose.model('Office', officeSchema);

module.exports = Office;