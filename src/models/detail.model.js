const mongoose = require('mongoose')

// Define collection and schema
const Employee_DetailSchema = new mongoose.Schema({

  _id: {
    type: String
  },
  age: {
    type: Number
  },
  DOB: {
    type: String
  },
  DOJ: {
    type: String
  },
  BloodGroup: {
    type: String
  }
}, { _id: false })

module.exports = mongoose.model('Employee_Details', Employee_DetailSchema)
