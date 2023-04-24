const express = require("express");
const Seeker = require("../models/Seeker");
const Employer = require("../models/Employer");
const LoginRoute = express.Router();

LoginRoute.get("/", async (req, res) => {
  res.status(200).render("login");
});

LoginRoute.post("/seeker", async (req, res) => {
  const seeker = await Seeker.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  res.status(200).redirect(`/seeker/${seeker.id}`);
});

LoginRoute.post("/employer", async (req, res) => {
  const employer = await Employer.findOne({
    where: {
      email: req.body.email,
      password: req.body.password,
    },
  });
  res.status(200).redirect(`/employer/${employer.id}`);
});

module.exports = LoginRoute;
