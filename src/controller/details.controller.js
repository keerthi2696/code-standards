import { model } from 'mongoose'
import('../models/detail.model')
const details = model('Employee_Details')
const employee = model('Employee')

// Update employee details

export function create (req, res, next) {
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
export function getDetailById (req, res) {
  employee.findById(req.params.id, (error, data) => {
    if (error) {
      return (error)
    } else {
      res.json(data)
    }
  })
}
