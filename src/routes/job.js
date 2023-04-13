const express = require("express");
const JobRoute = express.Router();
const Job = require("../models/Job");

JobRoute.get("/:id", async (req, res) => {
  const job = await Job.findByPk(req.params.id);
  res.status(200).render("job-details", { job });
});

module.exports = JobRoute;
