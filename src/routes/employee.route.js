const express = require('express')
const empRoute = express.Router()

const employeeController = require('../controller/employee.controller')
const detailsController = require('../controller/details.controller')

empRoute.post('/create', employeeController.create)
empRoute.get('/get-employee-list', employeeController.getAll)
empRoute.get('/get-employee/:id', employeeController.getById)
empRoute.put('/update-employee-info/:id', employeeController.update)
empRoute.delete('/delete-employee-info/:id', employeeController.delete)
empRoute.get('/get', employeeController.getAllNames)
empRoute.post('/employee-details', detailsController.create)
empRoute.get('/get-employee-details/:id', detailsController.getDetailById)

module.exports = empRoute
