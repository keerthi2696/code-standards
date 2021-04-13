const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let EmployeeSchema = new mongoose.Schema({
   
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