const Jobs = require("../models/jobs");
const Employers = require("../models/employers");

module.exports.HandleDBModel = (req, res, next) => {
  const route = req.url.split("/");
  if (route[1] === "api" && route[2] === "jobs") req.model = Jobs;
  else if (route[1] === "api" && route[2] === "employers")
    req.model = Employers;
  else if (route[1] === "api" && route[2] === "employers")
    req.model = Employers;
  next();
};
