require('./src/config/config')
require('./src/helper/db')

const express = require('express')
const bodyParser = require('body-parser')

const employeeRoute = require('./src/routes/employee.route')

var app = express()

// middleware
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: false
  })
)
app.use('/api', employeeRoute)


// start server
app.listen(process.env.PORT, () => console.log(`Server started at port : ${process.env.PORT}`))
