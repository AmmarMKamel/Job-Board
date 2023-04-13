const express = require("express");
const SeekerRoute = express.Router();
const Seeker = require("../models/Seeker");

SeekerRoute.get("/:id", async (req, res) => {
  res.status(200).render("seeker");
});

SeekerRoute.post("/");

SeekerRoute.patch("/");

SeekerRoute.delete("/");

module.exports = SeekerRoute;
