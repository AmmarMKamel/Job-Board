const express = require("express");
const bcrypt = require("bcrypt");
const Seeker = require("../models/Seeker");
const Employer = require("../models/Employer");
const RegisterRoute = express.Router();

// Password hashing middleware
function hashPassword(req, res, next) {
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(10);
  req.body.password = bcrypt.hashSync(password, salt);
  next();
}

// Registeration page
RegisterRoute.get("/", (req, res) => {
  if (req.cookies.session_id) {
    var isLogged = true;
  }

  res.status(200).render("register", { isLogged });
});

// Register as a job seeker
RegisterRoute.post("/seeker", hashPassword, (req, res) => {
  Seeker.create({ ...req.body })
    .then(() => res.status(200).redirect("/login"))
    .catch((err) => res.status(500).json(err.message));
});

// Register as an employer
RegisterRoute.post("/employer", hashPassword, (req, res) => {
  Employer.create({ ...req.body })
    .then(() => res.status(200).redirect("/login"))
    .catch((err) => res.status(500).json(err.message));
});

module.exports = RegisterRoute;
