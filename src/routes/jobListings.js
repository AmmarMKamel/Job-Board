const express = require("express");
const JobListingsRoute = express.Router();
// const { query_runner, query_error } = require("../helpers/mysql_helpers");

JobListingsRoute.get("/", (req, res) => {
  res.status(200).render("job-listings");
});

module.exports = JobListingsRoute;
