const express = require("express");
const JobListingsRoute = express.Router();
const Job = require("../models/Job");
const { Op } = require("sequelize");

JobListingsRoute.get("/jobs", async (req, res) => {
  const jobs = await Job.findAll();
  res.status(200).render("job-listings", { jobs });
});

JobListingsRoute.get("/jobs/search", async (req, res) => {
  const { q, location, level, type } = req.query;

  // Define the search criteria using Sequelize operators
  const where = {
    [Op.or]: [
      { title: { [Op.substring]: q } },
      { description: { [Op.substring]: q } },
    ],
  };

  if (location) {
    where.location = { [Op.eq]: location };
  }

  if (level) {
    where.level = { [Op.eq]: level };
  }

  if (type) {
    where.type = { [Op.eq]: type };
  }

  try {
    // Find the matching jobs using Sequelize
    const jobs = await Job.findAll({ where });
    res.status(200).render("job-listings", { jobs });
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while searching for jobs.");
  }
});

module.exports = JobListingsRoute;
