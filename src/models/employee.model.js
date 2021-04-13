const mongoose = require('mongoose')

// Define collection and schema
const EmployeeSchema = new mongoose.Schema({

  _id: {
    type: String,
    required: true
  },
  name: {
    type: String
  },
  email: {
    type: String,
    unique: true
  },
  designation: {
    type: String
  },
  phoneNumber: {
    type: Number
  }
})

module.exports = mongoose.model('Employee', EmployeeSchema)
