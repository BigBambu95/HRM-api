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
  file: {
    type: { 
      id: String,
      name: String,
      ext: String,
      size: Number,
    },
    required: true
  }
})

const Document = mongoose.model('Document', documentSchema)

module.exports = Document