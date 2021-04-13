/* eslint-disable array-callback-return */
const employee = require('../models/employee.model')

// Create new Employee info
module.exports.create = (req, res, next) => {
  employee.create(req.body, (err, data) => {
    if (err) {
      if (err.code === 11000) { res.status(422).send(['Duplicate email adrress found.']) } else return next(err)
    } else {
      res.json(data)
    }
  })
}

// Get Employee List
module.exports.getAll = (req, res) => {
  employee.find((error, data) => {
    if (error) {
      return (error)
    } else {
      res.json(data)
    }
  })
}

// Get Employee Name List
module.exports.getAllNames = (req, res) => {
  employee.find({}, { name: 1, _id: 0 }, (error, data) => {
    if (error) {
      return (error)
    } else {
      res.json(data)
    }
  })
}

// Get Employee info By Id
module.exports.getById = (req, res) => {
  employee.findById(req.params.id, (error, data) => {
    if (error) {
      return (error)
    } else {
      res.json(data)
    }
  })
}

// Update Employee Info
module.exports.update = (req, res, next) => {
  employee.findByIdAndUpdate(
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
  employee.findOneAndRemove(req.params.id, (error, data) => {
    if (error) {
      return next(error)
    } else {
      res.status(200).json({
        msg: data
      })
    }
  })
}
