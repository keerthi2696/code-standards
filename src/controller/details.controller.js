const details = require('../models/detail.model')
const employee = require('../models/employee.model')

// Update employee details
module.exports.create = (req, res, next) => {
  details.create(req.body, (err, data) => {
    if (err) {
      if (err.code === 11000) { res.status(422).send(['Duplicate email adrress found.']) } else {
        return next(err)
      }
    } else {
      res.json(data)
    }
  })
}

// Get employee details by id
module.exports.getDetailById = (req, res, next) => {
  employee.findById(req.params.id, (error, data) => {
    if (error) {
      return (error)
    } else {
      res.json(data)
    }
  })
}
