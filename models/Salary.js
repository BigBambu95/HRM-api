const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const salarySchema = new Schema({
  workerid: String,
  year: {
    type: Number,
    required: true
  },
  month: {
    type: String,
    required: true
  },
  hours: {
    type: Number,
    required: true
  },
  hourlySalary: {
    type: Number,
    required: true
  },
  lateness: {
    type: Number,
    default: 0,
    required: true
  },
  absenteeism: {
    type: Number,
    default: 0,
    required: true
  }
})

const Salary = mongoose.model('Salary', salarySchema);

module.exports = Salary;