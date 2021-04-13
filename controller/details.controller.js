const mongoose = require("mongoose");
require("../models/detail.model");
const details = mongoose.model("Employee_Details");

// Update employee details
module.exports.create = (req, res, next) => {
  details.create(req.body, (err, data) => {
    if (err) {
      if (err.code == 11000)
        res.status(422).send(["Duplicate email adrress found."]);
      else return next(err);
    } else {
      res.json(data);
    }
  });
};

// Get employee details by id
module.exports.getDetailById = (req, res) => {
  emp.findById(req.params.id, (error, data) => {
    if (error) {
      return next(error);
    } else {
      res.json(data);
    }
  });
};
