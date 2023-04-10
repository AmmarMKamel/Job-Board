const express = require("express");
const EmployerRoute = express.Router();
// const { query_runner, query_error } = require("../helpers/mysql_helpers");

EmployerRoute.get("/", (req, res) => {
  res.status(200).render("employer");
});

module.exports = EmployerRoute;
