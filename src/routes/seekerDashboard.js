const express = require("express");
const SeekerRoute = express.Router();
// const { query_runner, query_error } = require("../helpers/mysql_helpers");

SeekerRoute.get("/", (req, res) => {
  res.status(200).render("seeker");
});

module.exports = SeekerRoute;
