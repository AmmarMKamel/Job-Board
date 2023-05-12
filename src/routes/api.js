const express = require("express");
const router = express.Router();
const Employer = require("../models/Employer");
const Seeker = require("../models/Seeker");
const Job = require("../models/Job");

// Get all employers
router.get("/employers", (req, res) => {
  Employer.findAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err.message));
});

// Get all jobs
router.get("/jobs", (req, res) => {
  Job.findAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err.message));
});

// Get all seekers
router.get("/seekers", (req, res) => {
  Seeker.findAll()
    .then((data) => res.status(200).json(data))
    .catch((err) => res.status(500).json(err.message));
});

module.exports = router;
