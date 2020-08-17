const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workerSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  profession: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: false
  },
  phone: {
    type: String,
    required: false
  },
  office: {
    type: String,
    required: true
  },
  department: {
    type: Schema.Types.ObjectId, 
    ref: "Department",
    required: true
  },
  status: {
    type: String,
    required: false
  },
  avatar: {
    type: String,
    required: false
  },
  tags: {
    type: Array,
    required: false
  }
});

const Worker = mongoose.model("Worker", workerSchema);

module.exports = Worker;
