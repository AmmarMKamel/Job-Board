const express = require("express");
const JobDetailsRoute = express.Router();
// const { query_runner, query_error } = require("../helpers/mysql_helpers");

JobDetailsRoute.get("/", (req, res) => {
  res.status(200).render("job-details");
});

module.exports = JobDetailsRoute;
