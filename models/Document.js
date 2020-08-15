const mongoose = require('mongoose')
const Schema = mongoose.Schema

const documentSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true,
    default: new Date()
  },
  fileID: {
    type: String,
    required: true
  }
})

const Document = mongoose.model('Document', documentSchema)

module.exports = Document