const mongoose = require('mongoose')
require('../models/employee.model')
const emp = mongoose.model('Employee')

// Create new Employee info
module.exports.create = (req, res, next) => {
  emp.create(req.body, (err, data) => {
    if (err) {
      if (err.code == 11000) { res.status(422).send(['Duplicate email adrress found.']) } else return next(err)
    } else {
      res.json(data)
    }
  })
}

// Get Employee List
module.exports.getAll = (req, res) => {
  emp.find((error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
}

// Get Employee Name List
module.exports.getAllNames = (req, res) => {
  emp.find({}, { name: 1, _id: 0 }, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
}

// Get Employee info By Id
module.exports.getById = (req, res) => {
  emp.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.json(data)
    }
  })
}

// Update Employee Info
module.exports.update = (req, res, next) => {
  emp.findByIdAndUpdate(
    req.params.id,
    {
      $set: req.body
    },
    (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.statusText = 'Your have updated succesfully'
        res.json(data)
      }
    }
  )
}

// Delete Employee info
module.exports.delete = (req, res, next) => {
  emp.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}
