const express = require("express");
const LoginRoute = express.Router();
// const { query_runner, query_error } = require("../helpers/mysql_helpers");

LoginRoute.get("/", (req, res) => {
  res.status(200).render("login");
});

module.exports = LoginRoute;
