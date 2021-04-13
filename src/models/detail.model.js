const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Define collection and schema
let Employee_DetailSchema = new mongoose.Schema({
  
  _id:false,
   _id: {
      type: String
   },
   age: {
      type:Number
        },
   DOB: {
      type:String
        },
   DOJ: {
      type:String
      },
   BloodGroup: {
      type: String
   }
},{ _id : false })

module.exports = mongoose.model('Employee_Details', Employee_DetailSchema)