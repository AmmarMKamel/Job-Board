const express = require("express");
const EmployerRoute = express.Router();
EmployerRoute.get("/:id", (req, res) => {
  res.status(200).render("employer");
});

EmployerRoute.post("/");

EmployerRoute.patch("/");

EmployerRoute.delete("/");

module.exports = EmployerRoute;
