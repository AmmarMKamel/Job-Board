const express = require("express");
const Seeker = require("../models/Seeker");
const Employer = require("../models/Employer");
const RegisterRoute = express.Router();

RegisterRoute.get("/", (req, res) => {
  res.status(200).render("register");
});

RegisterRoute.post("/seeker", (req, res) => {
  Seeker.create({ ...req.body })
    .then(() => res.status(200).redirect("/login"))
    .catch((err) => res.status(500).json(err.message));
});

RegisterRoute.post("/employer", (req, res) => {
  Employer.create({ ...req.body })
    .then(() => res.status(200).redirect("/login"))
    .catch((err) => res.status(500).json(err.message));
});

module.exports = RegisterRoute;
