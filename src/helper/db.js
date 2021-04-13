const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI,
  { useUnifiedTopology: true },
  (err) => {
    if (!err) {
      console.log('MongoDB connection succeeded.')
    } else {
      console.log('Error in MongoDB connection.')
    }
  }
)
