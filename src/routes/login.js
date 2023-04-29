const express = require("express");
const bcrypt = require("bcrypt");
const Seeker = require("../models/Seeker");
const Employer = require("../models/Employer");
const LoginRoute = express.Router();

async function auth(req, res, next) {
  const dbModel =
    req.url.split("/")[1].charAt(0).toUpperCase() +
    req.url.split("/")[1].slice(1);
  const email = req.body.email;
  const password = req.body.password;

  const user = await eval(dbModel).findOne({ where: { email } });

  if (!user) {
    res.status(401).json({ error: "Invalid username or password" });
    return;
  }

  const isPasswordCorrect = await bcrypt.compare(password, user.password);
  if (!isPasswordCorrect) {
    res.status(401).json({ error: "Invalid username or password" });
    return;
  }
  req.user = user;
  next();
}

LoginRoute.get("/", async (req, res) => {
  res.status(200).render("login");
});

// Login as a jobseeker
LoginRoute.post("/seeker", auth, async (req, res) => {
  req.session.user = req.user;
  res.status(200).redirect(`/seeker/${req.user.id}`);
});

// Login as an employer
LoginRoute.post("/employer", auth, async (req, res) => {
  req.session.user = req.user;
  res.status(200).redirect(`/employer/${req.user.id}`);
});

module.exports = LoginRoute;
