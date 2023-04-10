const express = require("express");
const RegisterRoute = express.Router();
// const { query_runner, query_error } = require("../helpers/mysql_helpers");

RegisterRoute.get("/", (req, res) => {
  res.status(200).render("register");
});

module.exports = RegisterRoute;
